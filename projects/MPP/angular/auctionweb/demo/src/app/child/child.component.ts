import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<button class='btn btn-primary' (click)="valueChanged()">Click me</button> `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
   
  
  constructor() { }

  ngOnInit() {
  }
  
  @Output() valueChange = new EventEmitter();
  counter = 0;
  
  valueChanged() { // You can give any function name
    this.counter = this.counter + 1;
    this.valueChange.emit(this.counter);
  }
}
