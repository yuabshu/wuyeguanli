$(function(){
	Bmob.initialize("6b4140fafe82ea45c3a2111f6447f5cc","109bb0d6635e1ac9e58d6e3220cfa38c");
	var _User=Bmob.Object.extend("_User");
	var user=new _User();
	var query = new Bmob.Query(_User);
	var users=document.cookie.split("=")[1];
	query.equalTo("username",users);
	query.find({
		success:function(results){
			var wei=results.length-1;
			var user=results[wei].get("username");
			var sex=results[wei].get("sex");
			var address=results[wei].get("address");
			var phonenum=results[wei].get("phonenum");
			//alert($("#yonghu>p:nth-child(5)").html())
			$("#fname").html(user);
			$("#phonenum").val(phonenum);
			$("#yonghu>p:nth-child(1)").html("姓名:"+user);
			$("#yonghu>p:nth-child(3)").html("性别:"+sex);
			$("#yonghu>p:nth-child(5)").html("具体住址:"+address);
			$("#yonghu>p:nth-child(7)").html("联系电话:"+phonenum);
		},
		error:function(object,error){
			alert("报错！");
		}
	})
	function xiugai(){
		Bmob.initialize("6b4140fafe82ea45c3a2111f6447f5cc","109bb0d6635e1ac9e58d6e3220cfa38c");
		var address=$("#day>option:selected").html()+$("#num>option:selected").html();
		var phnum=$("#phonenum").val();
		var username=$("#fname").html();
		

		var _User=Bmob.Object.extend("_User");
		var query = new Bmob.Query(_User);
		
		query.equalTo("username",username);
		query.find({
			success:function(results){
				query.get(results[0].id,{
					success:function(user){
						user.save({
							phonenum:phnum,
							address:address						
						})
					},
					error:function(error){
						alert("匹配用户出错"+error.code);
					}
				})
			},
			error:function(error){
				alert(error.code);
			}
		})
	}

	$(".tijiao").click(function(){

		xiugai();
		alert("修改成功，点击返回。");
		location.href="page.html";	
	})
})