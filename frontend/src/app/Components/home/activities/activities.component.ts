import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  activites:any[]=[
    {
      img:"https://img.etimg.com/thumb/msid-77781988,width-640,resizemode-4,imgsize-169358/setting-a-record.jpg",
      name:"White Water Rafting"
    },
    {
      img:"https://img.etimg.com/thumb/msid-77781988,width-640,resizemode-4,imgsize-169358/setting-a-record.jpg",
      name:"ADVENTUROUS JUNGLE STAY IN DANDELI"
    },
    {
      img:"https://img.etimg.com/thumb/msid-77781988,width-640,resizemode-4,imgsize-169358/setting-a-record.jpg",
      name:"ROCK CLIMBING"
    },
    {
      img:"https://img.etimg.com/thumb/msid-77781988,width-640,resizemode-4,imgsize-169358/setting-a-record.jpg",
      name:"ZIPLINE"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
