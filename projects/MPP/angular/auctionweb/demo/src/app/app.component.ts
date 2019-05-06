import { Component } from '@angular/core';
import { PriceQuote } from './price-quote/price-quote.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  birthday = new Date(1988, 3, 15); // April 15, 1988
  toggle = true; // start with true == shortDate
  stock='haha';
  get format() { return  'fullDate'; }
  // toggleFormat() { this.toggle = !this.toggle; }

  
  appQuote:PriceQuote = new PriceQuote('',0);
 // priceQuoteHandler(event:PriceQuote){this.appQuote=event;}
  buyHandler(event:PriceQuote){this.appQuote=event;}

}
