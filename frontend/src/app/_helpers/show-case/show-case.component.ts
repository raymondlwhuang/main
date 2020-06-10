import { Component, Input,OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { DemoService } from 'src/app/_services/demo.service';
import { InputHolder } from 'src/app/_models/input-holder';
import { take, map, mapTo, mergeMap,pairwise, delay, switchMap, pluck, shareReplay } from 'rxjs/operators';
import { interval, concat, timer, forkJoin, fromEvent, of, Subscription, combineLatest} from 'rxjs';
import { HtmlConsole, AutoUnsubscribe } from 'src/app/_decorators/custom.decorator';

@Component({
  selector: 'app-show-case',
  templateUrl: './show-case.component.html',
  styleUrls: ['./show-case.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
@AutoUnsubscribe()
export class ShowCaseComponent implements OnChanges,OnDestroy {
  @Input() inputHolder : InputHolder;
  today : Date = new Date ();
  message : string;
  outputText : any = "";
  show : boolean = true;
  flag : string;
  previousFlag : string = '';
  subscriber: Subscription;
  promiseCount: number = 0;
  constructor(
              private demoService : DemoService,
              public changeDetectionRf : ChangeDetectorRef
              ) { }
  reset(){
    if(this.subscriber) this.subscriber.unsubscribe(); //stop any existing subscrition
    this.htmlConsole(''); //clear rxjs deom custom console
    this.show = true;
    this.outputText='';
    this.message = 'Please make your selection for show case';
    let outputEle = document.getElementById('output');
    let fireCaseOutputEle = document.getElementById('fire-case-output');
    if(outputEle) outputEle.removeAttribute('style');
    if(fireCaseOutputEle) fireCaseOutputEle.classList.remove('add-border');
}
  ngOnChanges(){
    if(this.inputHolder.helpPath && this.inputHolder.helpPath!='') {
      this.demoService.getHelpFile(this.inputHolder.helpPath).subscribe(outText=>{
        this.outputText=outText;
        this.changeDetectionRf.markForCheck();
      });

    }   
    this.flag = this.inputHolder.showCaseFlag;
    if(this.previousFlag!=this.flag) {
      this.reset();
      this.previousFlag = this.flag;
    }
    if(this.flag)
      this.message = this.flag;
    if(this.inputHolder.parentClick) this.message="Button Clicked";
  }
  
  showCode(){
    if(this.show) {
      this.show = false;
      document.getElementById('output').style.display = 'block';
      document.getElementById('show-code').innerText = 'Hide Code';
    }
    else {
      if(this.subscriber) this.subscriber.unsubscribe(); //stop any existing subscrition
      this.htmlConsole(''); //clear rxjs deom custom console
        
      this.show = true;
      document.getElementById('output').removeAttribute('style');
      document.getElementById('show-code').innerText = 'Show Code';
      document.getElementById('fire-case-output').classList.remove('add-border');
    }
  }
  rxjsCase(caseName : string){
    if(this.subscriber) this.subscriber.unsubscribe();
    document.getElementById('fire-case-output').classList.add('add-border');
    this.htmlConsole('');
    this.htmlConsole('subscribing....');
    
    const timer1$ = timer(3000).pipe(mapTo('this is timer 1'));
    const timer2$ = timer(1000).pipe(mapTo('this is timer 2'));
    switch (caseName) {
      case ('concat'):
        this.subscriber = concat(timer1$, timer2$) 
        .pipe(map(data=>'Timer: ' + data))
        .subscribe(
          value => this.htmlConsole(value),
          err => {},
          () =>  this.htmlConsole('...and it is done!')
        );    
        break;
      case ('forkJoin'):
        this.subscriber = forkJoin(timer1$,timer2$).subscribe(
            value => this.htmlConsole(value),
            err=>{},
            ()=>this.htmlConsole('...and it is done!')
          )
        break;
      case ('mergeMap'):
        this.htmlConsole('Please click some where to fired');
        const click$ = fromEvent(document, 'click');
        
        this.subscriber = click$
          .pipe(
            mergeMap((e: MouseEvent) =>of({location : 'Cursor location x: ' + e.clientX + 'y: ' + e.clientY })            )
          )
          .subscribe(r => this.htmlConsole(r.location));
          break;
      case ('pairwise'):
        this.htmlConsole('Please scroll with mouse to fired');
        this.subscriber = fromEvent(document, 'scroll')
                            .pipe(map(e => window.pageYOffset),pairwise())
                            .subscribe(pair => this.htmlConsole("Coordinate: (previouse,current) = " + pair.toString()));
        break;
      case ('switchMap'):
        const clicks$ = fromEvent(document, 'click');
        const innerObservable$ = interval(1000);
        
        this.subscriber = clicks$.pipe(switchMap(event => innerObservable$))
                                   .subscribe(val => this.htmlConsole(val));
        break;
      case ('combineLatest'):
        const intervalOne$ = interval(1000).pipe(map(val=>'intervalOne$: ' + val));
        const intervalTwo$ = interval(2000).pipe(map(val=>'intervalTwo$: ' + val));;
        
        this.subscriber = combineLatest(
                                intervalOne$,
                                intervalTwo$ 
                            ).subscribe(all => this.htmlConsole(all));
        break;
      case ('pluck'):
        const clicks = fromEvent(document, 'click');
        const tagNames = clicks.pipe(pluck('target', 'tagName'),shareReplay());
        this.subscriber = tagNames.subscribe(x => this.htmlConsole(x));
        break;
      case ('debounce'):

        break;
                                  }
  } 
  ngOnDestroy(){
    if(this.subscriber) this.subscriber.unsubscribe();
  }
  @HtmlConsole({id :'fire-case-output'})
  htmlConsole(message?) {
  }   
  MyDecision(wontDo=false) {
    let thisPromiseCount = ++this.promiseCount;

    let log = document.getElementById('log');
    if(wontDo) log.innerHTML = thisPromiseCount +') Don\'t want do my job(<small>Looking at my task</small>)<br/>';
    else log.innerHTML = thisPromiseCount +') Started doing my job(<small>Beging my task</small>)<br/>';
      let promise1 = new Promise((resolve, reject) => {
        if(wontDo) return reject([thisPromiseCount,"I am tired"]);
        else {
          log.innerHTML += thisPromiseCount +') Working as promised (<small>promise started</small>)<br/>';
          setTimeout(() =>resolve(thisPromiseCount), Math.random() * 2000 + 1000);
        }
      }
      ).then((val) =>log.innerHTML += val +') My job is done (<small>promise fullfiled and ended</small>)<br/>')
    .catch((reason) =>log.innerHTML += reason[0] +') Promise rejected resason: ' + reason[1]+'<br/>');

      log.innerHTML += thisPromiseCount +') Promise ' + (wontDo ? 'rejected' : ' made') + '(<small>Sync code terminated</small>)<br/>';
  }   
   
  destroySubscript(){
    if(this.subscriber) this.subscriber.unsubscribe();
  }
}
