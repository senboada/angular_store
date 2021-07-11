import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '@core/models/random-user';


@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(
    private http: HttpClient
  ) { }

  getRandomUsers(cantidad : number): Observable<User[]>
  {
    let user = this.http.get(`${environment.url_api_random_users}/api/?results=${cantidad}`).pipe(
      map((response :any) => {
        return response.results as User[];
      })
    );
    return user;
  }
}
