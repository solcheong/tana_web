var $window;

var responsive={
	parallax: function(){
		var n=0;
		var t=0;
		var pos=0;
		var h=0;
		var $wrapper=$(".wrapper > *");
		var $controller=$(".controller > li");

	$window.resize(function(){
			h=$(window).height();
			$("#start").css({height:h});
		});

		$window.trigger("resize");

		$window.scroll(function(){
			t=$window.scrollTop();

			if(t >= $("#start").offset().top && t < $("#service").offset().top-200){
				n=0;
			}
			else if(t >= $("#service").offset().top && t < $("#portfolio").offset().top-200){
				n=1;
				$("#service").addClass("active");
			}
			else if(t >= $("#portfolio").offset().top && t < $("#about").offset().top-200){
				n=2;
				$("#portfolio").addClass("active");
			}
			else if(t >= $("#about").offset().top && t < $("#team").offset().top-200){
				n=3;
				$("#about").addClass("active");
			}
			else if(t >= $("#team").offset().top && t < $("#contact").offset().top-200){
				n=4;
				$("#team").addClass("active");

				if($(document).height() == t+$(window).height()){
					n=5;
				}
			}
			else{
				n=5;
			}
			$wrapper.removeClass("active");
			$wrapper.eq(n).addClass("active");
			$controller.removeClass("on");
			$controller.eq(n).addClass("on");
		});
		$window.trigger("scroll");

		$controller.click(function(e){
			e.preventDefault();
			n=$(this).index();
			pos=$wrapper.eq(n).offset().top;
			$("html").animate({scrollTop:pos}, 300);
		});
	},
	botton: function(){
		$(".top_btn").click(function(e){
			e.preventDefault();
			$("html").animate({scrollTop:0}, 400, function(){
				$(window).scrollTop(0);
			});
		});
	},
	menu: function(){
		$(".tab").click(function(e){
			e.preventDefault();
			$("body").addClass("static");
			$("#mobile").addClass("active");
			$(".tab").removeClass("active");
			$(".close").addClass("active");
		});
		$(".close").click(function(){
			$("body").removeClass("static");
			$("#mobile, .dim").removeClass("active");
			$(".tab").removeClass("active");
			$(".close").removeClass("active");
		});
	}
}
