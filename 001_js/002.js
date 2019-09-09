// javascripts 基础学习
// todo list
// 1 js 中事件



// Tip: JavaScript 是以事件驱动为核心的一门语言。JavaScript 与 HTML 之间的交互是通过事件实现的。
// 事件的三要素：事件源、事件、事件驱动程序
//  事件源：引发后续事件的html标签。
//  事件：js已经定义好了（见下图）。
//  事件驱动程序：对样式和html的操作。也就是DOM。

// onload 完成后触发其他 点
window.onload = function () {

    function fn() {
        alert("我是弹出的内容");
    }

    //点击鼠标时，原本粉色的div变大了，背景变红了

    var div1 = document.getElementById("box1");
    div1.onmouseover = function () {
        div1.style.width = "200px";   //属性值要写引号
        div1.style.height = "200px";
        div1.style.backgroundColor = "red";   //属性名是backgroundColor，不是background-color
    }
    div1.onmouseleave = function () {
        div1.style.width = "100px";   //属性值要写引号
        div1.style.height = "100px";
        div1.style.backgroundColor = "green";   //属性名是backgroundColor，不是background-color
    }

    // 新窗口 = window.open(地址,是否开新窗口,新窗口的各种参数);
    var a1 = document.getElementsByTagName("a")[0];
    var a2 = document.getElementsByTagName("a")[1];
    a1.onclick = function () {
    // 举例1： window.open("http://www.jx.com","_blank");
            var json = {
                "name": "helloworld",
                "fullscreen": "no",
                "location": "no",
                "width": "100px",
                "height": "100px",
                "top": "100px",
                "left": "100px"
            };
            window.open("http://www.baidu.com", "_blank", json); //举例2
        }

    //关闭本页面
    a2.onclick = function () {
        window.close();
    }

}


// 事件源获取方式
// var div1 = document.getElementById("box1");      //方式一：通过id获取单个标签
// var arr1 = document.getElementsByTagName("div");     //方式二：通过 标签名 获得 标签数组，所以有s
// var arr2 = document.getElementsByClassName("hehe");  //方式三：通过 类名 获得 标签数组，所以有s


// Dom 常见 文档对象模型，操作网页上的元素的API。比如让盒子移动、变色、轮播图等。
// Bom 浏览器对象模型，操作浏览器部分功能的API。比如让浏览器自动滚动。




