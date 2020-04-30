import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ImagesList } from 'src/app/_models/images-list';
import { InputHolder } from 'src/app/_models/input-holder';
import { images } from 'src/app/_infrastructure/images';
import { interval } from 'rxjs';
import { AutoUnsubscribe } from 'src/app/_decorators/custom.decorator';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
@AutoUnsubscribe()
export class ChangeDetectionComponent implements OnInit, OnDestroy {
  inputHolder : InputHolder = {showCaseFlag:'',demout:'',imagesList:''};;
  pointer = 0;
  imagesList : Array<ImagesList>= images.imagesList;
  intervalId: any;
  subscribe : any;
  constructor(private changeDetectRf : ChangeDetectorRef) { }

  ngOnInit() {
    this.subscribe = interval(3000).subscribe(() => {
      let thisHolder : InputHolder = this.inputHolder;
      let count = this.countUp();
      let url = this.imagesList[count].url;
      this.inputHolder = {...thisHolder,imagesList : url,showCaseFlag:''};
      this.changeDetectRf.detectChanges();
    });    
  }
  countUp (){
    this.pointer++;
    if(this.pointer > 47) this.pointer=0;
    return this.pointer;
  }
  ngOnDestroy(): void {
  }
  destroySubscript(){
    this.subscribe.unsubscribe();
  }
}
