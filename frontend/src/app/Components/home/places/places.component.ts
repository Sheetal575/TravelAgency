import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {
  accomodations:any[]=[
    {
      img:"https://res.cloudinary.com/doy011exw/image/upload/v1630142525/destinations/aa/ytcfym3z8tidncrw2v0k3z4kss2d_1588920327_Moulangi-Eco-Park_agjcov.jpg",
      name:"jungle Inn",
      distance:"23km",
    },
    {
     img:"https://cdn1.goibibo.com/voy_ing/t_g/aa22f61ce0f411e9985e0242ac110004.jpg",
     name:"jungle Inn",
     distance:"23km",
   },
   {
     img:"https://cdn1.goibibo.com/voy_ing/t_g/aa22f61ce0f411e9985e0242ac110004.jpg",
     name:"jungle Inn",
     distance:"23km",
   },
   {
     img:"https://cdn1.goibibo.com/voy_ing/t_g/aa22f61ce0f411e9985e0242ac110004.jpg",
     name:"jungle Inn",
     distance:"23km",
   }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
