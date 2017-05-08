$(function(){
	
		Bmob.initialize("370a79a45a6dc441aeec58205c6dbe7e","39337fcec2aa778eefcdc85425a2c227");
		var _User=Bmob.Object.extend("_User");
		var user=new _User();
		user.set();
		user.set();
		user.set();
		user.save({
			username:"杨正清",
			password:"111111",
			phonenum:"111111",
			address:"三单元 406"
		},{
			success:function(user){
				alert("数据存储成功！");
			},
			error:function(user,error){
				alert(error.code);
			}
		})
})