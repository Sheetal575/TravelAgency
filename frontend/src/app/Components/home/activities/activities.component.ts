import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  activites:any[]=[
    {
      img:"https://res.cloudinary.com/doy011exw/image/upload/v1630146547/activities/Rafting/rafting_2_qkizsn.jpg",
      name:"White Water Rafting"
    },
    {
      img:"https://res.cloudinary.com/doy011exw/image/upload/v1630146317/activities/Jungle%20Stay/jungle_stay_2_dpn5ks.jpg",
      name:"JUNGLE STAY"
    },
    {
      img:"https://res.cloudinary.com/doy011exw/image/upload/v1630146629/activities/Rock%20Climbing/rock_climbing_2_kiqkfu.jpg",
      name:"ROCK CLIMBING"
    },
    {
      img:"https://res.cloudinary.com/doy011exw/image/upload/v1630146725/activities/Zipline/Zipline_vhe6ix.webp",
      name:"ZIPLINE"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
