import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { ProductWidgetComponent } from './components/product-widget/product-widget.component';

import {Routes, RouterModule} from '@angular/router';
import { ProductService } from './services/product.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes =[
  {
    //path:'products',
    path:'',//for lazy loading..
    component: ProductHomeComponent,
    //nested navigation
    children:[
      {
        path:'list',
        component:ProductListComponent
      },
      {
        path : 'create',
        component:ProductEditComponent
      },
      {
        path : 'edit/:id',
        component:ProductEditComponent,

      },
      {
        path: 'search',
        component:ProductSearchComponent
      }
    ]
  }
]

ProductService
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ProductHomeComponent, 
    ProductEditComponent, 
    ProductSearchComponent, 
    ProductWidgetComponent,
    ProductListComponent
  ],
  providers:[
    ProductService
  ]

})
export class ProductModule { }
