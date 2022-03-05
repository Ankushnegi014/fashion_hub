import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../../services/productdata.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  data:any
  product : {brand:String,name:String,price:Number,description:String,category:String,image:String}[]=[];
  isCollapsed: boolean=false;
  productdetails: any;
  constructor(private productData:ProductdataService) {
   }
  
  ngOnInit(): void {
    this.productData.getproduct().subscribe(data => { this.data = data; console.log(this.data) })
  }
  ProductDetails(brand: any, sku: any, name: any, color: any, price: any, category: any, image: any, discription: any) {
    this.isCollapsed = !this.isCollapsed;
    this.productdetails = { sku: sku, name: name, price: price, brand: brand, image: image, discription: discription, color: color, category: category }
    console.log(this.productdetails)
  }
  close() { this.isCollapsed = false }
  size(val: any) {
    this.data.chappal['size'] = val
    console.log(val)
    console.log(this.data.chappal)
  }
}
