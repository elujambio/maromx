var menu_opened = false; 



function open_menu() {
	TweenMax.to(".tb__layer-2", .15, {
		y: -7
	}); 
	TweenMax.to(".tb__layer-2", .15, {
		y: -14, 
		delay:  .15
	}); 
	TweenMax.to(".tb__layer-1", .15, {
		y: -7, 
		delay:  .15
	}, "-=.15"); 
	TweenMax.to(".tb__layer-1", .3, {
		delay:  .3,
		rotationZ: -135, 
	}); 
	TweenMax.to(".tb__layer-2", .3, {
		delay:  .3,
		rotationZ: 135, 
	}); 
	TweenMax.to(".menu__clip", .8, {
		maxWidth:  "100%", 
		pointerEvents:  "all",
		delay:  .15
	});
	TweenMax.staggerFromTo(".menu__link", 1, 
		{
			color: "#2d2b6d",

		}, {
			color:  "#ffffff"
		}, .1); 
	menu_opened = true; 
}

function close_menu() {
	TweenMax.to(".tb__layer-1", .3, {
		rotationZ: 0, 
	}); 
	TweenMax.to(".tb__layer-2", .3, {
		rotationZ: 0, 
	}); 
	TweenMax.to(".tb__layer-2", .15, {
		y: -7,
		delay:  .15
	}); 
	TweenMax.to(".tb__layer-2", .15, {
		y: 0, 
		delay:  .3
	}); 
	TweenMax.to(".tb__layer-1", .15, {
		y: 0, 
		delay:  .3
	}, "-=.15"); 

	TweenMax.to(".menu__clip", .8, {
		maxWidth:  "0%", 
		pointerEvents:  "none"
	}); 
	menu_opened = false; 
} 

function listeners() {
	console.log("initialize listeners"); 
	$(document).on("click", function(event){
		console.log(event.target); 
		if ($(event.target).hasClass("navigation__trigger")){
			if ( menu_opened == false ) {
				open_menu(); 
			} else {
				close_menu(); 
			}
		}
	});

	// $(".menu__link").on("mouseover click touchstart", function(){
	// 	TweenMax.to($(this).find(".strike"), .3, {
	// 		width:  "calc(100% + 36px)"
	// 	});
	// }); 
	
}



function initialize_navigation(){

}