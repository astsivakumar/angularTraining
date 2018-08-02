import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { Product } from '../models/product';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


import { environment } from '../../../environments/environment';// this file should not have any extension -- during 'build' time files will be changed

import { Brand } from '../models/brand';

console.log(">>>>>> environment ",environment);

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {
    
   }

   getProducts():Observable<Product[]> {
      return this.http.get<Product[]>(`${environment.apiEndPoint}/api/products`)
   }

   deleteProduct(id:number):Observable<any>{
      return this.http.delete<any>(`${environment.apiEndPoint}/api/products/${id}`);
   }

   getProduct(id:number):Observable<Product>{
     return this.http.get<Product>(`${environment.apiEndPoint}/api/products/${id}`);
   }

   getBrands():Observable<Brand[]>{
    const storage = window.localStorage;
    const brandCache = storage.getItem('brands');
    if(brandCache){
      console.log("serving from cache");
      const brands = JSON.parse(brandCache);
      return of(brands);
    }else{
      console.log("serving from NETWORK");
      //store the value to cache - impl cache logic
      //storage.setItem('brands',);

      return this.http.get<Brand[]>(`${environment.apiEndPoint}/api/brands`)
                      .pipe(map((brands)=>{
                        storage.setItem('brands',JSON.stringify(brands));
                        return brands;
                      }));

     // return this.http.get<Brand[]>('http://localhost:7070/api/brands'); -- old impl
    }

   }

   saveProduct(product: Product):Observable<Product>{
     if(product.id){
       // return updated product value
       //{{data as json}}
             
      return this.http.put<Product>(`${environment.apiEndPoint}/api/products/${product.id}`,product);
     }else{
       //returns a new product with id
       //{{data as json}}
      return this.http.post<Product>(`${environment.apiEndPoint}/api/products`,product);
     }
   }

  searchProducts(query:string):Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiEndPoint}/api/products?q=${query}`);
  }
}
