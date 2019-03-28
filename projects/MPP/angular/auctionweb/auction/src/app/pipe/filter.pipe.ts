import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], filterField: string, keyword: string): any {
    //这里是传入了三个参数， 
    //list是商品名单，是一个数组，filterField是根据商品的哪一个字段进行过滤，
    //keyword是用户输入的关键字

    //首先判断用户有没有传入filterField和keyword
    if (!filterField || !keyword) {
      return list; //有任何一个没有传，就直接返回原来的列表，不做过滤
    }
    return list.filter(item => { //集合中的元素
      let fieldValue = item[filterField];//当前元素的指定字段
      //判断这个值是否包含关键字，如果包含就会>=0
      return fieldValue.indexOf(keyword) >= 0;

    });
  }
}

