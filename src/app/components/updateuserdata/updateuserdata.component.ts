import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-updateuserdata',
  templateUrl: './updateuserdata.component.html',
  styleUrls: ['./updateuserdata.component.css']
})
export class UpdateuserdataComponent implements OnInit {

  updateform: FormGroup = new FormGroup({});
  error: boolean = false;
  status: any;
  userData: any;
  userId: any;
  userIndex: any;
  constructor(private userservice: UserService,
              private route: Router,
              private apiser: ApiService, 
              private toastr: ToastrService,
              private activeroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.updateform = new FormGroup({
      firstName: new FormControl("", [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl("", [Validators.required, Validators.minLength(2)]),
      email: new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      password: new FormControl("", [Validators.required, Validators.minLength(2)]),
    })
    this.userId=this.activeroute.snapshot.params['id'];
    this.userIndex=this.activeroute.snapshot.params['i'];
    this.apiser.getallusers().subscribe((res: any) => { this.userData = res.message[this.userIndex]; 
    this.updateform = new FormGroup({
      firstName: new FormControl(this.userData['firstName'], [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl(this.userData['lastName'], [Validators.required, Validators.minLength(2)]),
      email: new FormControl(this.userData['email'], [Validators.required, Validators.minLength(2), Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      password: new FormControl(this.userData['password'], [Validators.required, Validators.minLength(2)]),
    })
    })
  }
  get s() { return this.updateform.controls }

  submit() {
    const data = this.updateform.value
    this.apiser.updateUser(this.userId, this.updateform.value).subscribe((res: any) => {
      var status = res;
      console.log(status.message)
      if (res.isSuccess) {
        this.toastr.success('Successfully Updated!', 'User');
        this.route.navigateByUrl("admin/userlist");
        this.updateform.reset();
      }
    });
  }

}
