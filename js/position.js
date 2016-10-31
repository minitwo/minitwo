$(document).ready(function(){
	var n=0;
	var next=0;
	var t=setInterval(move,2000);
	var flag=true;
	function move(type){
		var type=type||'right';
		if(!flag){
			return;
		}
		flag=false;
		if(type=='right'){
			next=n+1;
			if(next>$('.imgs img').length-1){
				next=0;
			}
		}else if(type=='left'){
			next=n-1;
			if(next<0){
				next=$('.imgs img').length-1;
			}	
		}
		console.log(n)
		$('.imgs img').eq(n).animate({opacity:0})
		$('.imgs img').eq(next).animate({'opacity':1},function(){
			flag=true;
		})
		n=next;
	}
	$('.imgs img').hover(function(){
		clearInterval(t)
	},function(){
		t=setInterval(move,2000)
	})
	$('.left-an').click(function(){
		move('left');
	})
	$('.right-an').click(function(){
		move('right');
	})
})
