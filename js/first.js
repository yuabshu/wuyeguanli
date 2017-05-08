$(function(){
	var secs=5;			
	var dingshi=setInterval(function(){
		secs-=1;
		$('#daoji').html(secs);
		if(secs==0){
			clearInterval(dingshi);
			location.href='index.html';
		}
	},1000);			
}) 