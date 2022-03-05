
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductdataService } from 'src/app/services/productdata.service';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  productList:any;
  constructor(private productData: ProductdataService,private router:Router) {  }

  ngOnInit(): void {
    this.productData.getproduct().subscribe(data1 => { this.productList = data1; console.log(this.productList) })
  }
  removeItem(val:any){
    // console.log(val)
    this.productData.removeproduct(val).subscribe(res=>{ console.log(res) })
    this.ngOnInit()
  }
}
