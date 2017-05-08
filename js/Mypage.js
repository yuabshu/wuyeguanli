$(function(){
	var scrollImg = $.mggScrollImg('.imgbox ul',{
        loop : true,//循环切换
        auto : true,//自动切换
        callback : function(ind){//这里传过来的是索引值
            $('#page').text(ind+1);
        }
    });
})