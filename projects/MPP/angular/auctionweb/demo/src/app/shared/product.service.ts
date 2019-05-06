import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';//增加的内容

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public logger: LoggerService) { }//增加的内容

  getProduct(): Product {
    this.logger.log('getProduct方法被调用');//增加的内容
    return new Product(0, "iPhone7", 5899, "最新版")
  }
}

export class Product {

  constructor(
    public id: number,
    public title: string,
    public price: number,
    public desc: string
  ) {

  }
}