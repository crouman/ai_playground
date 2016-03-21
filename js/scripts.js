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
			//$(".filter, .filter-container").animate({width:'25%'}, 250, function afterAnim(){
				$(".filter-container").addClass("grow-1");
				$(".filter").removeClass("closed").addClass("open");//swap classes
				$(".filter-content").fadeIn(150);//display filter content
				//$(".filter").css("width", getFilterWidth("open"))//set the width of the filter
			//});
			
		}//end if
		//close on click; do the opposite of above
		else {				
		//	$(".filter, .filter-container").animate({width:'40px'}, 250, function afterAnim(){
				$(".filter").removeClass("open").addClass("closed")
				$(".filter-container").removeAttr('style').removeClass("grow-1")
				//$(".filter").css("width", getFilterWidth("closed"))//set the width of the filter
			//	$(".main").animate({}, 0, function afterMainAnim(){//animate the main content at same time
				//	$(".main").removeAttr('style')		
				//});
			//});			
			
			$(".filter-content").fadeOut(150)
					
		}//end else
	});
	
/*	$(window).resize(function(){
  	$('.filter-panel').innerWidth( $(window).innerWidth * $('.filter-container').innerWidth / $(window).innerWidth);
	})
*/		
});