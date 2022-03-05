import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CommondataService } from 'src/app/services/commondata.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/200`);
  constructor(private common:CommondataService) {
   }

  ngOnInit(): void {
    this.common.admin.next(false);
    this.common.user.next(true);
    this.common.isLoggedIn.next(false);
  }
   

}
