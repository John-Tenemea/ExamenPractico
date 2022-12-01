import { Injectable } from '@angular/core';
import { Product } from '../domain/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  lstProduts=new Array()

  constructor() { }

  addProduct(product: Product){
    this.lstProduts.push(product);

  }
  getProducts(){
    return this.lstProduts;
  }
}
