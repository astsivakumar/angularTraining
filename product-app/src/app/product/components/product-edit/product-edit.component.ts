import { Component, OnInit } from '@angular/core';

import {Router,
        ActivatedRoute // to read url paramaters and id
} from '@angular/router';

import {FormsModule,ReactiveFormsModule} from '@angular/forms'
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
  }

  gotoList() {
    // this.router.navigateByUrl('/products/list');
      this.router.navigate(['/', 'products', 'list']);
  }

  saveProduct(){
    this.prodService.saveProduct(this.product).subscribe(
      (value)=>{
        this.message="Product updated successfully..";
        this.product = value;
        setTimeout(()=>{ this.message=null},3000);
      }
    );
  }
}
