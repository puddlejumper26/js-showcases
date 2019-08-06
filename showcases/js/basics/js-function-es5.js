var jsFuncEs5={

//****************************字符串****************************/
    
//去除字符串空格
    //去除空格  type 1-所有空格  2-前后空格  3-前空格 4-后空格
    //trim('  1235asd',1)
    //result：1235asd

    trim:function(str,type){
        switch(type){
            case 1:
                return str.replace(/\s+/g, "");// 这里/\s*/g效果一样
            case 2:
                return str.replace(/(^\s*)|(\s*$)/g, "");
            case 3:
                return str.replace(/(^\s*)/g, "");
            case 4:
                return str.replace(/(\s*$)/g, "");
            default:
                return str;
        }
    },

//字母大小写切换
    /*type
    1:首字母大写
    2：首页母小写
    3：大小写转换
    4：全部大写
    5：全部小写
    * */
    //changeCase('asdasd',1)
    //result：Asdasd
    changeCase:function(str,type){
        function ToggleCase(str){
            var itemText = "";
            str.split("").forEach(
                function(item){
                    if(/^([a-z]+)/.test(item)){
                        itemText += item.toUpperCase();
                    }else if(/^([A-Z]+)/.test(item)){
                        itemText += item.toLowerCase();
                    }else{
                        itemText += item;
                    }
                });
                return itemText;
        }

        switch(type){
            case 1:
                return str.replace(/\w+/g, function (word) {
                    return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
                });
            case 2:
                return str.replace(/\w+/g, function (word) {
                    return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
                });
            case 3:
                return ToggleCase(str);
            case 4:
                return str.toUpperCase();
            case 5:
                return str.toLowerCase();
            default:
                return str;
        }

    },

//字符串循环复制
    //repeatStr(str->字符串, count->次数)
    //repeatStr('123',3)
    //"result：123123123"
    repeatStr:function(str,count){
        var text='';
        for(var i=0; i< count; i++){
            text += str;
        }
        return text;
    },

//字符串替换
    //replaceAll('这里是上海，中国第三大城市，广东省省会，简称穗，','上海','广州')
    //result："这里是广州，中国第三大城市，广东省省会，简称穗，"
    replaceAll:function(str, AFindText,ARepText){
        raRegExp = new RegExp(AFindText, "g");  //这里用“i”，就只换第一个
        return str.replace(raRegExp, ARepText);
    },

//替换* 
    //字符替换*
    //
    //replaceStr(字符串,字符格式, 替换方式,替换的字符（默认*）)
    //
    //replaceStr('18819322663',[3,5,3],0)
    //result：188*****663
    //replaceStr('asdasdasdaa',[3,5,3],1)
    //result：***asdas***
    //replaceStr('1asd88465asdwqe3',[5],0)
    //result：*****8465asdwqe3
    //replaceStr('1asd88465asdwqe3',[5],1,'+')
    //result："1asd88465as+++++"
    replaceStr:function(str,regArr,type,ARepText){
        var regtext = '',
            Reg=null,
            replaceText = ARepText || '*';
        
        if(regArr.length === 3 && type === 0){
            regtext = '(\\w{' + regArr[0] + '})\\w{' + regArr[1]+ '}(\\w{'+regArr[2]+'})';
            Reg = new RegExp(regtext);
            var replaceCount = this.repeatStr(replaceText, regArr[1]); //这里只是为了显示出现ARepText || '*'重复的次数
            
            return str.replace(Reg,'$1'+replaceCount + '$2');
        }
        else if(regArr.length === 3 && type === 1) {
            regtext = '\\w{' + regArr[0] + '}(\\w{' + regArr[1] + '})\\w{' + regArr[2] + '}';
            Reg = new RegExp(regtext);
            var replaceCount1 = this.repeatStr(replaceText,regArr[0]);
            var replaceCount2 = this.repeatStr(replaceText,regArr[2]);
            return str.replace(Reg,replaceCount1 + '$1'+ replaceCount2);
        }
        else if(regArr.length === 1 && type === 0){
            regtext = '(^\\w{' + regArr[0] + '})';
            Reg = new RegExp(regtext);
            var replaceCount = this.repeatStr(replaceText,regArr[0]);
            return str.replace(Reg,replaceCount);
        }
        else if(regArr.length === 1 && type === 1){
            regtext = '(\\w{' + regArr[0]+ '}$)';
            Reg = new RegExp(regtext);
            var replaceCount = this.repeatStr(replaceText,regArr[0]);
            return str.replace(Reg,replaceCount);
        }
    },

//检测字符串
    //检测字符串
    //checkType('165226226326','phone')
    //result：false
    checkType: function(str,type){
        switch(type){
            case 'email':
                return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
            case '24hour':
                return /^([01][0-9]|[2][0-3]):[0-5][0-9]$/.test(str);
            case 'cnphone':
                return /^1[3|4|5|7|8][0-9]{9}$/.test(str);
            case 'dephone':
                return /^1[6|7][0-9]{7}$/.test(str);
            case 'tel':
                return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
            case 'number':
                return /^[0-9]+$/.test(str); //源文件中遗漏
            case 'english':
                return /^[a-zA-Z]+$/.test(str);
            case 'text':
                return /^\w+$/.test(str);
            case 'chinese':
                return /^[\u4E00-\u9FA5]+$/.test(str);
            case 'lower':
                return /^[a-z]+$/.test(str);
            case 'upper':
                return /^[A-Z]+$/.test(str);
            default:
                return true;
        }
    },

//检测密码强度
    //checkPwd('12asdASAD')
    //result：3(强度等级为3)
    checkPwd:function(str){
        var nowLv = 0;
        if(str.length < 6){
            return nowLv;
        }
        if(/[0-9]+/.test(str)){ //源文件中遗漏
             nowLv++;
        }
        if (/[a-z]+/.test(str)) {//源文件中遗漏
            nowLv++;
        }
        if(/[A-Z]/.test(str)){
            nowLv++;
        }
        if(/[\.|-|_]/.test(str)){
            nowLv++;
        }
        return nowLv;
    },

//随机码（toString详解）
    // count取值范围0 - 36
    //randomWord(10)
    //result："2584316588472575"
    //randomWord(14)
    //result："9b405070dd00122640c192caab84537"
    //randomWord(36)
    //result："83vhdx10rmjkyb9"
    randomWord: function (count) {
        return Math.random().toString(count).substring(2);
    },

//查找字符串出现的次数
    //可能标题会有点误导，下面我就简单说明一个需求，在字符串'sad44654blog5a1sd67as9dablog4s5d16zxc4sdweasjkblogwqepaskdkblogahseiuadbhjcibloguyeajzxkcabloguyiwezxc967'中找出'blog'的出现次数。代码如下
    //var strTest='sad44654blog5a1sd67as9dablog4s5d16zxc4sdweasjkblogwqepaskdkblogahseiuadbhjcibloguyeajzxkcabloguyiwezxc967'
    //countStr(strTest,'blog')
    //result：6

    countStr: function(str,strSplit){
        return str.split(strSplit).length -1;
    },

// 过滤字符串 
    //过滤字符串(html标签，表情，特殊字符)
    //字符串，替换内容（special-特殊字符,html-html标签,emjoy-emjoy表情,word-小写字母，WORD-大写字母，number-数字,chinese-中文），要替换成什么，默认'',保留哪些特殊字符
    //如果需要过滤多种字符，type参数使用,分割，如下栗子
    //过滤字符串的html标签，大写字母，中文，特殊字符，全部替换成*,但是特殊字符'%'，'?'，除了这两个，其他特殊字符全部清除
    //var str='asd    654a大蠢sasdasdASDQWEXZC6d5#%^*^&*^%^&*$\\"\'#@!()*/-())_\'":"{}?<div></div><img src=""/>啊实打实大蠢猪自行车这些课程';
    // ecDo.filterStr(str,'html,WORD,chinese,special','*','%?')
    //result："asd    654a**sasdasd*********6d5#%^*^&*^%^&*$\"'#@!()*/-())_'":"{}?*****************"

    filterStr:function(str,type,restr,spstr){
        var typeArr = type.split(','),
            _str=str;
        //The split() method splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.

        for(var i=0,len=typeArr.length; i<len;i++){
            //是否是过滤特殊符号
            if(typeArr[i]==='special'){
                var pattern,
                    regText = '$()[]{}?\|^*+./\"\'+';
                //是否有哪些特殊符号需要保留
                if(spstr){
                    var _spstr = spstr.split(""),
                        _regText="[^0-9A-Za-z\\s]";
                    
                    for(var j=0,len1=_spstr.length;j<len1;j++){
                        if(regText.indexOf(_spstr[j])===-1){
                            _regText += _spstr[j];
                        }
                        else{
                            _regText += '\\' +_spstr[j];
                        }
                    }
                    _regText += ']';
                    pattern = new RegExp(_regText, 'g');
                }
                else {
                    pattern = new RegExp("[^0-9A-Za-z\\s]", 'g')
                }
            }
            var _restr = restr || '';

            switch (typeArr[i]) {
                case 'special':
                    _str = _str.replace(pattern, _restr);
                    break;
                case 'html':
                    _str = _str.replace(/<\/?[^>]*>/g, _restr);
                    break;
                case 'emjoy':
                    _str = _str.replace(/[^\u4e00-\u9fa5|\u0000-\u00ff|\u3002|\uFF1F|\uFF01|\uff0c|\u3001|\uff1b|\uff1a|\u3008-\u300f|\u2018|\u2019|\u201c|\u201d|\uff08|\uff09|\u2014|\u2026|\u2013|\uff0e]/g, _restr);
                    break;
                case 'word':
                    _str = _str.replace(/[a-z]/g, _restr);
                    break;
                case 'WORD':
                    _str = _str.replace(/[A-Z]/g, _restr);
                    break;
                case 'number':
                    _str = _str.replace(/[0-9]/g, _restr);
                    break;
                case 'chinese':
                    _str = _str.replace(/[\u4E00-\u9FA5]/g, _restr);
                    break;
            }
        }
        return _str;
    },

//格式化处理字符串
    //formatText('1234asda567asd890')
    //result："12,34a,sda,567,asd,890"
    //formatText('1234asda567asd890',4,' ')
    //result："1 234a sda5 67as d890"
    //formatText('1234asda567asd890',4,'-')
    //result："1-234a-sda5-67as-d890"
    formatText:function(str,size,delimiter){
        var _size = size || 3,
            _delimiter = delimiter || ',';

        var regText = '\\B(?=(\\w{' + _size + '})+(?!\\w))';
        var reg = new RegExp(regText,'g');
        return str.replace(reg,_delimiter);
    },

//找出最长单词
    //longestWord('Find the Longest word in a String')
    //result：7
    //longestWord('Find|the|Longest|word|in|a|String','|')
    //result：7

    longestWord: function(str,splitType){
        var _splitType = splitType || /\s+/g,
            _max = 0,
            _item = '';
        var strArr = str.split(_splitType);
        strArr.forEach(function(item){
            if(_max<item.length){
                _max = item.length;
                _item = item;
            }
        })
        return {el:_item,max:_max};
    },

//句中单词首字母大写 
    //titleCaseUp('this is a title')
    //"This Is A Title"

    titleCaseUp:function(str,splitType){
        var _splitType = splitType || /\s+/g;
        var strArr = str.split(_splitType),
            result = "",
            _this = this;
        
        strArr.forEach(function(item){
            result += _this.changeCase(item,1)+' ';
        })
        return this.trim(result,4)
        //trim 4, 是去掉后空格
    },


//****************************数组操作****************************/

//数组去重
    removeRepeatArray:function(arr){
        return arr.filter(function (item,index,self) {
            console.log(self);//传入的数组
            console.log(item); // 数组中的每一个元素
            console.log(index); // 每个元素的位置
            return self.indexOf(item) === index;
        });
    },
    //The filter() method creates a new array with all elements that pass the test implemented by the provided function.


//数组顺序打乱
    upsetArr:function(arr){
        return arr.sort(function(){
            return Math.random()-0.1;
        });
    },

    //The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

//数组降序排列 
    downArr:function(arr){
        return arr.sort(function(n1,n2){
            if(n1>=n2){return n2-n1;}
        })
    },

    //The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.


//数组升序排列
    upArr:function(arr){
        return arr.sort(function(n1,n2){
            if(n1<=n2){return n1-n2;}
        })
    },
    
//数组最大值最小值
    //数组最大值
    maxArr: function (arr) {
        return Math.max.apply(null, arr);
    },
    //数组最小值
    minArr: function (arr) {
        return Math.min.apply(null, arr);
    },

//数组求和，平均值
    //这一块的封装，主要是针对数字类型的数组
    //求和
    sumArr:function(arr){
        return arr.reduce(function(pre,cur){
            return pre+cur;
        })
    },
    //数组平均值,小数点可能会有很多位，这里不做处理，处理了使用就不灵活！
    covArr: function (arr) {
        return this.sumArr(arr) / arr.length;
    },


//从数组中随机获取元素
    randomOne: function (arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    },


//返回数组（字符串）一个元素出现的次数
    //getEleCount('asd56+asdasdwqe','a')
    //result：3
    //getEleCount([1,2,3,4,5,66,77,22,55,22],22)
    //result：2
    getEleCount:function(obj,ele){
        var num=0;
        for(var i =0,len = obj.length;i<len;i++){
            if(ele === obj[i]){
                num++;
            }
        }
        return num;
    },

//返回数组（字符串）出现最多的几次元素和出现次数 ###
    //arr, rank->长度，默认为数组长度，ranktype，排序方式，默认降序
    //返回值：el->元素，count->次数
    //getCount([1,2,3,1,2,5,2,4,1,2,6,2,1,3,2])
    //默认情况，返回所有元素出现的次数
    //result：[{"el":"2","count":6},{"el":"1","count":4},{"el":"3","count":2},{"el":"4","count":1},{"el":"5","count":1},{"el":"6","count":1}]
    //getCount([1,2,3,1,2,5,2,4,1,2,6,2,1,3,2],3)
    //传参（rank=3），只返回出现次数排序前三的
    //result：[{"el":"2","count":6},{"el":"1","count":4},{"el":"3","count":2}]
    //getCount([1,2,3,1,2,5,2,4,1,2,6,2,1,3,2],null,1)
    //传参（ranktype=1,rank=null），升序返回所有元素出现次数
    //result：[{"el":"6","count":1},{"el":"5","count":1},{"el":"4","count":1},{"el":"3","count":2},{"el":"1","count":4},{"el":"2","count":6}]
    //getCount([1,2,3,1,2,5,2,4,1,2,6,2,1,3,2],3,1)
    //传参（rank=3，ranktype=1），只返回出现次数排序（升序）前三的
    //result：[{"el":"6","count":1},{"el":"5","count":1},{"el":"4","count":1}]

    getCount:function (arr,rank,ranktype) {
        var obj={},
            k,arr1 = [];
       //记录每一元素出现的次数
       for(var i=0;i<arr.length;i++){
            k=arr[i];
            if(obj[k]){
                obj[k]++;
            }else{
                obj[k]=1;
            }
       }
       //保存结果{el-'元素'，count-出现次数}
        for (var o in obj) {
            arr1.push({ el: o, count: obj[o] });
        }
        //排序（降序）
        arr1.sort(function (n1, n2) {
            return n2.count - n1.count
        });
        //如果ranktype为1，则为升序，反转数组
        if (ranktype === 1) {
            arr1 = arr1.reverse();
        }
        var rank1 = rank || arr1.length;
        return arr1.slice(0, rank1);

    },

//得到n1-n2下标的数组
    //getArrayNum([0,1,2,3,4,5,6,7,8,9],5,9)
    //result：[5, 6, 7, 8, 9]
    //getArrayNum([0,1,2,3,4,5,6,7,8,9],2) //不传第二个参数,默认返回从n1到数组结束的元素
    //result：[2, 3, 4, 5, 6, 7, 8, 9]

    getArrayNum:function(arr,n1,n2){
        return arr.slice(n1,n2);
    },


//筛选数组
    //删除值为'val'的数组元素
    //removeArrayForValue(['test','test1','test2','test','aaa'],'test',1)
    //result：["aaa"]   带有'test'的都删除
    //removeArrayForValue(['test','test1','test2','test','aaa'],'test')
    //result：["test1", "test2", "aaa"]  //数组元素的值全等于'test'才被删除

    removeArrayForValue:function(arr,val,type){
        return arr.filter(function(item){
            console.log(item);//传入数组的每一个元素
            return type?item.indexOf(val) === -1 : item!==val;
        })
    },
    //这里的type只要为true，就可以进行模糊筛选


//获取对象数组某些项
    //var arr=[{a:1,b:2,c:9},{a:2,b:3,c:5},{a:5,b:9},{a:4,b:2,c:5},{a:4,b:5,c:7}]
    //getOptionArray(arr,'a,c')
    //result：[{a:1,c:9},{a:2,c:5},{a:5,c:underfind},{a:4,c:5},{a:4,c:7}]
    //getOptionArray(arr,'b')
    //result：[2, 3, 9, 2, 5]

    getOptionArray:function(arr,keys){
        var newArr=[];
        if(!keys){
            return arr;
        }
        var _keys=keys.split(','),
            newArrOne ={};
        //是否只是需要获取某一项的值
        if(_keys.length === 1){
            for(var i=0; i<arr.length; i++){
                newArr.push(arr[i][keys]);
            }
            return newArr;
        }
        for(var i=0; i<arr.length;i++){
            newArrOne = {};
            for(var j=0;j<keys.length;j++){
                newArrOne[_keys[j]]=arr[i][_keys[j]];
            }
            newArr.push(newArrOne);
        }
        return newArr;
    },


// 排除对象数组某些项 
    //var arr=[{a:1,b:2,c:9},{a:2,b:3,c:5},{a:5,b:9},{a:4,b:2,c:5},{a:4,b:5,c:7}]
    //filterOptionArray(arr,'a')
    //result：[{b:2,c:9},{b:3,c:5},{b:9},{b:2,c:5},{b:5,c:7}]
    //filterOptionArray(arr,'a,c')
    //result：[{b:2},{b:3},{b:9},{b:2},{b:5}]
    filterOptionArray:function(arr,keys){
        var newArr = []
        var _keys = keys.split(','), newArrOne = {};
        for (var i = 0, len = arr.length; i < len; i++) {
            newArrOne = {};
            for (var key in arr[i]) {
                //如果key不存在排除keys里面,添加数据
                if (_keys.indexOf(key) === -1) {
                    newArrOne[key] = arr[i][key];
                }
            }
            newArr.push(newArrOne);
        }
        return newArr

    },


//对象数组排序
    //var arr=[{a:1,b:2,c:9},{a:2,b:3,c:5},{a:5,b:9},{a:4,b:2,c:5},{a:4,b:5,c:7}]
    //arraySort(arr,'a,b')a是第一排序条件，b是第二排序条件
    //result：[{"a":1,"b":2,"c":9},{"a":2,"b":3,"c":5},{"a":4,"b":2,"c":5},{"a":4,"b":5,"c":7},{"a":5,"b":9}]

    arraySort: function (arr, sortText) {
        if (!sortText) {
            return arr
        }
        var _sortText = sortText.split(',').reverse(), 
            _arr = arr.slice(0);

        for (var i = 0, len = _sortText.length; i < len; i++) {
            _arr.sort(function (n1, n2) {
                return n1[_sortText[i]] - n2[_sortText[i]]
            })
        }
        return _arr;
    },


//数组扁平化
    // steamroller([1,2, [4,5, [1,23]]])
    //[1, 2, 4, 5, 1, 23]

    steamroller:function(arr){
        var newArr = [],
            _this = this;
        for(var i=0;i<arr.length;i++){
            if(Array.isArray(arr[i])){
                // 如果是数组，调用(递归)steamroller 将其扁平化
                // 然后再 push 到 newArr 中
                newArr.push.apply(newArr, _this.steamroller(arr[i]));
            }else{
                // 不是数组直接 push 到 newArr 中
                newArr.push(arr[i]);
            }
        }
        return newArr;
    },
        //push is intentionally generic. This method can be used with call() or apply() on objects resembling arrays.




//****************************DOM操作****************************/
    //这个部分代码其实参考jquery的一些函数写法，唯一区别就是调用不用，参数一样.比如下面的栗子
    //设置对象内容
    // jquery：$('#xxx').html('hello world');
    // 现在：ecDo.html(document.getElementById('xxx'), 'hello world')
    //获取对象内容
    // jquery：$('#xxx').html();
    //     现在：ecDo.html(document.getElementById('xxx'))


// 检测对象是否有哪个类名
    hasClass:function(obj,classStr){
        if(obj.className && this.trim(obj.className,1) !==""){
            //trim 1 是去掉所有空格
            
        }
    }





}

