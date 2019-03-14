import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  //5 用来接收产品组件传递的数值，默认值为0
  @Input () //星级评价的rating的属性应该由副组件传递过来,然后编辑product.component.html
  private rating:number = 0;
  
  //3 这里是设置数组
  private stars: boolean[];

  constructor() { }

  ngOnInit() {
    // 6 
    this.stars= [];
    for(let i =1; i<=5; i++){
      this.stars.push(i > this.rating);
    }
    
    // // 3 这里是初始化数组
    // this.stars =[true,true,true,true,true];
  }

}
