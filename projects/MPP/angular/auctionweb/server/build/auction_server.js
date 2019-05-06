"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var express = require("express");
var app = express();
var Product = /** @class */ (function () {
    function Product(id, title, price, rating, // 注意星级评价只能是5颗星，所以不能超过5
    desc, categories) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.categories = categories;
    }
    return Product;
}());
exports.Product = Product;
var products = [
    new Product(1, '1st Product', 1.99, 3.5, 'This is the 1st product, which is used for display', ['Electronics', 'Hardware']),
    new Product(2, '2nd Product', 2.99, 2.5, 'This is the 2nd product, which is used for display', ['Books']),
    new Product(3, '3rd Product', 3.99, 4.5, 'This is the 3rd product, which is used for display', ['Hardware']),
    new Product(4, '4th Product', 4.99, 1.5, 'This is the 4th product, which is used for display', ['Electronics', 'Hardware']),
    new Product(5, '5th Product', 5.99, 3.5, 'This is the 5th product, which is used for display', ['Electronics']),
    new Product(6, '6th Product', 6.99, 2.5, 'This is the 6th product, which is used for display', ['Books'])
];
app.get('/', function (req, res) { res.send("Hello Express"); });
app.get('/api/products', function (req, res) { res.json(products); });
app.get("/api/product/:id", function (req, res) {
    res.json(products.find(function (product) { return product.id == req.params.id; }));
});
var server = app.listen(8000, "localhost", function () {
    console.log("服务器已经启动，地址是localhost 8000");
});
