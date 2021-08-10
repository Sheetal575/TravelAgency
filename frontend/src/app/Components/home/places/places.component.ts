import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {
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
