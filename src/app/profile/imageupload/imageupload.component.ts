import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imageupload',
  templateUrl: './imageupload.component.html',
  styleUrls: ['./imageupload.component.css']
})
export class ImageuploadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imageurl:any;
  onselect(e:any){ 
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.imageurl=event.target.result;
        console.log(event.target)
      }
    } 
  }
}
