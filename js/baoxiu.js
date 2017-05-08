$(function(){


    var users=document.cookie.split(";")[1].split("=")[1];
	Bmob.initialize("6b4140fafe82ea45c3a2111f6447f5cc","109bb0d6635e1ac9e58d6e3220cfa38c");
	var Expense=Bmob.Object.extend("Expense");
	var query = new Bmob.Query(Expense);
	$("#theB .buttonall a").click(function(){
		query.equalTo("username",users);
		query.find({
			success:function(results){
				query.get(results[results.length-1].id,{
					success:function(expense){
						expense.set('baoxiushijian',$("#yuyue").val());
						expense.set('baoxiuneirong',$("#baoxiu").val());
						expense.save();
					},
					error:function(object,error){
						alert("保修出错")
					}
				})
			},
			error:function(error){
				alert("wrong");
			}
		})
	})


	$("#theT .buttonall a").click(function(){
		query.equalTo("username",users);
		query.find({
			success:function(results){
				query.get(results[results.length-1].id,{
					success:function(expense){
						expense.set('tousuneirong',$("#tousu").val());
						expense.save();
					},
					error:function(object,error){
						alert("保修出错")
					}
				})
			},
			error:function(error){
				alert("wrong");
			}
		})
	})
})