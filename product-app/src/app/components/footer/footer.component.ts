import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  //@Input for proerty binding [] ; to receive input from parent component
  @Input()
  company: string;

  @Input()
  year : number;
  @Input()
  addressValue:any;

  //output, child to parent communication 
  // Always thro' custom event only
  //(eventBinding) ==> (contactEvent)="expr"
  @Output()
  contactEvent: EventEmitter<any> = new EventEmitter();

  @Output()
  mailEvent : EventEmitter<string> = new EventEmitter();

  ngOnInit() {
  }

  contactClicked(){
    //TODO: trigger custom event
    // in parent component, this.address can be accessed as $event
    this.contactEvent.emit(this.addressValue);
  }

  emitEmailAddress(){
    this.mailEvent.emit("check@gmail.com");
  }
}
