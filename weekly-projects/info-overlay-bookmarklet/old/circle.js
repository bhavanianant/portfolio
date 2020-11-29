// function setup() {

// }

// function draw() {
// 	// if(mouseIsPressed) {
// 		 ellipse(50, 50, 80, 80);
// 	// }
// }

// function setup() {
// 	createCanvas(640, 480);
// }

// function draw() {
// 	if (mouseIsPressed) {
// 		fill(0);
// 	} else {
// 		fill(255);
// 	}
// 	ellipse(mouseX, mouseY, 80, 80);
// }

// // var img;
// // var canvas;

// // function setup() {
// //   canvas = createCanvas(400, 400);
// //   img = createImg("http://th07.deviantart.net/fs70/PRE/i/2011/260/3/5/dash_hooray_by_rainbowcrab-d49xk0d.png");

// //   img.position(190, 50);
// //   img.size(200, 200);
// //   // Attach listeners for mouse events related to img.
// //   img.mousePressed(uniHide);

// //   canvas.position(300, 50);
// // }

// // function draw() {
// //   noStroke();
// //   background(220, 180, 200);
// //   fill(180, 200, 40);
// //   strokeWeight(6);
// //   stroke(180, 100, 240);
// //   for (var i = 0; i < width; i += 15) {
// //     line(i, 0, i, height);
// //   }
// // }

// // // Create functions for hiding and showing uni image. 
// // // These will be hooked into mouse events related to canvas above.
// // function uniHide() {
// //   img.hide();
// // }

// // function uniShow() {
// //   img.show();
// // }

// // // Define global keyPressed behavior. This one doesn't need to be hooked in, it's a global listener, automatically fired on key press.
// // function keyPressed() {
// //   uniShow();
// // }

var img;
var font = 'Georgia'
var fontsize = 32

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  img = loadImage('https://bhavanianant.github.io/interactive/weekly-projects/info-overlay-bookmarklet/smiley.png');
}

function setup() {
  createCanvas(710, 400);
  image(img, 0, 0);
  filter(THRESHOLD, .9);
  updatePixels();
  loadPixels();
  fill(0);
  var gap = 52;
  	for(i = 0; i < pixels.length; i++){
		// console.log(pixels[i]);
		if(pixels[i] === 0){
			text('A', i + i * gap, 200);
			console.log('should be printing');
		}
	}

  // Set text characteristics
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
}

function draw() {
  // background(160);

  // Set the gap between letters and the left and top margin
  
  var margin = 10;
  translate(margin * 4, margin * 4);

  // Set the counter to start at the character you want
  // in this case 35, which is the # symbol
  var counter = 35;

  // // Loop as long as there is space on the canvas
  // for (y = 0; y < height - gap; y += gap) {
  //   for (x = 0; x < width - gap; x += gap) {

  //     // Use the counter to retrieve individual letters by their Unicode number
  //     var letter = char(counter);

  //     // Add different color to the vowels and other characters
  //     if (letter == 'A' || letter == 'E' || letter == 'I' || letter == 'O' || letter == 'U') {
  //       fill('#ed225d');
  //     }
  //     else {
  //       fill(255);
  //     }

  //     // Draw the letter to the screen
  //     text(letter, x, y);

  //     // Increment the counter
  //     counter++;
  //   }
  // }
  // // for (y = 0; y < height)
  	loadPixels();
  	fill(0);
  	// var d = pixelDensity();
  	// console.log(pixels.length);
	// for(i = 0; i < 4; i++){
	// 	console.log(pixels[i]);
	// 	// if(img.pixels[i] === 0){
	// 	// 	text('A', i + i * gap, 0);
	// 	// 	console.log('should be printing');
	// 	// }
	// }
	// var d = pixelDensity();
	// fill(0);
	// for (var i = 0; i < d; i++) {
	//   for (var j = 0; j < d; j++) {
	//     // loop over
	//     idx = 4 * ((0 * d + j) * width * d + (0 * d + i));
	//     if(pixels[idx] < 25){
	//     	text('A', 0, 0);
	//     	console.log('printing letter');
	//     }
	//   }
	// }
}

