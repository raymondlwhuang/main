import { Component, OnInit, Output, EventEmitter, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Book } from 'src/app/_models/book';
import { BookService } from 'src/app/_services/books-service';

@Component({
  selector: 'app-books-select',
  templateUrl: './books-select.component.html',
  styleUrls: ['./books-select.component.css']
})
export class BooksSelectComponent implements OnInit {
  books : Book[];
  selectedOption: Book;
  constructor(private bookService : BookService){}
  ngOnInit(){
    this.bookService.getBooks().subscribe(data=>this.books=data);
  }
  onSelectChange(){
    this.bookService.book$.next(this.selectedOption);
  }
  showHide(){
    document.querySelectorAll("#show-hide textarea").forEach(ele=>ele.classList.toggle("hide"));
    document.querySelector('.unarchive').classList.toggle('turn');
  }
}
