import { Injectable } from '@angular/core';
import { ProductService, Product } from './product.service';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class AnotherProductService implements ProductService{

  getProduct(): Product{
    return new Product(1,"Sumsung 7", 3899,"最新的三星手机");
  }  
  constructor(public logger: LoggerService) { }
}
