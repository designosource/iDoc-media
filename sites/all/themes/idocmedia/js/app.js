$( document ).ready(function() {

	$(window).scroll(function () {
		//console.log($(".skip-link").offset().top);
		//
		var d = $(this).scrollTop();
		console.log($(this).scrollTop());
		if(d > 950){
			$("section.block.block-menu.block-menu-menu-idoc-menu").addClass("top-bar");
			$(".baar").addClass("fixed");
		}else{
			$("section.block.block-menu.block-menu-menu-idoc-menu").removeClass("top-bar");
			$(".baar").removeClass("fixed");
		}
	});

	

});