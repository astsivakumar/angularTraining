import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  //Step 1 :  
  constructor() { }
  //step 2 : load into browser

  toHighLight:boolean = false;
  address:any;

  @ViewChild('nameElement')
  nameElement:ElementRef;// wrapper for real DOM element

  //step 3: ngOnInit , view is initialized
  ngOnInit() {
    //this.nameElement.nativeElement --> will acces the real DOM object 
    this.nameElement.nativeElement.focus();
    this.nameElement.nativeElement.value = 'XYZz';
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
