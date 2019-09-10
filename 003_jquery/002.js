// jquery 是什么
// jQuery 是 js 的一个库，封装了我们开发过程中常用的一些功能，方便我们调用，提高开发效率。

// 我们需要关注jQuery的什么
// 1 jQuery 操作Dom
// 2 jQuery API 



$(window).ready(function () {

    console.log("call 002.js")

    //获取ul中的li设置为粉色
    //后代：儿孙重孙曾孙玄孙....
    var jqLi = $("ul li");

    console.log(jqLi)
    jqLi.css("margin", 5);
    jqLi.css("background", "green");

    //子代：亲儿子
    var jqOtherLi = $("ul>li");
    jqOtherLi.css("background", "red");

});


$(document).ready(function () {

    // :odd 奇数
    $("li:odd").css("background", "gray");

    // :even
    $("li:even").css("background", "blue");

    // :eq(index)
    $("ul li:eq(1)").css("font-size", "40px");  //设置第2个li的字体

    // :lt(index)
    $("li:lt(1)").css("font-size", "30px");

    // // :gt(index)
    // $(".ulList1 li:gt(7)").css("font-size", "40px");

    // // :first
    // $(".ulList li:first").css("font-size", "40px");

    // // :last
    // $("li:last").css("font-size", "40px");
});

