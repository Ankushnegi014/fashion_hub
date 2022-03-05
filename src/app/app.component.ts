import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommondataService } from './services/commondata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'fashionhub';
  userData: any | null;
  admin: any | null;
  constructor(private common: CommondataService, private route:Router) {
     this.common.admin.next(false); this.common.user.next(true); }
  ngOnInit(): void {
    this.userData = localStorage.getItem('user');
    this.admin=localStorage.getItem('admin')
    console.log(this.userData);
    if (this.userData !== null) {
      setTimeout(() => {
        console.log(this.userData);
        this.common.isLoggedIn.next(true);
      }, 10);
    } else { console.log('not any user'); }
    if(this.admin!== null){ 
      setTimeout(() => {
        this.route.navigateByUrl('/admin');
        this.common.admin.next(true);
        this.common.user.next(false);
        this.common.admin.subscribe(res=>console.log(res))
      }, 10);
   }
  }
  
  

}


