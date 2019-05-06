let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5];
console.log(bothPlus);//[ 0, 1, 2, 3, 4, 5 ]
//如果去掉三个点，得到的结果就是
//[ 0, [ 1, 2 ], [ 3, 4 ], 5 ]


let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };
console.log(search);//{ food: 'rich', price: '$$', ambiance: 'noisy' }

//如果去掉三个点，得到的结果就是
//{ defaults: { food: 'spicy', price: '$$', ambiance: 'noisy' },food: 'rich' }

let search2 = {food: "rich", ...defaults};
console.log(search2);
// { food: 'spicy', price: '$$', ambiance: 'noisy' }
// 对象的展开比数组的展开要复杂的多。 像数组展开一样，它是从左至右进行处理，但结果仍为对象。 这就意味着出现在展开对象后面的属性会覆盖前面的属性。 因此，如果我们修改上面的例子，在结尾处进行展开的话：defaults里的food属性会重写food: "rich"，


class C{
    p=12;
    m(){return "asab";}
}

let c=new C();
let clone={...c};
console.log(clone.p);
// console.log(clone.m());