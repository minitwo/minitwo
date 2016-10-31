$(document).ready(function(){
$("body").click(function(event){
	        var target = $(event.target);
	        if(target.hasClass("resume")){
	            $("#bigbg").css("display","block");
	        }else{
                 $("#bigbg").css("display","none");
                 $(".jianlix").css("display","none");
                 $(".jitoux").css("display","none");
                 $(".jianli").css("display","none");
                 $(".jitou").css("display","none");
                 $(".cirx").css("display","none");
                 $(".anniux").css("display","none");
                 $(".cir").css("display","none");
                 $(".anniu").css("display","none");
                 

                 
		    }
        })
})