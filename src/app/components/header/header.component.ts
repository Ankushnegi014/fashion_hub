import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommondataService } from 'src/app/services/commondata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{
  clicked:boolean=false;
  resnavbutton:boolean=false;
  isloggedin: boolean | undefined ;
  userData:any;
  constructor(private common:CommondataService, private route:Router) { }
  
  userheader:boolean=true
  adminheader:boolean=false
  username:string | undefined;

  ngOnInit(): void {
    this.common.user.subscribe(res=>{ this.userheader=res })
    this.common.admin.subscribe(res => { this.adminheader = res })
    this.common.isLoggedIn.subscribe(res => { this.isloggedin = res })
    this.common.username.subscribe(res => { this.username = res })
    
    
  }
  ngOnDestroy(): void {
      localStorage.clear();
  }
  items(){ this.clicked=!this.clicked }
  resnav() { this.resnavbutton=!this.resnavbutton }
  adminlogout() {
    this.common.admin.next(false);
    this.common.user.next(true);
    this.common.isLoggedIn.next(false);
    localStorage.clear();
    this.route.navigateByUrl('/')
  }
  
  logout() { 
    localStorage.removeItem('user');
    localStorage.removeItem('currentUser');
    this.common.isLoggedIn.next(false);
  }
  refreshhead(){
    this.common.user.next(true);
    this.common.admin.next(false)
    this.common.isLoggedIn.next(true);
    this.common.isLoggedIn.subscribe(res => console.log(res))
  }

}
