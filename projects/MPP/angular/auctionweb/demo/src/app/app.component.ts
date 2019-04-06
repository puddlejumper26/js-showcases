import { Component, AfterViewInit, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit,AfterContentChecked,AfterViewInit{
  ngAfterContentInit(): void {
    console.log("父组件的投影内容初始化完毕");
  }
  ngAfterContentChecked(): void {
    console.log("父组件的投影内容变更检测完毕");
  }
  ngAfterViewInit(): void {
    console.log("父组件的视图内容初始化完毕");
  }
 
}
