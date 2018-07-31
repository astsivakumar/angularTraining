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
    address:any = {city:'Chennai',state:"TN"}

    constructor(){
        console.log("App component created");
    }
}
