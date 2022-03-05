import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, pipe, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  token:any;
  this: any;
  getHeaders() {
    let header;
    if (this.token != "") {
      header = {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          "x-access-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIxZDllMTcxMDM1NTFjZDU0ZTg4ZjEiLCJpYXQiOjE2NDQ0NzY4MDJ9.GaCR0pg0tIHpASVDRJ_4DayaMlxa3n0kd4O7RMye_78'
          ,
        }),
      };
    } else {
      console.log("token not found");
    }
    return header;
  }
  root=environment.baseurl
  constructor(private http:HttpClient) { }

  //getAllUsers
  getallusers(): Observable<any> { return this.http.get<any>(`${this.root}users/getAllUsers`,this.getHeaders()) }

  //Register
  register(data: any): Observable<any> { return this.http.post<any>(`${this.root}users/register`, data); }

  //Login
  login(data: any): Observable<any> { return this.http.post<any>(`${this.root}users/login`,data).pipe(catchError(this.handleError)) }

  handleError(error:any){ 
    return throwError(error.message || 'Server Error');
   }

  deleteUser(id:any){ 
    return this.http.delete(`${this.root}users/delete/${id}`, this.getHeaders())
   }

  updateUser(id:any,data:any){
    return this.http.put(`${this.root}users/update/${id}`,data, this.getHeaders())
  }
  uploadimage(id:any,file:any)
  { 
    return this.http.post(`${this.root}users/uploadImage`,id,file)
   }
}
