var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var first = [1, 2];
var second = [3, 4];
var bothPlus = [0].concat(first, second, [5]);
console.log(bothPlus); //[ 0, 1, 2, 3, 4, 5 ]
//如果去掉三个点，得到的结果就是
//[ 0, [ 1, 2 ], [ 3, 4 ], 5 ]
var defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
var search = __assign({}, defaults, { food: "rich" });
console.log(search); //{ food: 'rich', price: '$$', ambiance: 'noisy' }
//如果去掉三个点，得到的结果就是
//{ defaults: { food: 'spicy', price: '$$', ambiance: 'noisy' },food: 'rich' }
var search2 = __assign({ food: "rich" }, defaults);
console.log(search2);
// { food: 'spicy', price: '$$', ambiance: 'noisy' }
// 对象的展开比数组的展开要复杂的多。 像数组展开一样，它是从左至右进行处理，但结果仍为对象。 这就意味着出现在展开对象后面的属性会覆盖前面的属性。 因此，如果我们修改上面的例子，在结尾处进行展开的话：defaults里的food属性会重写food: "rich"，
var C = /** @class */ (function () {
    function C() {
        this.p = 12;
    }
    C.prototype.m = function () { return "asab"; };
    return C;
}());
var c = new C();
var clone = __assign({}, c);
console.log(clone.p);
// console.log(clone.m());
