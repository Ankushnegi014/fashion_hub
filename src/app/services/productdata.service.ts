import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductdataService {
  producturl = "http://localhost:3000/product";
  productlisturl = "http://localhost:3000/productlist";
  constructor(private http:HttpClient) { }

  getproduct(){
    return this.http.get(this.productlisturl);
  }
  adddata(val:any){
    console.log(val)
    return this.http.post("http://localhost:3000/productlist",val)
  }
  removeproduct(id:any){
    return this.http.delete(`${this.productlisturl}/${id}`)
  }
  getDataById(id:any){
    return this.http.get(`${this.productlisturl}/${id}`)
  }
  updateproduct(id:any,val:any){
    console.log(id,val)
    return this.http.put(`${this.productlisturl}/${id}`,val)
  }
}
