import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Favorite } from '../_models/favorite';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private _url : string = '../assets/json/favorite.json';
  constructor(private http: HttpClient) { }
  getFavorites () : Observable <Favorite[]> {
    return this.http.get<Favorite[]>(this._url);
  }
}
