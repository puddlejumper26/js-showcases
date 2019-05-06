import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  name:string;
  searchInput:FormControl = new FormControl();
  imgUrl: string ="https://via.placeholder.com/320x150";
  
  constructor() {
    setInterval(()=>{this.name="Tom";},3000);
    
    from([1, 2, 3, 4]).pipe(
      filter((e: number) => e % 2 == 0),
      map(e => e * e)
    ).subscribe(
      e => console.log(e),
      error => console.log(error),
      () => console.log("done!")
    )

    this.searchInput.valueChanges.pipe(debounceTime(500))
      //接下来就要订阅，收到的信息就是用户的输入的值，就是股票代码，就是stockCode
      //用这个调用本地的getStockInfo的方法，
      
      .subscribe(stockCode => this.getStockInfo(stockCode));
}
  ngOnInit() {  }
  doOnClick(event:any){console.log(event);}
  onKey(event){console.log(event.target.value);}
  onClick(mmm:string){console.log(mmm);}
  getStockInfo(value: string) { console.log(value); }
}
