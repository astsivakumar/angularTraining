import { Component, OnInit } from '@angular/core';

interface Memeber{
  name : string;
  image : string;
  role ?: string;/* ? for optional field*/
}


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  memberArray: Memeber[] = [
    {
      name:'Member2', image:'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',role:'CTO'
    },
    {
      name:'Member3', image:'https://www.gravatar.com/avatar/00000000000000000000000000000000',role:'CEO'
    }
  ];

  showList:boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
