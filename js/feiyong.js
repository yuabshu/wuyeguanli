$(function(){
        $('#tingche').click(function(){
        		$('#page2 h1').text('停车费缴纳');       		
        	});
        $('#wuye').click(function(){
        		$('#page2 h1').text("物业费缴纳");        		
        	})
        $('#shuifei').click(function(){
        		$('#page2 h1').text("水费缴纳");        		
        	})
        $('#dianfei').click(function(){
        		$('#page2 h1').text("电费缴纳");        		
        	})
        $('#qifei').click(function(){
        		$('#page2 h1').text("气费缴纳");        		
        	});



        $("#jiaofei").click(function(){
        	$("#mengban").css("display","block")
        })


        $("#poppay a").click(function(){
        	$("#mengban").css("display","none")
        })

        $("#page1 ul").click(function(){
        	var users=document.cookie.split("=")[1];
        	$("#payname").val(users);
        })
        
        function showTime(){
        	var mydate = new Date();
   			var str = "" + mydate.getFullYear() + "/";
  			str += (mydate.getMonth()+1) + "/";
   			str += mydate.getDate();
   			return str;
        }

//修改数据出现
	    function baocun(){
	    	var payname=$("#payname").val();
	    	Bmob.initialize("6b4140fafe82ea45c3a2111f6447f5cc","109bb0d6635e1ac9e58d6e3220cfa38c");
	    	var Expense=Bmob.Object.extend("Expense");
	    	var query = new Bmob.Query(Expense);
	    	if($('#page2 h1').html()=="停车费缴纳"){
	    		query.equalTo("username",payname);
	    		query.find({
	    			success:function(results){
	    				query.get(results[results.length-1].id,{
	    					success:function(expense){
	    						expense.set("park",$("#paymoney").val());
	    						expense.set("patime",showTime());
								expense.save();
	    					},
	    					error:function(object,error){
	    						alert("失败");
	    					}
	    				});	    				
	    			},
	    			error:function(error){
	    				alert("zhaoshujuchucuo");
	    			}
	    		})
	    		
	    	}else if($('#page2 h1').html()=="物业费缴纳"){
	    		query.equalTo("username",payname);
	    		query.find({
	    			success:function(results){
	    				query.get(results[results.length-1].id,{
	    					success:function(expense){
	    						expense.set("wuye",$("#paymoney").val());
	    						expense.set("wutime",showTime());
								expense.save();
	    					},
	    					error:function(object,error){
	    						alert("失败");
	    					}
	    				});	    				
	    			},
	    			error:function(error){
	    				alert("zhaoshujuchucuo");
	    			}
	    		})
	    	}else if($('#page2 h1').html()=="水费缴纳"){
	    		query.equalTo("username",payname);
	    		query.find({
	    			success:function(results){
	    				query.get(results[results.length-1].id,{
	    					success:function(expense){
	    						expense.set("water",$("#paymoney").val());
	    						expense.set("watime",showTime());
								expense.save();
	    					},
	    					error:function(object,error){
	    						alert("失败");
	    					}
	    				});	    				
	    			},
	    			error:function(error){
	    				alert("zhaoshujuchucuo");
	    			}
	    		})
	    	}else if($('#page2 h1').html()=="电费缴纳"){
	    		query.equalTo("username",payname);
	    		query.find({
	    			success:function(results){
	    				query.get(results[results.length-1].id,{
	    					success:function(expense){
	    						expense.set("electricity",$("#paymoney").val());
	    						expense.set("eltime",showTime());
								expense.save();
	    					},
	    					error:function(object,error){
	    						alert("失败");
	    					}
	    				});	    				
	    			},
	    			error:function(error){
	    				alert("zhaoshujuchucuo");
	    			}
	    		})
	    	}else{
	    		query.equalTo("username",payname);
	    		query.find({
	    			success:function(results){
	    				query.get(results[results.length-1].id,{
	    					success:function(expense){
	    						expense.set("gas",$("#paymoney").val());
	    						expense.set("gatime",showTime());
								expense.save();
	    					},
	    					error:function(object,error){
	    						alert("失败");
	    					}
	    				});	    				
	    			},
	    			error:function(error){
	    				alert("zhaoshujuchucuo");
	    			}
	    		})
	    	}

	    }
	//测试数据
	    $("#jiaofei").click(function(){
	    	baocun();
	    })
        /*如何关联expense和user的表*/        
})