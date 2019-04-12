import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  endpoint = 'http://localhost:4022/v1'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  constructor(private http: HttpClient) { }

  private extractData(res: Response){
    let body = res;
    return body || [] || {};
  }

  getTeachers(): Observable<any>{
    return this.http.get(this.endpoint + '/listAdmin').pipe(
      map(this.extractData));
  }
}
