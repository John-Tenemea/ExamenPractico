import { Injectable } from '@angular/core';
import { Product } from '../domain/products';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  lstProduts=new Array()
  products: any
  private productsCollection: AngularFirestoreCollection<Product>;

  constructor(private afs: AngularFirestore) { 
    this.productsCollection = afs.collection<Product>('productos');
  }
  getProductsFire(){
    return this.productsCollection.valueChanges();
  }
}
