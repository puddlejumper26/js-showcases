import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { ProductComponent} from './product/product.component';
import { Code404Component} from "./code404/code404.component";

const routes: Routes = [
  //注意这里的path 里面不能有 这里匹配的都叫根路由/  
  {path:'', component: HomeComponent},
  {path:'product', component: ProductComponent},
  //3.2 添加 code 404   **一定要放在最后
  {path:'**', component: Code404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
