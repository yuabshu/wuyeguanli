$(function(){
	//App返回事件
	document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady(){
        document.addEventListener("backbutton",exitApp,false);  
         }
    function exitApp(){ 
        navigator.app.exitApp(); 
    	}


    $("#name").val(document.cookie.split("=")[1]);

    //登陆验证
    function validate(){
    	Bmob.initialize("6b4140fafe82ea45c3a2111f6447f5cc","109bb0d6635e1ac9e58d6e3220cfa38c");
	    var _User=Bmob.Object.extend("_User");
	    var users=new _User();
	    var finduser=new Bmob.Query(_User);
	    var user=$("#name").val();
	    you=$("#name").val();
	    var pass=$("#password").val();

	    Bmob.User.logIn(user, pass, {
  			success: function(user) {
    			// Do stuff after successful login.
    			document.cookie="username="+$("#name").val();
                location.href="page.html";
  			},
  			error: function(user, error) {
    		// The login failed. Check error to see why.
    		alert("用户名或密码错误，请重新登录！");
  			}
		});

    }
//注册信息
    function addate(){
    	Bmob.initialize("6b4140fafe82ea45c3a2111f6447f5cc","109bb0d6635e1ac9e58d6e3220cfa38c");
		var Expense=Bmob.Object.extend("Expense");
		var _User=Bmob.Object.extend("_User");

		
    	var fname=$("#fname").val();
    	var password1=$("#password1").val();
    	var passwordag=$(".passwordag").val();
    	var text=$("#text").val();
    	var sex=$("#sex input:checked").val();
    	var address=$("#day option:selected").html()+" "+$("#num option:selected").html();

		var expense=new Expense();
		var users=new Bmob.User();


    	if(password1==passwordag){
    		users.set("phonenum",text);
	    	users.set("username",fname);
	    	users.set("sex",sex);
	    	users.set("address",address);	    	
	    	users.set("password",password1);

	    	expense.set("username",fname);
	    	users.set("parent",expense);
	    	users.signUp(null,{
	    		success:function(users){
	    			document.cookie="username="+fname;
	    			location.href="zhucetiaozhuan.html";
	    		},
	    		error:function(users,error){
	    			if(error.code==202){
	    				alert("用户名已存在，请重新设置！");
	    			}
	    		}
	    	});		
    	}else{
    		alert("前后密码不一致，请检查！");
    		return;
    	}

    }
//注册时验证密码长度
    $("#password1").blur(function(){
        var lengt=$("#password1").val().length;
        
        if(lengt<6){
                $(".warn").text("请输入至少6位数的密码！");
            }else{
                $(".warn").text("");
            }
    })

//调用登陆注册函数
    $("#login").click(function(){        
        validate();        
    })
    $("#zhuce").click(function(){            
        addate();    	
    })
})