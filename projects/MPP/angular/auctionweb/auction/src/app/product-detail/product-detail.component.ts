import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;//声明了Product的一个本地属性

  constructor(private routeInfo: ActivatedRoute,
              //4.6.3
              private productService: ProductService
    ) { }

  ngOnInit() {
    let productId: number = this.routeInfo.snapshot.params['productId'];
    //4.6.3
    this.product = this.productService.getProduct(productId);
    //根据从snapshot中拿到的productId，来调用ProductService的getProduct方法，获得一个明确的product
  }
}
