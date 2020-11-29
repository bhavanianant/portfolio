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
			// Replace this section with your own Information Overlay script
			// set endpoint and your access key
			// var ip = 'check'
			var ip = window.location.hostname;
			console.log(ip);
			// var ip = 'check'
			var access_key = '9afb075be9a6b1d15b410f8b6478545b';

			// get the API result via jQuery.ajax
			$.ajax({
				url: 'http://api.ipstack.com/' + ip + '?access_key=' + access_key,   
				dataType: 'jsonp',
				success: function(json) {

					// output the "capital" object inside "location"
					alert(json.ip);
					
				}
			});
		})();
	}
})();