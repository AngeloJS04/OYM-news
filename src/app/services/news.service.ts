import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;
const headers = new HttpHeaders({
  'X-Api-key': apiKey
});


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor( private http: HttpClient ) { }

  private runQuery<T>( query: string) {

  query = apiUrl + query;
  return this.http.get<T>(query, {headers} );
}

  getTopHeadlies() {
   return this.runQuery<RespuestaTopHeadlines>(`/top-headlines?country=ve`);
  // return this.http.get<RespuestaTopHeadlines>(`http://newsapi.org/v2/top-headlines?country=ve&apiKey=01711f5b7f3a4ccb919fe57d1353dcbe`);
  }

  getTopHeadlinesCategories(categories: string) {
    return this.runQuery<RespuestaTopHeadlines>(`/top-headlines?country=ve&category=${ categories }`);
    // return this.http.get(`http://newsapi.org/v2/top-headlines?country=ve&category=business&apiKey=01711f5b7f3a4ccb919fe57d1353dcbe`)
  }
}
