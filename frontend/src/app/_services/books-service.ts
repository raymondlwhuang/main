import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { books, booksDetail } from '../_infrastructure/data';
import { Book } from '../_models/book';
import { BookDetail } from '../_models/book-detail';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  book$ = new Subject<Book>();
  
  constructor() { }

  getBooks(): Observable<Book[]> {
    return of(books);
  }

  getAllBooksDetails(): Observable<BookDetail[]> {
    return of(booksDetail);
  }

}