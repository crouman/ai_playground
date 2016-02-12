window.onload = function(){	
	Chart.defaults.global.responsive = true;

	//BAR CHART
	var barHeight = $("#bar-chart").parents(".panel").height() - 30;
	var barWidth = $("#bar-chart").parents(".panel").innerWidth() - 30;
	
	$("#bar-chart").attr("height", barHeight);
	$("#bar-chart").attr("width", barWidth);
	
	var barChart = document.getElementById("bar-chart").getContext("2d");	
	window.myBar = new Chart(barChart).Bar(barChartData, {
		responsive: true
	});
	
	$(window).resize(function(){		
		newWidth = $(window).innerWidth() - 102;
		$("#bar-chart").attr("width", newWidth);
		$("#bar-chart").css("width", newWidth);
	})
	
	
	//LINE CHART
	var lineHeight = $("#line-chart").parents(".panel").height() - 30;
	var lineWidth = $("#line-chart").parents(".panel").width() - 30;
	
	$("#line-chart").attr("height", lineHeight);
	$("#line-chart").attr("width", lineWidth);
	
	var lineChart = document.getElementById("line-chart").getContext("2d");	
	window.myLine = new Chart(lineChart).Line(lineChartData, {
		responsive: true
	});
	
	$(window).resize(function(){			
		var winWidth = $(window).innerWidth();
		var newLineWidth = lineWidth/winWidth;

		$("#line-chart").attr("width", newLineWidth);
		$("#line-chart").css("width", newLineWidth);
	})
}