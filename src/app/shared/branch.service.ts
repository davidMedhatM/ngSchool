import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { branch } from '../models/branch';
import { ApifunctionsService } from './apifunctions.service';

@Injectable({
  providedIn: 'root'
})
export class BranchService extends ApifunctionsService<branch> {

  constructor(http: HttpClient) { 
    super("http://localhost:3000/branches",http)
  }
}
