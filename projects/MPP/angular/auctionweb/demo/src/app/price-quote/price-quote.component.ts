import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-price-quote',
  templateUrl: './price-quote.component.html',
  styleUrls: ['./price-quote.component.css']
})
export class PriceQuoteComponent implements OnInit {

  baojiaCode:string ="-TEST-";
  baojiaPrice:number;


  @Output()
  lastPrice:EventEmitter<PriceQuote>=new EventEmitter();

  @Output()
  buy:EventEmitter<PriceQuote>=new EventEmitter();

  constructor() {
    setInterval(()=>{
      let baojiaQuote:PriceQuote = new PriceQuote(this.baojiaCode, 100*Math.random());
      this.baojiaPrice=baojiaQuote.lastPrice;
      this.lastPrice.emit(baojiaQuote);
    },1000)

   }

  ngOnInit() {  }

  buyStock(event){this.buy.emit(new PriceQuote(this.baojiaCode, this.baojiaPrice));}

}

export class PriceQuote{
  constructor(
    public stockCode:string,
    public lastPrice:number
  ){}
}