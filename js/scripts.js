$(document).ready(function(){
	
	
	
	/***
	FILTER HEIGHT 
	***/
	
	//get window height
	var winHeight;
	var filterPad = 10;
	var topPad = 50;
	var newHeight;
	//set the height of the filter panel	
	$(".filter").height(getWinHeight());	
	
	//on window resize, set the height of the filter panel	
	$(window).resize(function(){
		$(".filter").height(getWinHeight());
		//reset the width only when it's open
		if ($(".filter").hasClass("open")){
			$(".filter").innerWidth(getFilterWidth("open"));
		}
	});
	
	function getWinHeight(){
		if($(".filter").hasClass('closed')){
			winHeight = $(window).innerHeight();
			newHeight = winHeight - (topPad);			
		}
		else{
			winHeight = $(window).innerHeight();
			newHeight = winHeight - (filterPad + topPad);
		}
		return newHeight;
	}
	
	/***
	FILTER WIDTH 
	***/
	
	function getFilterWidth(filterState){
		//get filter container
		var filter = $(".filter-container");
		//get filter width
		var filterWidth = filter.innerWidth();
		//get window width
		var windowWidth = $(window).innerWidth();
		//calculate filter width % of total window width
		var widthRatio = filterWidth / windowWidth;		
		switch(filterState){
			case "open": filterWidth = windowWidth * widthRatio;
			break;
			case "closed": filterWidth = 40;
			break;
			default: filterWidth = 40;
		}
		return filterWidth;
	}
	
	/***
	FILTER BEHAVIOR 
	***/
	
	//on click, toggle classes on the panel container
	$(".filter-btn, .filter-label").click(function(){
		//open on click
		if($(this).parent().hasClass('closed')){
			//remove .closed and add the bootstrap class col-md-3 and set to .open
			$(".filter").removeClass("closed").addClass("open");
			$(".filter-container").addClass("col-md-3");
			$(".filter-content").css("display", "block");
			//set the width of the filter
			$(".filter").css("width", getFilterWidth("open"));
			//remove the bootstrap class col-md-12 and set to col-md-9, and tweak the padding (we could do this more eleganntly I'm sure)
			$(".main").removeClass("col-md-12").addClass("col-md-9").css("padding-left", "15px");
		}
		//close on click; do the opposite of above
		else {			
			$(".filter").removeClass("open").addClass("closed");
			$(".filter-container").removeClass("col-md-3");
			$(".filter-content").css("display", "none");
			$(".main").removeClass("col-md-9").addClass("col-md-12").css("padding-left", "55px");			
			//set the width of the filter
			$(".filter").css("width", getFilterWidth("closed"));
		}
	});
	
/*	$(window).resize(function(){
  	$('.filter-panel').innerWidth( $(window).innerWidth * $('.filter-container').innerWidth / $(window).innerWidth);
	})
*/		
});