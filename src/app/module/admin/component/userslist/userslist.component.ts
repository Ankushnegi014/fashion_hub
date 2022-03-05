import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
  userData: any;

  constructor(private userservice:UserService, private apiservice:ApiService) { }

  ngOnInit(): void {
    // this.userservice.users().subscribe((res:any) => { this.userData = res })
    this.apiservice.getallusers().subscribe((res: any) => { this.userData = res.message; console.log(res) })
  }

  removeItem(id:any){ 
    console.log("Removed User: ",id);
    this.apiservice.deleteUser(id).subscribe((res:any) => { console.log("Delete Fuction",res) })
    this.ngOnInit();
  }

  


}
