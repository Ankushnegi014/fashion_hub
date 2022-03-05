import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { CommondataService } from './commondata.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private http:HttpClient, private commonservice:CommondataService,private route:Router) {
    // commonservice.user.subscribe(res => { if(res){ this.userheader=true } })
    // commonservice.admin.subscribe(res => { if(res){ this.adminheader=true } })
  }
  
  

}