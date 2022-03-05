import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductdataService } from 'src/app/services/productdata.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  product: { brand: String, name: String, price: Number, description: String, category: String, image: String }[] = [];
  isCollapsed: boolean = false;
  productdetails: any;
  prod: any;
  data: any;
  constructor(private productData: ProductdataService, private route:ActivatedRoute) {

  }


  brand:any;
  getbrand:any;
  
  ngOnInit(): void {
    this.prod = this.productData.getproduct().subscribe(data => {
      this.data = data
      console.log('data ===', data)

    })

    this.route.params.subscribe((res:any)=> { this.getbrand=res.name })
    console.log(this.getbrand)

    // if (this.getbrand == "levis") { this.brand="Levis" }
    // else if (this.getbrand == "nike"){ this.brand="Nike" }
    // else if (this.getbrand == "roadstar") { this.brand = "Roadstar" }
    // else if (this.getbrand == "puma") { this.brand = "Puma" }
    // else if (this.getbrand == "hrx") { this.brand = "HRX" }
    // else if (this.getbrand == "calvinklein") { this.brand = "Calvin Klein Jeans" }
    // else if (this.getbrand == "vanheusen") { this.brand = "VAN HEUSEN DENIM LABS" }
    // else if (this.getbrand == "redtape") { this.brand = "Red Tape" }
    // else if (this.getbrand == "uspolo") { this.brand = "U.S. Polo Assn." }
    // else if (this.getbrand == "tommyhilfiger") { this.brand = "Tommy Hilfiger" }

    switch(this.getbrand){ 
      case "levis": this.brand = "Levis"; break;
      case "nike": this.brand = "Nike"; break;
      case "roadstar": this.brand = "Roadstar"; break;
      case "puma": this.brand = "Puma"; break;
      case "hrx": this.brand = "HRX"; break;
      case "calvinklein": this.brand = "Calvin Klein Jeans"; break;
      case "vanheusen": this.brand = "VAN HEUSEN DENIM LABS"; break;
      case "redtape": this.brand = "Red Tape"; break;
      case "uspolo": this.brand = "U.S. Polo Assn."; break;
      case "tommyhilfiger": this.brand = "Tommy Hilfiger"; break;
    }
    console.log(this.brand);

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
