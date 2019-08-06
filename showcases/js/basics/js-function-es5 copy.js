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
        else if (regArr.length === 3 && type === 1) {
            regtext = '\\w{' + regArr[0] + '}(\\w{' + regArr[1] + '})\\w{' + regArr[2] + '}';
            Reg = new RegExp(regtext);
            var replaceCount1 = this.repeatStr(replaceText, regArr[0]);
            var replaceCount2 = this.repeatStr(replaceText, regArr[2]);
            return str.replace(Reg, replaceCount1 + '$1' + replaceCount2)
        }

        







    },


}