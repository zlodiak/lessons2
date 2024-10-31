import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  BASE_URL = 'https://reqres.in/api/';

  constructor(private http: HttpClient) {}

  public get(url: string): Observable<any> {
    return this.http
      .get(this.BASE_URL + url)
      .pipe(map(result => result));
  }
}
