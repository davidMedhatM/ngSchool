import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApifunctionsService<t> {
  constructor(@Inject(String)  public configurl: string, public http: HttpClient ) { }
  get():Observable<t>{
    return this.http.get<t>(this.configurl)
  }

  getbyid(id):Observable<t>{
    return this.http.get<t>(this.configurl + `/${id}`)
  }

  post(object):Observable<t>{
    return this.http.post<t>(this.configurl, object)
  }

  del(id):Observable<t>{
    return this.http.delete<t>(this.configurl + `/${id}`)
  }
  update(id, object):Observable<t>{
    return this.http.put<t>(this.configurl + `/${id}`, object)
  }

}
