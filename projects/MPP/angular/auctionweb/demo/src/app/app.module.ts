import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Product1Component } from './product1/product1.component';
import { ProductService } from './shared/product.service';
import { Product2Component } from './product2/product2.component';
import { LoggerService } from './shared/logger.service';
import { AnotherProductService } from './shared/another-product.service';
import { BindComponent } from './bind/bind.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MultiplePipe } from './pipe/multiple.pipe';
import { OrderComponent } from './order/order.component';
import { PriceQuoteComponent } from './price-quote/price-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    Product1Component,
    Product2Component,
    BindComponent,
    MultiplePipe,
    OrderComponent,
    PriceQuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [{
    provide:ProductService,
    useFactory:()=>{
      let logger = new LoggerService;
      let dev = Math.random()>0.5;
      if(dev){return new ProductService(logger);}
      else{return new AnotherProductService(logger);}
    },deps:[LoggerService]
  },LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
