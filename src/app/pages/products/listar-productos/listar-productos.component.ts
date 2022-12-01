import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Product } from 'src/app/domain/products';
import { ProductsService } from 'src/app/services/products.service';
import { __param } from 'tslib';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.scss']
})
export class ListarProductosComponent implements OnInit {
  title= "Listar Productos"
  lstProducts=new Array()
  products: any

  constructor(private router: Router,
    private productService: ProductsService) { }

  ngOnInit(): void {
    this.loadProducts()
  }

  loadProducts(){
    this.products=this.productService.getProductsFire()
    console.log(this.lstProducts)
  }
  goListProducts(){
    console.log("llamando listado")
    this.router.navigate(['products/list'])
  }
}
