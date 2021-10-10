import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { course } from '../models/course';
import { ApifunctionsService } from './apifunctions.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService extends ApifunctionsService<course>{

  constructor(http: HttpClient) {
    super("http://localhost:3000/courses",http);
  }
}
