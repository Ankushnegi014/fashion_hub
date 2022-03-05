import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductdataService } from 'src/app/services/productdata.service';


@Component({
  selector: 'app-editproducts',
  templateUrl: './editproducts.component.html',
  styleUrls: ['./editproducts.component.css']
})
export class EditproductsComponent implements OnInit {

  editproduct: any;
  product: any;
  data:any
  error:boolean=false;
  constructor(private productData: ProductdataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.editproduct = new FormGroup({
      category: new FormControl(),
      sku: new FormControl(),
      name: new FormControl(),
      brand: new FormControl(),
      color: new FormControl(),
      price: new FormControl(),
      image: new FormControl(),
      description: new FormControl()
    })
    console.log(this.route.snapshot.params['id'])
    this.productData.getDataById(this.route.snapshot.params['id']).subscribe((res: object) => {
      this.data=res;
      this.editproduct = new FormGroup({
        category: new FormControl(this.data['category']),
        sku: new FormControl(this.data['sku']),
        name: new FormControl(this.data['name']),
        brand: new FormControl(this.data['brand']),
        color: new FormControl(this.data['color']),
        price: new FormControl(this.data['price']),
        image: new FormControl(this.data['image']),
        description: new FormControl(this.data['discription'])
      })
     })
  }
  get p() { return this.editproduct.controls }

  EditData() {
    if (this.p['category'].value == " " && this.p['brand'].value == " " && this.p['sku'].value == " " && this.p['name'].value == " " && this.p['color'].value == " " && this.p['price'].value == " " && this.p['image'].value == " " && this.p['description'].value == " ")
    {
    this.product=this.editproduct.value
    console.log('id : ', this.route.snapshot.params['id'],this.product)
    this.productData.updateproduct(this.route.snapshot.params['id'], this.product).subscribe(res => { console.log(res)})
    this.router.navigateByUrl("/productlist")
    }
    else{
      this.error=true;
    }
  }

}
