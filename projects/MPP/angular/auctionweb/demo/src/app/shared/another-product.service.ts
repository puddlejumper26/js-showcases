import { Injectable } from '@angular/core';
import { ProductService, Product } from './product.service';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
  
})
export class AnotherProductService implements ProductService{

  constructor(public logger:LoggerService) { }
  getProduct():Product{
    this.logger.log("gerProduct 在AnotherProductService中被调用");
    return new Product(2, 'sansumg', 700, "最新版");
  }
}
