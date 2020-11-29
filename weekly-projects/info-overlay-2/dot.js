$(document).ready(function() {
// // Arrays
// var myImageArray = ["alpha.png", "beta.png", "gamma.png", "delta.png", "six.png"];
// var myTextArray = ["frogs", "apples", "oranges", "snails", "horses", "houses", "office supplies"];
// // HTML Elements
// var imageContainer = document.getElementById('something'); // plain JS
// var textContainer = $('#text'); // jQuery
// // Function to randomly select a string from "myImageArray"
// function updateImage() {
// // i = Math.floor(Math.random() * myImageArray.length);
// // imageContainer.src = myImageArray[i]; //plain JS
// // console.log("Image: " + i);
// 		i = Math.floor(Math.random() * 12);
// 		j = Math.floor(Math.random() * 9);
// imageContainer.src = i + "_" + j + ".jpg"; //plain JS
// console.log("Image: " + i);
// };
// // Function to randomly select a string from "myTextArray"
// function updateText() {
// i = Math.floor(Math.random() * myTextArray.length);
// textContainer.html(myTextArray[i]); // jQuery
// console.log("Text: " + i);
// };
// var miaImageArray = ["diamonds", "rubies", "emeralds"];
// var miaSpeedArray = ["400", "300", "2000"];
// // Use random number for both arrays to determine image and duration onscreen
// // function mia() {
// // 	i = Math.floor(Math.random() * miaImageArray.length);
// // 	speed = miaSpeedArray[i];
// // 	textContainer.html(miaImageArray[i]); // jQuery
// // 	window.setTimeout(mia, speed);
// // };
// // mia();
// // Execute randomizer functions with delay
// setInterval(function() {
// 		updateImage();
// 		// updateText();
// }, delay);
	var pos = Math.random() * 10;
	var colors = ["red", "#0d0c1f","#fe4333","#831e11", "#B71C1C", "#0e3708"];
	var color = Math.floor(Math.random() * colors.length);

	var $new_dot = $("<div class='circle' style='background-color: " + colors[color] + "; bottom: " + pos + "vw;'></div>");
	$("body").append($new_dot);
});