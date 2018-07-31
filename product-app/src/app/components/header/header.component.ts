import { Component, OnInit } from '@angular/core';
import { DataService, Memeber } from '../../shared/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  memberArray: Memeber[];
  membersCount : number;

  constructor(private dataService:DataService) { 
    this.memberArray =  dataService.memberArray;
    this.membersCount = this.memberArray.length;
  }

  ngOnInit() {
    // good place to call subscription for member change
    this.dataService.memberArray$.subscribe(
      members => {
        console.log('header member subscription');
        this.membersCount = members.length;
      }
    );
  }

  empty(){
    this.dataService.clearMembers();
    //this.membersCount = this.dataService.getMemberCount();

  }
}
