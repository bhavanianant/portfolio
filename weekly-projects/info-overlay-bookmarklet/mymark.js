// $(document).ready(function() {
// 	// $('circle').css({
// 	// 	'position': 'fixed',
// 	// 	'bottom': '1vw',
// 	// 	'right': '1vw',
// 	// 	'height': '15px',
// 	// 	'width': '15px',
// 	// 	'background-color': '#555',
// 	// 	'border-radius': '50%'
// 	// });
// 	$("<style>")
// 		.prop("type", "text/css")
// 		.html("\
// 		.circle {\
// 			position: fixed;\
// 			bottom: 1vw;\
// 			right: 1vw;\
// 			height: 15px;\
// 			width: 15px;\
// 			background-color: #555;\
// 			border-radius: 50%;\
// 	    }")
// 	    .appendTo("head");

// 	var flags = [];

// 	// var pos = Math.random() * 10;
// 	// var colors = ["red", "#0d0c1f","#fe4333","#831e11", "#B71C1C", "#0e3708"];
// 	// var color = Math.floor(Math.random() * colors.length);

// 	// var $new_dot = $("<div class='circle' style='background-color: " + colors[color] + "; bottom: " + pos + "vw;'></div>");
// 	var $new_dot = $("<div class='circle'></div>");
// 	$("body").append($new_dot);
// });

(function(){
	// This part checks for jQuery
	var version = "1.10.2";
	// Checks for prior inclusion and version
	if (window.jQuery === undefined || window.jQuery.fn.jquery < version) {
		// If there isn't an instance of jQuery, create one and append it to the head
		// Else run our bookmarklet!
		var done = false;
		var script = document.createElement("script");
		script.src = "https://ajax.googleapis.com/ajax/libs/jquery/" + version + "/jquery.min.js";
		script.onload = script.onreadystatechange = function(){
			if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				done = true;
				initBookmarklet(window.jQuery);
			}
			else {
				console.log('error loading');
			}
		};
		document.getElementsByTagName("head")[0].appendChild(script);
		if (window.jQuery === undefined || window.jQuery.fn.jquery < version) {
			console.log(':::');
		}
		else {
			console.log('jquery loaded');
		}
	} else {
		initBookmarklet(window.jQuery);
	}
	function initBookmarklet($) {
		(window.bookmarklet = function() {
			$("<style>")
				.prop("type", "text/css")
				.html("\
				.circle {\
					position: fixed;\
					bottom: 1vw;\
					right: 1vw;\
					height: 1.5vw;\
					width: 1.5vw;\
					background-color: #555;\
					border-radius: 50%;\
					z-index: 100;\
			    }")
				.appendTo("head");
			$("div").remove(".circle");
			
			var url = window.location.hostname;
			//just for local UX testing
			// var url = "yale.instructure.com";
			var access_key = '9afb075be9a6b1d15b410f8b6478545b';
			
			if(window.location.hostname.split('.').pop() === 'edu'){
				lowGrayDot();
				console.log("Detected .edu hostname.");
			}
			// console.log(window.location.origin.split(':').pop());
			$.ajax({
				url: 'http://api.ipstack.com/' + url + '?access_key=' + access_key,   
				dataType: 'jsonp',
				success: function(json) {

					// output the "capital" object inside "location"
					//timezone not supported free
					if(json.latitude > 0){
						randomMaroonDot();
						console.log("Detected northern hemisphere host ip.");
					} else{
						randomGreenDot();
						console.log("Detected southern hemisphere host ip.");
					}
					
				}
			});
			$.ajax({
				url: 'http://api.ipstack.com/' + 'check' + '?access_key=' + access_key,   
				dataType: 'jsonp',
				success: function(json) {

					// output the "capital" object inside "location"
					//timezone not supported free
					if(json.country_code === 'US'){
						randomBlueDot();
						console.log("Detected user is in the US.");
					} else{
						console.log("Didn't detect user in US. Country code is " + json.country_code);
					}
					
					
				}
			});
			if($("img").length > 5){
				biglPinkDot();
				console.log("Alot of images on this page");
			} else{
				smalllPinkDot();
				console.log("Not many images on this page");
			}
			if($("div").length > 8){
				highPinkDot();
				console.log("Alot of divs on this page");
			} else{
				lowPinkDot();
				console.log("Not many divs on this page");
			}

			function lowGrayDot(){
				var $new_dot = $("<div class='circle' style='bottom: .5vw;'></div>");
				$("body").append($new_dot);
			}
			function randomMaroonDot(){
				var pos = Math.random() * 8;
				var $new_dot = $("<div class='circle' style='background-color: #831e11; bottom: " + pos + "vw;'></div>");
				$("body").append($new_dot);
			}
			function randomGreenDot(){
				var pos = Math.random() * 8;
				var $new_dot = $("<div class='circle' style='background-color: #0e3708; bottom: " + pos + "vw;'></div>");
				$("body").append($new_dot);
			}
			function randomBlueDot(){
				var pos = Math.random() * 8;
				var $new_dot = $("<div class='circle' style='background-color: #1e1c40; bottom: " + pos + "vw;'></div>");
				$("body").append($new_dot);
			}
			function biglPinkDot(){
				var $new_dot = $("<div class='circle' style='background-color: #e46158; width: 2vw; height: 2vw; right: .75vw;'></div>");
				$("body").append($new_dot);
			}
			function smalllPinkDot(){
				var $new_dot = $("<div class='circle' style='background-color: #e46158; width: 1vw; height: 1vw; right: 1.27vw;'></div>");
				$("body").append($new_dot);
			}
			function highPinkDot(){
				var $new_dot = $("<div class='circle' style='background-color: #E91E63; bottom: 8vw; width: 1vw; height: 1vw; right: 1.3vw;'></div>");
				$("body").append($new_dot);
			}
			function lowPinkDot(){
				var $new_dot = $("<div class='circle' style='background-color: #E91E63; bottom: 2vw;'></div>");
				$("body").append($new_dot);
			}

		})();
	}
})();