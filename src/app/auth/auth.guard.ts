import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CommondataService } from '../services/commondata.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  admin: any;

  constructor(private common:CommondataService, private route:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // this.common.admin.subscribe(res => { this.admin = res; console.log(res)})
    this.admin=localStorage.getItem('admin');
    if(this.admin=="true"){
      return true
    }
    this.route.navigateByUrl('/')
    return false
  }
  
}
