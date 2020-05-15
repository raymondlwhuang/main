import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Book } from 'src/app/_models/book';
import { BookService } from 'src/app/_services/books-service';
import { BookDetail } from 'src/app/_models/book-detail';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  books : Book[];
  booksDetail : BookDetail[];
  bookDetail : any;
  isShow: boolean;
  constructor(private bookService : BookService){}
  ngOnInit(){
    this.bookService.getAllBooksDetails().subscribe(item=>this.booksDetail=item);
    this.bookService.book$.subscribe(data=>{
      this.bookDetail=this.booksDetail.find(item=>item.title==data.title);
      this.bookDetail['author'] = data.author;
    });
  }
  showAll(){
    this.isShow=!this.isShow;
  }
  showHide(){
    document.querySelectorAll("#show-hide textarea").forEach(ele=>ele.classList.toggle("hide"));
    document.querySelector('.unarchive').classList.toggle('turn');
  }

}