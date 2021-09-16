import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Planet } from '../models/planet';

@Injectable({
  providedIn: 'root'
})

export class PlanetService {

  url = 'https://localhost:44351/api/Planets';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

getPlanets(): Observable<Planet[]>{
  return this.httpClient.get<Planet[]>(this.url)
    .pipe(
      retry(2),
      catchError(this.handleError))
}

// Tratamento de erros
handleError(error: HttpErrorResponse) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    //CLIENTE
    errorMessage = error.error.message;
  } else {
    //SERVIDOR
    errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
};

}
