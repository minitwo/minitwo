$(document).ready(function(){
	var n=0;
	var next=0;
	var flag=true;
	var  t=setInterval(move,3000);
	function move(){
		if(!flag){
			return false;
		}
		flag=false;
		next=n+1;
		if(next>=$(".bao-img img").length){
			next=0;
		}
		$(".bao-img img").eq(n).animate({opacity:0},800).end().eq(next).animate({opacity:1},800,function(){
			flag=true;
		});
		$(".banner-circle li a").eq(n).css("background", "#fff").end().eq(next).css({"background":"transparent","border":"2px solid #fff"})
		n=next;
	}
	$(".jiantou1").click(function(){
		move();
	})
	$(".jiantou").click(function(){
		if(!flag){
			return false;
		}
		flag=false;
		next=n-1;
		if(next<0){
			next=$(".bao-img img").length-1;
		}
		$(".bao-img img").eq(n).animate({opacity:0},800).end().eq(next).animate({opacity:1},800,function(){
			flag=true;
		});
		$(".banner-circle li a").eq(n).css("background", "#fff").end().eq(next).css({"background":"transparent","border":"2px solid #fff"})
		n=next;
	})
})
