import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {
  accomodations:any[]=[
    {
      img:"https://res.cloudinary.com/doy011exw/image/upload/v1630147772/destinations/syntheri%20rocks/SYNTHERI_ROCKS_psepuj.jpg",
      name:"Syntheri Rocks",
      distance:"23km",
    },
    {
     img:"https://res.cloudinary.com/doy011exw/image/upload/v1630147398/destinations/moulangi/Moulangi_qjskzs.jpg",
     name:"Moulangi",
     distance:"23km",
   },
   {
     img:"https://res.cloudinary.com/doy011exw/image/upload/v1630147131/destinations/magod%20falls/Magod_falls_ycmuey.jpg",
     name:"Magod Falls",
     distance:"23km",
   },
   {
     img:"https://res.cloudinary.com/doy011exw/image/upload/v1630147796/destinations/ulavi%20temple/Ulavi_temple_zjc8wk.jpg",
     name:"Ulavi Temple",
     distance:"23km",
   }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
