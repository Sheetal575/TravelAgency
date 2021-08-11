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
     category:"Premium Hotel",
   },
   {
    img:"https://cdn1.goibibo.com/voy_ing/t_g/aa22f61ce0f411e9985e0242ac110004.jpg",
    category:"Gold Hotel",
  },
  {
    img:"https://cdn1.goibibo.com/voy_ing/t_g/aa22f61ce0f411e9985e0242ac110004.jpg",
    category:"Normal Tents",
  },
  {
    img:"https://cdn1.goibibo.com/voy_ing/t_g/aa22f61ce0f411e9985e0242ac110004.jpg",
    category:"Commando Tents",
  }
 ]
  constructor() { }

  ngOnInit(): void {
  }

}
