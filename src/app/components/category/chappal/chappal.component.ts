import { Component, OnInit } from '@angular/core';
import { ProductdataService } from 'src/app/services/productdata.service';

@Component({
  selector: 'app-chappal',
  templateUrl: './chappal.component.html',
  styleUrls: ['./chappal.component.css']
})
export class ChappalComponent implements OnInit {
  data: any;
  prod: any;
  product: { brand: String, name: String, price: Number, description: String, category: String, image: String }[] = [];
  productdetails:any;
  constructor(private productData: ProductdataService) {
    
  }

  ngOnInit(): void {
    this.prod = this.productData.getproduct().subscribe(data => {
      this.data = data
      console.log('data ===', data)
    })
  }
  public isCollapsed = false;
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
