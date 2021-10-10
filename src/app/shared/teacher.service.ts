import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { teacher } from '../models/teachers';
import { ApifunctionsService } from './apifunctions.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherService extends ApifunctionsService<teacher>{

  constructor(http: HttpClient) {
    super("http://localhost:3000/teachers", http)
   }
}
