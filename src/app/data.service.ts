import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Results } from './results';
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    })
  };

  private personUrl =
    'https://swapi.co/api';

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getAPI(api: string, input: string): Observable<any> {
    return this.http.get<any[]>(`${this.personUrl}/${api}/?search=${input}`)
      .pipe(catchError(this.handleError("getAPI", [])));
  }
}