$(document).ready(function(){

	var slider = tns({
		container: '.header-slider-active',
		items: 1,
		slideBy: 'page',
		autoplay: true,
		nav: true,
		navPosition: 'bottom',
		mouseDrag: true,
		controls: true,
		controlsText: ['<i class="fas fa-angle-right"></i>' , '<i class="fas fa-angle-left"></i>']
	});
	
	
	
	
	//blog-slider
	
	var slider = tns({
		container: '.blog-slider-active',
		items: 2,
		slideBy: 'page',
		autoplay: true,
		nav: true,
		mouseDrag: true,
		controls: false,
		navPosition: 'bottom',
		responsiveClass: true,
		responsive: {
		  0: {
			gutter: 20,
			items: 1
		  },	  
		  700: {
			items:1
		  },
		  1169: {
			items: 2
		  }
		}
	});
	
	
	//client-slider 
	
	var slider = tns({
		container: '.client-slider-active',
		items: 5,
		slideBy: 'page',
		autoplay: true,
		nav: true,
		navPosition: 'bottom',
		mouseDrag: true,
		controls: true,
		controlsText: ['<i class="fas fa-angle-right"></i>' , '<i class="fas fa-angle-left"></i>'],
		responsiveClass: true,
		responsive: {
		  0: {
			gutter: 20,
			items: 1
		  },
		  540: {
			items: 2
		  },
		  768: {
			items: 3
		  },
		  1169: {
			items: 4
		  }
		}
	});
	
	
	//story-slider
	
	var slider = tns({
		container: '.story-slider-active',
		items: 2,
		slideBy: 'page',
		autoplay: true,
		nav: true,
		mouseDrag: true,
		controls: false,
		navPosition: 'bottom',
		responsiveClass: true,
		responsive: {
		  0: {
			gutter: 20,
			items: 1
		  },
		  700: {
			items:1
		  },
		  1169: {
			items: 2
		  }
		}
	});
	
	
	// menu

    jQuery('#mean-menu').meanmenu({
        meanMenuContainer: '.responsive-menu',
        meanScreenWidth: "992"
    });
	
	
})