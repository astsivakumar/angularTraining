import { Component, OnInit, ViewChild } from '@angular/core';

import {Router,
        ActivatedRoute // to read url paramaters and id
} from '@angular/router';

import {NgForm, FormsModule,ReactiveFormsModule} from '@angular/forms'


import { Observable } from 'rxjs';

import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { Brand } from '../../models/brand';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  //<form (ngSubmit)="saveProduct()" #productForm="ngForm">
  @ViewChild('productForm')
  form:NgForm; // get access to directive instance

  product : Product = new Product(); // create new product
  brands$ : Observable<Brand[]>;
  message : string;

  constructor(private router: Router,
              private activeRoute: ActivatedRoute,
              private prodService: ProductService) { 
    
  }

  ngOnInit() {
    //read id from url
    const id = this.activeRoute.snapshot.params['id'];
    console.info(" >>>  selected id ", id);
    if(id){
      this.prodService.getProduct(id).subscribe((value)=>{
        this.product =  value;
        console.log(" >>>>  return product ",this.product.name);
      });
    }else{
      console.log(" create a new product ");
    }
    
    // getting brand list
    this.brands$ = this.prodService.getBrands();

    this.form.valueChanges
              .subscribe((changedValue)=>{
                console.log('value changed ',changedValue);
              });
  }

  gotoList() {
    // this.router.navigateByUrl('/products/list');
      this.router.navigate(['/', 'products', 'list']);
  }

  saveProduct(){

    //example to stop user from submitting 'save' with out any change
    if(this.form.pristine){
      alert("form values are not changed !!! ");
      return;
    }

    this.prodService.saveProduct(this.product).subscribe(
      (value)=>{
        this.message="Product updated successfully..";
        this.product = value;
        setTimeout(()=>{
           this.message=null;
           this.gotoList();
          },3000);
      }
    );
  }
}
