import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Product } from '../product/product.component';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
 
@Injectable() //这里的这个类需要@Injectble来装饰一下。之后router才能被注入，component不用是因为其已经继承了@Injectable
export class ProductResolve implements Resolve<Product>{
     
    constructor (private router: Router){};
    
    resolve(
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<Product> | Promise<Product> | Product {
            //这里不会发一个真正的http请求，所以假设1是正确的请求，不是1就不是正确的请求，这里用===就会出错
            let productId: number = route.params["id"];
            if (productId ==1){
                return new Product(1,"iPhone7");
            }else{
                //id不是1，则导航走，就要用到router，所以上面constructor，然后导航到 home
                this.router.navigate(['/home']);
                return undefined;   
        }
        
        }
    }
    
