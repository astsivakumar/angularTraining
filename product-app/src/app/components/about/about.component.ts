import { Component, OnInit } from '@angular/core';
import { DataService, Memeber } from '../../shared/services/data.service';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  showList:boolean = true;
  memberArray:Memeber[];
  membersCount:number;

  //inject the service component 
  constructor(private dataService:DataService) { 
    console.log("about component created ");
    
    //this.memberArray = dataService.memberArray; // we can also directly specify it in HTML
  }

  ngOnInit() {
    this.dataService.memberArray$.subscribe(
      members => {
        this.memberArray = members;
      }
    );
  }
  
  empty(){
    this.dataService.clearMembers();
    this.membersCount = this.dataService.memberArray.length;
  }

}
