import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  userdata:any = null;
  data:any;
  imageurl:any
  constructor() { }

  ngOnInit(): void {
    this.imageurl='assets/images/noimage.jpg';
    this.data=localStorage.getItem('currentUser')
    this.userdata = JSON.parse(this.data);
    if(this.userdata!==null){ this.imageurl=this.userdata.image }
    console.log(this.userdata)
  }


}
