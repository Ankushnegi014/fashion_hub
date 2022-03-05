import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { CommondataService } from 'src/app/services/commondata.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData: any;
  loginerror: any;
  constructor(private userservice: UserService, private common: CommondataService,
    private route: Router, private apiser: ApiService, private toastr: ToastrService) { }
  loginform: FormGroup = new FormGroup({})
  
  ngOnInit(): void {
    this.loginform = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
      password: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')])
    })
    // this.userservice.users().subscribe(res => { this.userData = res })
    
  }
  get f() { return this.loginform.controls }
  login() {
    
    if (this.f['email'].value == 'Admin@gmail.com' && this.f['password'].value == "Ankush@123") {
      console.log('Admin Logged In');
      localStorage.setItem('admin','true');
      this.common.admin.next(true);
      this.common.user.next(false); 
      this.common.isLoggedIn.next(true); 
      this.loginform.reset();
      this.route.navigateByUrl('/admin')
    } 
    else{
      this.apiser.login(this.loginform.value).subscribe((res:any)=>{ console.log(res);
        console.log(res.message);
        this.toastr.success(res.message);
        this.userData=res.data.email;
        console.log(this.userData)
        localStorage.setItem('user', this.userData);
        localStorage.setItem('currentUser', JSON.stringify(res.data));
        this.route.navigateByUrl('/')
        if (this.userData !== null) {
          setTimeout(() => {
            this.common.isLoggedIn.next(true)
            console.log('Islogger in is True', this.userData)
          }, 2000);
        }
      }, (error)=>{ console.log(error);
                    if(error!=null){ this.toastr.error('User Credentials are incorrect'); }
                    }
      )
      
    }
    
  }

}
