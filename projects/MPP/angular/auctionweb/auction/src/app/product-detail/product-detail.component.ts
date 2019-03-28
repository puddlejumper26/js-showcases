import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService, Comment } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;//声明了product的一个本地属性，类型是Product

  comments: Comment[]; //声明一个comments的一个本地属性，其类型是一个Comment[]，用来存放从服务里拿到的评论的信息

  constructor(private routeInfo: ActivatedRoute,
              //4.6.3
              private productService: ProductService
    ) { }

  ngOnInit() {
    let productId: number = this.routeInfo.snapshot.params['productId'];
    //4.6.3
    this.product = this.productService.getProduct(productId);
    //根据从snapshot中拿到的productId，来调用ProductService的getProduct方法，获得一个明确的product
    this.comments = this.productService.getCommentsForProductId(productId);
    //这样就拿到了当前这个ID所对应的商品的所有的评论信息
  }
}
