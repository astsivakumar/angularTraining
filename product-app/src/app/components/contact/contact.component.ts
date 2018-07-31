import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  toHighLight:boolean = false;
  address:any;

  ngOnInit() {
  }

  outerDivClicked(e :Event){
    console.log("outer div clicked",e);
  }
  divClicked(e:Event){
    console.log("div clicked",e);
    
  }
  btnClicked(e:Event){
    console.log("btn clicked",e);
    // stop event bubble to parent
    e.stopPropagation();
    // e.cancelBubble = false; // cancel the propagation
  }

}
