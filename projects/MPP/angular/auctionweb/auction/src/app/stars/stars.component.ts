import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {
  
  //5 用来接收产品组件传递的数值，默认值为0
  @Input () //星级评价的rating的属性应该由副组件传递过来,然后编辑product.component.html
  private rating:number = 0;
  
  //6.11.2
  @Output()
  private ratingChange:EventEmitter<number>=new EventEmitter;
  
  //3 这里是设置数组
  private stars: boolean[];
  //6.11.1
  @Input()
  private readonly: boolean = true;
  
  constructor() { }

  ngOnInit() {
    // 6 
    // this.stars= [];
    // for(let i =1; i<=5; i++){
    //   this.stars.push(i > this.rating);
    // }
    
    // // 3 这里是初始化数组
    // this.stars =[true,true,true,true,true];
  }
  //6.11.4 
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
  }
  
  clickStar(index: number) {
    if (!this.readonly) {
      this.rating = index + 1; //因为i是从0开始的
      //6.11.4 可以删除下面的ngOnInit，因为移到ngOnChanges中了
      //this.ngOnInit(); 
      this.ratingChange.emit(this.rating);
    }
  }
 
}
