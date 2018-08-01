import { Injectable } from '@angular/core';

import {Subject} from  'rxjs';
import {BehaviorSubject} from 'rxjs';

/*

Business logic , 
communication, data sharing
*/

export interface Memeber{
  name : string;
  image : string;
  role ?: string;/* ? for optional field*/
}


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { 
    console.log("data service created ");
  }

  memberArray: Memeber[] = [
    {
      name:'Member2', image:'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',role:'CTO'
    },
    {
      name:'Member3', image:'https://www.gravatar.com/avatar/00000000000000000000000000000000',role:'CEO'
    }
  ];

  // Observable $ is convention
  //memberArray$: Subject<Memeber[]> = new Subject();
  //replace with Behavour subject
  memberArray$:BehaviorSubject<Memeber[]> = new BehaviorSubject(this.memberArray);


  clearMembers(){
    //option 1
   // this.memberArray.splice(0,this.memberArray.length);
   //this.memberArray = [];// this will not reflect the original value.
   //to over come this problem we are moving to RxJS
  //using RxJs
    this.memberArray = [];
    // publish the new array 
    this.memberArray$.next(this.memberArray);

  }

  getMemberCount(){
    return this.memberArray.length;
  }
}
