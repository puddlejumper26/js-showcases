import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  //3.3.1
  private productId: number;

  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    // 3.3.2
    // this.productId = this.routeInfo.snapshot.queryParams ["id"];
    this.productId = this.routeInfo.snapshot.params["id"];
  }

}
