import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SharedModule } from './shared/shared.module';
//import { HighlightDirective } from './shared/directives/highlight.directive';

@NgModule({
    // other module dependencies
    imports:[
        BrowserModule,
        SharedModule
    ],
    //components, directives, pipes
    declarations : [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent
        // ,HighlightDirective
    ],
    bootstrap:[
        AppComponent // first main component, where app will start
    ]
})

export class AppModule{
    
}