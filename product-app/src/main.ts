// bootstrap file 
// first file to be executed

// todo > load angular in to browser
// start angular applicaiton

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';


// Step 1 - 
platformBrowserDynamic()
    .bootstrapModule(AppModule);

// step 2
// JIT - HTML to Js conversion happens at browser
// JIT - Good for development , compile fast
// JIT - not suitable for production environment.
// AOT - Ahead of TIME 
// Build time (node.js) 
// HTML => TypeScript => JS => main bundle
// vendor bundle will be small -> why-> the build will not move the js compiler to browser
