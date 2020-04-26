import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';
import { interval } from 'rxjs';
import { AutoUnsubscribe } from '../../_decorators/custom.decorator';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css']
})
@AutoUnsubscribe()
export class EmploymentComponent implements OnInit, OnDestroy {
  slideIndex = 0;
  slides : any;
  imgUrl1 = environment.helpUrl+'/images/me1.jpg';
  imgUrl2 = environment.helpUrl+'/images/me2.jpg';
  subscriber : any;
  constructor() { }

  ngOnInit() {
    this.slides = document.getElementsByClassName("mySlides")  as HTMLCollectionOf<HTMLElement>;
    this.slides[this.slideIndex].style.display = "none";
    this.subscriber = interval(5000).subscribe(()=>{
      for (let i = 0; i < this.slides.length; i++) {
        this.slides[i].style.display = "none";  
      }
      this.slides[this.slideIndex].style.display = "block"; 
      this.slideIndex++;
      if (this.slideIndex >= this.slides.length) {this.slideIndex = 0}  

    });
  }
  ngOnDestroy() : void {}
}
