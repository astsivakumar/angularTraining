import { Component } from '@angular/core';

@Component ({
    // Meta Data
    //html custom tag/ name
    selector :"app-root", // <app-root/>

    //view
    templateUrl:'app.component.html',

    //scopped styles
    styleUrls : ['app.component.css']
})


export class AppComponent {
    // MVC - Model View Component

    appTitle:string = "Product App";
    address = {city:'Chennai',state:"TN"}

    constructor(){
        console.log("App component created");
    }

    //tobe called when customEvent is triggered

    contactHandler(address: any){
        alert(address);
    }

    readEmail(e:string){
        console.log(e);
    }
}
