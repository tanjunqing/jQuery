/**
 * Created by Tan on 16/1/29.
 */

// 添加一个新的全局函数
//jQuery.foo = function(obj){
//    alert($(obj).val());
//}
//jQuery.bar = function(){
//    alert("xxfsdfsdf");
//}
//增加多个全局函数
//jQuery.extend({
//    foo: function(obj){
//        alert($(obj).val());
//    },
//    bar:function(){
//        alert("xxfsdfsdfsdf");
//    }
//});


// 对jQuery.prototype进得扩展，就是为jQuery类添加“成员函数”。
// jQuery类的实例可以使用这个“成员函数”。
$.fn.extend({
    foo: function(obj){
        alert($(obj).val());
    },
    bar: function(){
        $(this).on("click",function(){
            alert($(this).val());
        })
    }
});

//使用命名空间
jQuery.myPlugin = {
    foo: function(obj){
        alert($(obj).val());
    },
    bar: function(obj){
        $(obj).on("click",function(){
            alert($(this).val());
        })
    }
};

//对象级别的插件开发
(function($){
    $.fn.extend({
        pluginName: function(){
            alert("xxxxx");
        }
    })
})(jQuery);

(function($){
    $.fn.pluginName = function(){
        alert("yyyyy");
    }
})(jQuery);

$.fn.hilight = function(){
    alert("zzzzzzz");
};

$.fn.dalert = function(options){
    var defaults = {"foreground": "red","background": "yellow"};
    var opts = $.fn.extend(defaults,options);
    alert(opts);
};

(function($){
    $.fn.tableUi = function(options){
        var defaults = {evenRowClass: "yellow",oddRowClass: "bule"};
        var options = $.extend(defaults,options);
        $(this).each(function(){
            var thisTable = $(this);
            $(thisTable).find("tr:even").addClass(options.evenRowClass);
            $(thisTable).find("tr:odd").addClass(options.oddRowClass);
        })
    }
})(jQuery)