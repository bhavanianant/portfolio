(function(){

	var version = "1.10.2";

	if (window.jQuery === undefined || window.jQuery.fn.jquery < version) {
			var done = false;
			var script = document.createElement("script");
			script.src = "https://ajax.googleapis.com/ajax/libs/jquery/" + version + "/jquery.min.js";
			script.onload = script.onreadystatechange = function(){
					if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
							done = true;
							checkLibraries(window.jQuery);
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
	}
	else {
		checkLibraries(window.jQuery);
	}

	function checkLibraries($){
		var len = $('head > script[src*="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/p5.js"]').length;

		if (len === 0) {
			console.log('script not loaded');

			loadScript('https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/p5.js');

			if ($('script[src*="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/p5.js"]').length === 0) {
				console.log('still not loaded');
			}
			else {
				console.log('loaded now');
			}
		}
		else {
			console.log('script loaded');
		}

		var len = $('head > script[src*="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/addons/p5.dom.min.js"]').length;

		if (len === 0) {
			console.log('script not loaded');

			loadScript('https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/addons/p5.dom.min.js');

			if ($('script[src*="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/addons/p5.dom.min.js"]').length === 0) {
				console.log('still not loaded');
			}
			else {
				console.log('loaded now');
			}
		}
		else {
			console.log('script loaded');
		}


		function loadScript(scriptLocationAndName) {
			var head = document.getElementsByTagName('head')[0];
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = scriptLocationAndName;
			head.appendChild(script);
		}

	}
})();