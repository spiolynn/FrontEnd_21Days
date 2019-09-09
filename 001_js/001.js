// javascripts 基础学习

// js 基础组成部分
// 1 ECMAScripts: JS标准语法
// 2 dom：文档对象模型
// 3 bom：浏览器对象

// alert("生命壹号");
console.log("我是输出信息")
sayHelloWorld()
sum = add(10,20)
console.log("结果:" + sum)

learningValue()
main()
console.log("------------------------------- array")
learningArray()

// 知识点001: 函数

// 无参数
function sayHelloWorld() {
    console.log("hello world")
}
// 有参数
function add(a,b) {
    return a+b
}


// 知识点2：变量
// 1 哪些类型变量 （数据类型） 6+1
// 2 标量 声明 初始化 调用
// 3 变量的log format
// 4 类型检查  typeof
// 5 基本数据类型的特殊值 、Number.max
// 6 类型转换 all to String()、Number()、Boolean()

// 基本数据类型（值类型）：String 字符串、Number 数值、Boolean 布尔值、Null 空值、Undefined 未定义。
// 引用数据类型（引用类型）：Object 对象。


// string 类型
function learningValue() {
    var str = "iam String"
    console.log("str is typeof " + typeof(str))

    var num = 100
    console.log("num is typeof " + typeof(num))
    console.log(Number.MAX_VALUE)

    if (typeof(num) == typeof(123)){
        console.log("is number")
    }else{
        console.log("is not number")
    }

    console.log("类型转换")
    var num1 = 123
    console.log(num1.toString())

    console.log(Number("adfadf1231"))
    console.log(parseInt("adfadf1231"))
    console.log(parseInt("2017在公众号上写了6篇文章")); 
    console.log(Number("2017在公众号上写了6篇文章")); 
}


// 知识点3: 对象类型
// 1 定义对象 OK
// 2 对象初始化 OK
// 3 this 对于函数、方法、构造函数的不同指向 OK


// TIP：对象是堆内存
// TIP：对象分类
// 1 内部对象 String Math ... 
// 2 宿主对象 Dom Bom 
// 3 自定义


// 构造函数首字母大小
function Person(name,age,gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

Person.prototype.showAge = function(){
    console.log("age is " + this.age);
    console.log(this)
};

Person.prototype.toString = function() {
    return (
      "Person[name=" +
      this.name +
      ",age=" +
      this.age +
      ",gender=" +
      this.gender +
      "]"
    );
};

var per1 = new Person("vae", 26, "男");
console.log("per1 = " + per1);
console.log("per1 = " + per1.toString());
per1.showAge()


function main() {

    console.log(Person.prototype);
    var a_person = new Person("hupan",12,"男")
    console.log("a_person: " + a_person.name)
    console.log("a_person tostring: " + a_person.toString())
    // console.log(a_person.__proto__ == Person.prototype); // 打印结果：true

    // console.log(a_person.toString())
    // a_person.showAge()
    
    // var result = a_person instanceof Person
    // console.log("a_person instanceof Person " + result)

    // // in
    // if ("Name" in a_person){
    //     console.log("Name is itom to a_Persion")
    // }
    
    // // 遍历对象
    // for (var n in a_person) {
    //     console.log("属性名:" + n + "\t" + "属性值:" + a_person[n]);
    // }
}


// 知识点：数组
// 1 数组定义
// 2 数据初始化
// 3 数据遍历
// 4 数据caud


function learningArray(){

        // 方式一
        var arr1 = [11, 12, 13];

        // 方式二
        var arr2 = new Array(); // 参数为空
        var arr3 = new Array(4); // 参数为一个数值
        var arr4 = new Array(15, 16, 17); // 参数为多个数值
    
        console.log("arr1 类型是: " + typeof arr1);  // 打印结果：object
        console.log("arr1 = " + JSON.stringify(arr1));
        console.log("arr2 = " + JSON.stringify(arr2));
        console.log("arr3 = " + JSON.stringify(arr3));
        console.log("arr4 = " + JSON.stringify(arr4));

}