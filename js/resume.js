$(document).ready(function(){
$("body").click(function(event){
	        var target = $(event.target);
	        if(target.hasClass("resume")){
	            $("#bigbg").css("display","block");
	            $(".jianlix").css("display","block");
                 $(".jitoux").css("display","block");
                 $(".jianli").css("display","block");
                 $(".jitou").css("display","block");
                 $(".cirx").css("display","block");
                 $(".anniux").css("display","block");
                 $(".cir").css("display","block");
                 $(".anniu").css("display","block");
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