import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupform:FormGroup=new FormGroup({});
  error:boolean=false;
  status:any;
  constructor(private userservice: UserService, private route: Router, private apiser: ApiService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.signupform=new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.minLength(2)]),
      password: new FormControl('', [Validators.required, Validators.minLength(2)]),
    })
  }
  get s(){ return this.signupform.controls }

  submit(){
      const data=this.signupform.value
      this.apiser.register(data).subscribe((res:any)=>{
        var status=res;
        console.log(status.message)
        if(res.isSuccess){
          this.toastr.success('Successfully register!', 'Signed In');
          this.route.navigateByUrl("/login");
          this.signupform.reset();
        }
      });
  }

}
