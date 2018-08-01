import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {
    
   }

   getProducts():Observable<Product[]> {
      return this.http.get<Product[]>('http://localhost:7070/api/products')
   }

   deleteProduct(id:number):Observable<any>{
      return this.http.delete<any>('http://localhost:7070/api/products/'+id);
   }

   getProduct(id:number):Observable<Product>{
     return this.http.get<Product>('http://localhost:7070/api/products/'+id);
   }

   getBrands():Observable<Brand[]>{
     return this.http.get<Brand[]>('http://localhost:7070/api/brands');
   }

   saveProduct(product: Product):Observable<Product>{
     if(product.id){
       // return updated product value
       //{{data as json}}       
      return this.http.put<Product>(`http://localhost:7070/api/products/${product.id}`,product);
     }else{
       //returns a new product with id
       //{{data as json}}
      return this.http.post<Product>(`http://localhost:7070/api/products`,product);
     }
   }
}
