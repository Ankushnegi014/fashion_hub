import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductdataService } from '../../../../services/productdata.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  addproduct:FormGroup=new FormGroup({})
  error: boolean=false;
  constructor(private productData: ProductdataService, private route:Router) { }

  ngOnInit(): void {
    this.addproduct=new FormGroup({
      category: new FormControl('',[Validators.required]),
      brand: new FormControl('', [Validators.required]),
      sku: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      color: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    })
    
  }
  get s() { return this.addproduct.controls }
  addData(){ 
    if (this.s['category'].value == " " && this.s['brand'].value == " " && this.s['sku'].value == " " && this.s['name'].value == " " && this.s['color'].value == " " && this.s['price'].value == " " && this.s['image'].value == " " && this.s['description'].value == " ") 
    {
      this.productData.adddata(this.addproduct.value).subscribe(res => { console.log(res) })
      console.log('===>', this.addproduct.value)
      this.route.navigateByUrl('/productlist'); }
    else {
      this.error = true;
    }
    
   }
}