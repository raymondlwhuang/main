import { Component, OnInit } from '@angular/core';
import {images} from '../../../_infrastructure/images'
@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {
  imagesList = images.imagesList;
  constructor() { }

  ngOnInit() {
  }

}
