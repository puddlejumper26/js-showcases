class Control {
    private state: any;
}

//接口同样会继承到类的private和protected成员。 这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现（implement）
interface SelectableControl extends Control{    
    select():void;
}

class Button extends Control implements SelectableControl{
    select(){}
}

class TextBox extends Control{
    select(){}
}

//Button和TextBox类是SelectableControl的子类（因为它们都继承自Control并有select方法），但ImageA和LocationA类并不是这样的。


//这里的ImageA没有extends Control，所以报错，如果加上，就不会。Property 'state' is missing in type 'ImageA' but required in type 'SelectableControl'
class ImageA implements SelectableControl{
    select(){}
    
}

class LocationA implements SelectableControl{}