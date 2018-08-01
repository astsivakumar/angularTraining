import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products$ : Observable<Product[]>;

  message:string;
  progMessage:string;

  constructor(private productService:ProductService) { 

  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this.products$ = this.productService.getProducts();
  }

  deleteProduct(productId){
    console.log('>>>',productId);
    this.progMessage = `Trying to delete ${productId} ...` ;
    this.productService.deleteProduct(productId)
                        .subscribe(result=>{
                          console.log('Executing del req ',productId);
                          this.getProducts();
                          
                        },
                        error=>{
                          console.error("product not available",error);
                          this.message = `Error in delete request ${error.statusText}`;
                          setTimeout(()=>{
                            this.message = null;
                          },3000);
                          this.progMessage = null;
                        },
                        ()=>{
                          console.info(" ... complete ...");
                          this.progMessage =  null;
                        }

                      );
    
  }

}
