import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Dog } from './dog';
import { MessageService } from './message.service';


@Injectable({ providedIn: 'root' })
export class DogService {

  private dogsUrl = 'https://dog.ceo/api/breeds/list/all';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET dogs from the server */
  getDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>(this.dogsUrl)
      .pipe(
        tap(_ => this.log('fetched dogs')),
        catchError(this.handleError<Dog[]>('getDogs', []))
      );
  }

  getDog(url:any): Observable<Dog[]> {
    return this.http.get<Dog[]>(url)
      .pipe(
        tap(_ => this.log('fetched dog')),
        catchError(this.handleError<Dog[]>('getDog', []))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a DogService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`DogService: ${message}`);
    console.log(`DogService: ${message}`);
  }
}
