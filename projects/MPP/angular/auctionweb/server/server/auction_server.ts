import * as express from "express";

const app= express();

export class Product {

    constructor(
        public id: number,
        public title: string,
        public price: number,
        public rating: number, // 注意星级评价只能是5颗星，所以不能超过5
        public desc: string,
        public categories: Array<string>
    ) { }
}


export class Comment {
    constructor(
        public id: number,
        public productId: number, //当前的评论是针对哪个商品做的
        public timestamp: string, //就是评论发布的时间
        public user: string, //发表评论的人的名字
        public rating: number, //发表评论的人的评心
        public content: string, //评论的内容
    ) { }
}

const products: Product[] = [
    new Product(1, '1st Product', 1.99, 3.5, 'This is the 1st product, which is used for display', ['Electronics', 'Hardware']),
    new Product(2, '2nd Product', 2.99, 2.5, 'This is the 2nd product, which is used for display', ['Books']),
    new Product(3, '3rd Product', 3.99, 4.5, 'This is the 3rd product, which is used for display', ['Hardware']),
    new Product(4, '4th Product', 4.99, 1.5, 'This is the 4th product, which is used for display', ['Electronics', 'Hardware']),
    new Product(5, '5th Product', 5.99, 3.5, 'This is the 5th product, which is used for display', ['Electronics']),
    new Product(6, '6th Product', 6.99, 2.5, 'This is the 6th product, which is used for display', ['Books'])
];

const comments: Comment[] = [
    new Comment(1, 1, "2019-02-02 22:22:22", "Peter", 3, "Not bad"),
    new Comment(2, 1, "2019-02-02 22:22:22", "Peter2", 4, "Not bad"),
    new Comment(3, 1, "2019-02-02 22:22:22", "Peter3", 2, "good"),
    new Comment(4, 2, "2019-02-02 22:22:22", "Peter4", 1, "bad"),
];


app.get('/',(req,res)=>{res.send("Hello Express");});

app.get('/api/products',(req,res)=>{res.json(products);});
app.get("/api/product/:id", (req, res) => {
    res.json(products.find((product) => product.id == req.params.id))
});

//注意下面的这一步 8.5.1
//接收到/api/product/:id/comments的服务请求的时候，就从本地的comments里
//过滤出评论的商品ID 等于传进来的 req里值，相等的这些评论返回回去。
app.get("/api/product/:id/comments", (req, res) => {
    res.json(comments.filter((comment: Comment) => comment.productId == req.params.id))
});

const server=app.listen(8000,"localhost",()=>{
    console.log("服务器已经启动，地址是localhost 8000");
})