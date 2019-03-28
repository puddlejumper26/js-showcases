import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // 2.8 生成一个数组来存储页面上展示的数据
  private products: Array<Product>;

  constructor() { }

  ngOnInit() {

    //2.8 准备一系列的数据
   
  }

}

// 2.8 有一个对象来封装产品信息



