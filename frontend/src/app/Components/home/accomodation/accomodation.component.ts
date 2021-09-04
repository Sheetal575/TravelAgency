import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.scss']
})
export class AccomodationComponent implements OnInit {
 accomodations:any[]=[
   {
     img:"https://res.cloudinary.com/doy011exw/image/upload/v1630154653/hotels/Premium/images_40_ovjxez.jpg",
     category:"Premium Hotel",
   },
   {
    img:"https://res.cloudinary.com/doy011exw/image/upload/v1630154619/hotels/Gold/images_87_ljoob8.jpg",
    category:"Gold Hotel",
  },
  {
    img:"https://res.cloudinary.com/doy011exw/image/upload/v1630154792/tents/Normal%20tents/images_50_sevmoq.jpg",
    category:"Normal Tents",
  },
  {
    img:"https://res.cloudinary.com/doy011exw/image/upload/v1630154726/tents/Commando%20tents/images_10__1620992069330_c0p7ar.jpg",
    category:"Commando Tents",
  }
 ]
  constructor() { }

  ngOnInit(): void {
  }

}
