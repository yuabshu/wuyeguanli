window.onload=function(){
	var opt = {
        preset: 'date', //日期
        theme: 'android-ics light', //皮肤样式
        display: 'modal', //显示方式 
        mode: 'clickpick', //日期选择模式
        dateFormat: 'yy-mm-dd', // 日期格式
        setText: '确定', //确认按钮名称
        cancelText: '取消',//取消按钮名籍我
        dateOrder: 'yymmdd', //面板中日期排列格式
        dayText: '日',
        monthText: '月', 
        yearText: '年', //面板中年月日文字
        endYear:2020 //结束年份
    };
    
    $('input:jqmData(role="datebox")').mobiscroll(opt).date(opt);
    /*报修投诉的切换*/
        $('#bao').click(function(){
                $('#theT').css("display","none");
                $('#theB').css("display","block");
            })
        $('#tou').click(function(){
                $('#theT').css("display","block");
                $('#theB').css("display","none");
            });
        /*切换完成*/
}