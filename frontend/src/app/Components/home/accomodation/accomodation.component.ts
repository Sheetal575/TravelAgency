import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.scss']
})
export class AccomodationComponent implements OnInit {
 accomodations:any[]=[
   {
     img:"https://cdn1.goibibo.com/voy_ing/t_g/aa22f61ce0f411e9985e0242ac110004.jpg",
     name:"jungle Inn",
   },
   {
    img:"https://cdn1.goibibo.com/voy_ing/t_g/aa22f61ce0f411e9985e0242ac110004.jpg",
    name:"jungle Inn",
  },
  {
    img:"https://cdn1.goibibo.com/voy_ing/t_g/aa22f61ce0f411e9985e0242ac110004.jpg",
    name:"jungle Inn",
  },
  {
    img:"https://cdn1.goibibo.com/voy_ing/t_g/aa22f61ce0f411e9985e0242ac110004.jpg",
    name:"jungle Inn",
  }
 ]
  constructor() { }

  ngOnInit(): void {
  }

}
