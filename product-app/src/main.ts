// bootstrap file 
// first file to be executed

// todo > load angular in to browser
// start angular applicaiton

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
    .bootstrapModule(AppModule);