$(function(){
	Bmob.initialize("6b4140fafe82ea45c3a2111f6447f5cc","109bb0d6635e1ac9e58d6e3220cfa38c");
	var Expense=Bmob.Object.extend("Expense");
	var query = new Bmob.Query(Expense);
	var users=document.cookie.split("=")[1];
	//alert(users);
	query.equalTo("username",users);
	query.find({
		success:function(results){
			var wei=results.length-1;
			var wutime=results[wei].get("wutime");
			var patime=results[wei].get("patime");
			var watime=results[wei].get("watime");
			var eltime=results[wei].get("eltime");
			var gatime=results[wei].get("gatime");
			$(".wuye>tr:nth-child(2)>td:nth-child(2)").html(wutime);
			$(".park>tr:nth-child(2)>td:nth-child(2)").html(patime);
			$(".water>tr:nth-child(2)>td:nth-child(2)").html(watime);
			$(".electricity>tr:nth-child(2)>td:nth-child(2)").html(eltime);
			$(".gas>tr:nth-child(2)>td:nth-child(2)").html(gatime);


			$(".wuye>tr:nth-child(2)>td:nth-child(3)").html(results[wei].get("wuye"));
			$(".park>tr:nth-child(2)>td:nth-child(3)").html(results[wei].get("park"));
			$(".water>tr:nth-child(2)>td:nth-child(3)").html(results[wei].get("water"));
			$(".electricity>tr:nth-child(2)>td:nth-child(3)").html(results[wei].get("electricity"));
			$(".gas>tr:nth-child(2)>td:nth-child(3)").html(results[wei].get("gas"));			
		},		
		error:function(error){
			alert("wrong");
		}
	})
})