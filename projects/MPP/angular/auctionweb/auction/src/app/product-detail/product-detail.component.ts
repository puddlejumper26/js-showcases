import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService, Comment } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  // 6.11.2 首先加入评价星级的, 用来保存星级
  newRating: number = 5;
  // 6.11.2 加入评论，用来保存评价内容
  newComment: string = "";
  //6.11.3 默认情况下 相关的div是隐藏的
  isCommentHidden = true; 

  product: Product;//声明了product的一个本地属性，类型是Product

  comments: Comment[]; //声明一个comments的一个本地属性，其类型是一个Comment[]，用来存放从服务里拿到的评论的信息

  constructor(private routeInfo: ActivatedRoute,
              //4.6.3
              private productService: ProductService
    ) { }

  ngOnInit() {
    let productId: number = this.routeInfo.snapshot.params['productId'];
  // 8.5.3
    // //4.6.3
    // this.product = this.productService.getProduct(productId);
    // //根据从snapshot中拿到的productId，来调用ProductService的getProduct方法，获得一个明确的product
    // this.comments = this.productService.getCommentsForProductId(productId);
    // //这样就拿到了当前这个ID所对应的商品的所有的评论信息
    this.productService.getProduct(productId).subscribe(
      //通过第一个回调函数， 来给我自身的本地 this.product赋值，
      //订阅方法的第一个匿名函数就是当这个流发射一个数据时其处理方法
      product => this.product = product
    );

    this.productService.getCommentsForProductId(productId).subscribe(
      comments => this.comments = comments
    );
  }

  //6.11.2
  addComment(){
    let comment = new Comment(0,this.product.id, new Date().toISOString(), "someone",this.newRating,this.newComment);
    this.comments.unshift(comment);
    //6.11.4
    this.newComment = null;
    this.newRating = 5;
    this.isCommentHidden = true;

    //6.11.5
    let sum=this.comments.reduce((sum,comment)=>sum+comment.rating,0);
    this.product.rating = sum / this.comments.length;
  }
}
