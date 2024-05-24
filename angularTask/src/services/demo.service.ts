import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  private apiKey = 'e7c50714af74428392e30e3a11b55e56';
  private apiUrl = 'https://api.spoonacular.com/recipes/complexSearch';
  foodName!: new () => Subject<string>;

  constructor(private _httpClient: HttpClient) { }

  getSearchResult(query: string):Observable<any>{
    const url = `${this.apiUrl}?query=${query}&number=5&apiKey=${this.apiKey}`;
    return this._httpClient.get<any>(url);
  }
}
