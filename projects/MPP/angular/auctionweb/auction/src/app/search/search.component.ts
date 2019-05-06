import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  //7.9.2
  formModel: FormGroup;
  //7.9.3 并且要在构造函数中把productService注入
  categories: string[];

  constructor(private productService: ProductService) {
    //7.9.2
    let fb = new FormBuilder();
    this.formModel = fb.group({
      //7.9.2 表单上只有三个字段，所以这里只要对应的三个
      title:['',Validators.minLength(3)],
      price:[null,this.positiveNumberValidator],
      category:['-1']  //给一个默认值为-1
    });
   }

  //7.9.3 把所有类别的信息放到本地的categories变量里，然后和前面模板的select绑定
  ngOnInit() { this.categories = this.productService.getAllCategories(); }

  //7.9.2 正数的校验
  positiveNumberValidator(control:FormControl):any{
    if(!control.value){ //如果值不存在
      return null;
    } 
    //如果有值
    let price = parseInt(control.value);//解析成一个整数值
    //对象的t就是positiveNumber，值是true
    if(price>0){return null;}else{return {positiveNumber:true}; }
  }

  //7.9.3 
  onSearch(){if(this.formModel.valid){console.log(this.formModel.value);}}
}
