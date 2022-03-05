import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommondataService {

  constructor() { }
  user =new Subject<boolean>();
  admin = new Subject<boolean>();
  isLoggedIn = new Subject<boolean>();
  username= new Subject<string>();
  
}
