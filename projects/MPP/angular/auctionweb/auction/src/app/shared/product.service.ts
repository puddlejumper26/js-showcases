import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // 这里的products的类型是Product数组[]
  private products: Product[] = [
    new Product(1, '1st Product', 1.99, 3.5, 'This is the 1st product, which is used for display', ['Electronics', 'Hardware']),
    new Product(2, '2nd Product', 2.99, 2.5, 'This is the 2nd product, which is used for display', ['Books']),
    new Product(3, '3rd Product', 3.99, 4.5, 'This is the 3rd product, which is used for display', ['Hardware']),
    new Product(4, '4th Product', 4.99, 1.5, 'This is the 4th product, which is used for display', ['Electronics', 'Hardware']),
    new Product(5, '5th Product', 5.99, 3.5, 'This is the 5th product, which is used for display', ['Electronics']),
    new Product(6, '6th Product', 6.99, 2.5, 'This is the 6th product, which is used for display', ['Books'])
];


  private comments: Comment[] =[
    new Comment(1,1,"2019-02-02 22:22:22", "Peter", 3, "Not bad"),
    new Comment(2, 1, "2019-02-02 22:22:22", "Peter2", 4, "Not bad"),
    new Comment(3, 1, "2019-02-02 22:22:22", "Peter3", 2, "good"),
    new Comment(4, 2, "2019-02-02 22:22:22", "Peter4", 1, "bad"),
  ]

  

  constructor() {}

  getProducts(): Product[]{
      return this.products;
  }

  getProduct(id: number): Product {  //返回值是一个Product
    return this.products.find((product) => product.id == id);
    //查找的条件是 product的id 和 参数传进来的id 相同
  }

  getCommentsForProductId(id: number,): Comment[]{ //接受id，返回一个comment数组
    return this.comments.filter((comment: Comment)=> comment.productId == id); 
    //传进来一个comment,然后声明一个匿名函数，如果评论的productId 和 传进来的id相等，那么就把这个评论加到数组里
  }
}

// 2.8 有一个对象来封装产品信息
export class Product {

  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number, // 注意星级评价只能是5颗星，所以不能超过5
    public desc: string,
    public categories: Array<string>
  ){ }
}

export class Comment{

  //构造函数里来声明所需要的字段
  constructor(
    public id: number,
    public productId: number, //当前的评论是针对哪个商品做的
    public timestamp: string, //就是评论发布的时间
    public user: string, //发表评论的人的名字
    public rating: number, //发表评论的人的评心
    public content: string, //评论的内容
  ){  }
}
