import { Component, OnInit, AfterContentInit, AfterContentChecked} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, AfterContentInit, AfterContentChecked{
  
  message:string = "hello";
  ngOnInit(): void {  }
  
  ngAfterContentInit(): void {
    console.log("子组件的投影内容初始化完毕");
    this.message = "world";
  }
  ngAfterContentChecked(): void {
    console.log("子组件的投影内容变更检测完毕");
  }
}
 