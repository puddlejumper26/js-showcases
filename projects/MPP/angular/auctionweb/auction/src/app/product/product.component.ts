import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../shared/product.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // 2.8 生成一个数组来存储页面上展示的数据
  private products: Product[];
  
  //5.8.1 
  private keyword: string;
  
  titleFilter: FormControl = new FormControl();

  //2.10 属性绑定
  private imgUrl = 'https://via.placeholder.com/320x150';
  
  constructor(private productService: ProductService) {
    this.titleFilter.valueChanges
      
      .subscribe(
        value => this.keyword = value,
      );
   }

  ngOnInit() {

    // 2.8 准备一系列的数据
    // this.products = [
    //   new Product(1, '1st Product', 1.99, 3.5, 'This is the 1st product, which is used for display', ['Electronics', 'Hardware']),
    //   new Product(2, '2nd Product', 2.99, 2.5, 'This is the 2nd product, which is used for display', ['Books']),
    //   new Product(3, '3rd Product', 3.99, 4.5, 'This is the 3rd product, which is used for display', ['Hardware']),
    //   new Product(4, '4th Product', 4.99, 1.5, 'This is the 4th product, which is used for display', ['Electronics', 'Hardware']),
    //   new Product(5, '5th Product', 5.99, 3.5, 'This is the 5th product, which is used for display', ['Electronics']),
    //   new Product(6, '6th Product', 6.99, 2.5, 'This is the 6th product, which is used for display', ['Books'])
    // ]
    this.products = this.productService.getProducts();
  }

}