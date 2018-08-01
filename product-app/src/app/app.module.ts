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

import {Routes, RouterModule} from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductModule } from './product/product.module';

//ng 4.3 onwards
import {HttpClientModule} from '@angular/common/http';

//step 1 : define routes
const routes:Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path : 'contact',
        component: ContactComponent

    },
    
    {
        path : '**',//not found - wild card search
        component : NotFoundComponent
    }
    

]

@NgModule({
    // other module dependencies
    imports:[
        BrowserModule,
        HttpClientModule,
        
        SharedModule,
        //step2:  apply route configuration into module
        RouterModule.forRoot(routes),
        //step3 : refer html
        ProductModule
    ],
    //components, directives, pipes
    declarations : [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        NotFoundComponent
        // ,HighlightDirective
    ],
    bootstrap:[
        AppComponent // first main component, where app will start
    ]
})

export class AppModule{
    
}