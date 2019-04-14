const worldMap = [
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

const screenModes = [
    "screen",
    "minimap"
]
    
const floorColor = 130
const ceilingColor = 65

const stripWidth = 1;

let screenMode = screenModes[0]

let screenLines = []

let wallImages = [];
let images = [
	{url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFoElEQVR4XuVbu24UQRDcCyyQQZgAkJATIhA5IoWEDyD3J/AxhPwOkkNyECIEIZADLB4COTDqFW3V9VU/Zm/2bHyXcOJ2d2Zrqrura8aLF88enA5b/Fm8PHi03QA8f7zvAnD0+2S4dXVnePv1eLh9Y3f8PuWTPSf7XcesXsfm6N27UAD2966v3Pfp+Mfw5P7d4dXhu+Hhnb3x+5uPR8PPXydL1+q9cr18x3/1QvucD1++L12XjXNtd2cc1173+v3nszFlLDs+zo3NwQXg28kfOqBOHBGYAwAZR+cgL39z58oI2GwA6CD6YjKYfLyV2wQAMoaAIC8vn1kBUPq0AoDA9QwBYYD9zAKAlEFdbX0ZpZ7HAPwdc8f/BoDkjwUCIC+sySZKXkpHXH0FpZoENZnq9SzU5mYABcAO6k0MY1NjVbL0RQMgS6ArDKgCwFaHlSGPSYI+Xj8XA0oAKKVtZmdJhyUnvL/KAAEgmlyvJBiBfBYCWw3AwdN7p1hnsRzOzYBIpUmS1HlhaW4VQikDRAqzUhYpwZUC/U+ktOQAfMGovutY3nwyKdwMgGb3SAlaAKwuqPQCFQAquiQCwJZmxp6xF/AaISaEGDWnAIBJzmNARZd0AcD2AZgUWZfGYlNZUa0CCkBEbRZqLTlA3yMSW7QbjKSwIo6T03BpyQEXDgDb1EQCxobMOgB4uUaFUibMohBQBnhegizCGQNs+YsA8FrnVgZETLPGyxRDpBkA2wixJIgKTn7Hl0Blp3HnAWmNFSaF1zVErMALHSGWcDwAkC1TAbArXGm6Wv2AWQGQ1ZYP+oP4fxkDbIz3boaQjR4LZRHcbtArHV5ywvi33yMmRSFiWdnCgKqIurQA6CJkJd0FIMq6Xr5A2p93CLCqRqWwdIPW58cXZDcxAGzMVQGIavQ6IVAGQHsBJmYqsauTnArAXJ4gq1RhM7QuANjbtyRBD4B1/YAmAFAAyYSyxMFCYAoAkSXWEwDVAy4DWiQs2xtk8VbJAZEjZJuuVkME59QVALY3yBqpDIAWQwQVXbUdlnvsvEIGMOHAkiBuWtoEyLR7RehEhkglJL3y2wSAImZLoidRbdLEVarI0LkdIQU+C7Oldpglt6hJEbAY/XsCYOfUEgI2NzF3azIA8nC7PaassBXBCyV9uSgEpgDANm89i38tAJhSYxUhAmAOT/BSAOCV20oIYD4qH5Gxq9mi0TUcNIG2hIDnCfYCoLQ5ihkdSxs7lMQUGiKuIYA0rJTTyBLDCtXKgMkARIZItJEyBwDoNGUAsAoUvcvoB9jVylCrAGBZlR22isqtgFo9JTYJgIjCDHFri3vGKOYVVoNRdPUyRZWBuACRubPQ7XFPxnqGiN1RZsorAmAuU5SFYAgAbo7aM3kseeHErU73NED2nEwoZYLJNl5sXt4clnaHWwFg0pmVwPMAwIZ1CQB8odY9u6kh0KI3KrZ4KwtHBtikhuhVTVGt1ZKtbVWJGNDbE0QAMi0yHpLyTou3KrRoYA+AqNzaU2JVR6gLAJEnyByhjP4eAJFOt4qzBQDWooc5AOkr3zcBQGaIWACinGSrAAKQGbzN5wOYJWYBxMPXKnaizc/KKbEWALwwSA0RVj8rlpg3INrt6wCQraJlgLcgKQDYdGhctwJQ3WDJQsAepfXmY4/I6HUsD3Q5IGHt7CgB4spMYYCuZNQzeAAwPdAFALthoYciUa4iKJUDlz08QaY9Mlt85ZAUk7aVblDvs5PowQA7J88PYNK3BIC3PR6ZCEgvJp8xCW2CAcwDYKFJQ2AqAJEnUI0/1BxVyR0x0rP2ZBxm740hYP9myMZvNDFvO23TAOh4DABkKGUAs8TwgdnKYK23tItW2AqqbByvDOIfX7FEmAIgIcCSn0cbz67G+muf57nLUXmrnhTV65iGyRLoeExu2wH4C9dn3xG71HTwAAAAAElFTkSuQmCC', name: 'wall'},
];

let player = {
	x : 16,
	y : 10,
	dir : 0,		// the direction that the player is turning, either -1 for left or 1 for right.
	rot : 0,		// the current angle of rotation
	speed : 0,		// is the playing moving forward (speed = 1) or backwards (speed = -1).
	moveSpeed : 0.1,	// how far (in map units) does the player move each step/update
	rotSpeed : 3 * Math.PI / 180	// how much does the player rotate each step/update (in radians)
}

let mapWidth = worldMap[0].length;
let mapHeight = worldMap.length;

let miniMapScale = 20;

let screenWidth = 832;
let screenHeight = 520;

let fov = 60 * Math.PI / 180;

let numRays = Math.ceil(screenWidth / stripWidth);
let fovHalf = fov / 2;

let viewDist = (screenWidth/2) / Math.tan((fov / 2));

let twoPI = Math.PI * 2;

let numberOfRows; //determine the number of rows we want
let numberOfColumns; //determine the number of columns we want

let xStep; //determine the size of the gap between two points on the x axis
let yStep; //determine the size of the gap between two points on the y axis

let positions = []; //an array of positions where we will store each of our Vectors

let value = false;

function preload() {
    images.forEach(o => wallImages.push(loadImage(o.url)));
}
    
function setup() {
    
    let c = createCanvas(screenWidth, screenHeight);
    c.class("gameCanvas")
    

    let dpi = window.devicePixelRatio;
    let canvas = document.getElementById('defaultCanvas0');
    
    let ctx = canvas.getContext('2d');
    ctx.webkitImageSmoothingEnabled = false;
    ctx.mozImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false; /// future
    
    canvas.style.width = screenWidth * 2;
    canvas.style.height = screenHeight * 2;
    
	fill(255);
	
	setupGrid();

	loadWalls();
}

function loadWalls(){
	$('#walls option[value!="0"]').remove();
    images.map((w,i) => {
		$('#walls').append(`<option value="${i+1}" style="background-image:url(${w.url});" >${w.name}</option>`)
	});
}

function draw() {
    clear();

    if (keyIsDown(TAB)) {
        screenMode = screenModes[1]
    } else {
        screenMode = screenModes[0]
    }
    
    if (screenMode == screenModes[0]) {
        resetScreenDefaults()
        drawScreen()
    } else if (screenMode == screenModes[1]) {
        resetScreenDefaults()
        drawMinimap()
    }
    
	move();
	
	if (keyIsDown(TAB)){
		if (value){
			fill(255);
			let x = mouseX;
			let y = mouseY;
			let col = parseInt(x / miniMapScale);
			let row = parseInt(y / miniMapScale);
			rect(col * miniMapScale, row * miniMapScale, miniMapScale, miniMapScale);
			if(col<mapWidth && row<mapHeight && col>=0 && row>=0){
				worldMap[row][col] = $('#walls').val();
				console.log(`image: ${worldMap[row][col]}, row: ${row}, col: ${col}`);
			}
			//value=false;
		}
		drawGrid();
	}
}    

function drawScreen() {
    
    noStroke()
    fill(color(floorColor))
    rect(0,screenHeight/2, screenWidth, (screenHeight/2))
    
    fill(color(ceilingColor))
    rect(0,0, screenWidth, (screenHeight/2))
    
    
    screenLines = []
    
    //calculate values
	for (var i=0;i<numRays;i++) {
		// where on the screen does ray go through?
		var rayScreenPos = (-numRays/2 + i) * stripWidth;

		// the distance from the viewer to the point on the screen, simply Pythagoras.
		var rayViewDist = Math.sqrt(rayScreenPos*rayScreenPos + viewDist*viewDist);

		// the angle of the ray, relative to the viewing direction.
		// right triangle: a = sin(A) * c
		var rayAngle = Math.asin(rayScreenPos / rayViewDist);

		castRay(
			player.rot + rayAngle
        )
	}
    
    //render lines
    for (var i=0;i<screenWidth;i+=stripWidth) {
        
        if (screenLines[i] != undefined) {
            let lineWidth = screenLines[i][0]
            let lineHeight = screenLines[i][1]
            let lineTop = screenLines[i][2]
            let lineWallType = screenLines[i][3]
            let lineTexX = screenLines[i][4]
            
            fill(0)
            noStroke()
            
            rect(i, lineTop, stripWidth, lineHeight)
            image(wallImages[lineWallType-1], i, lineTop, stripWidth, lineHeight, (64*lineTexX)/lineWidth ,0, stripWidth, 64);
        }
    }
}

function castRay(rayAngle) {
    // first make sure the angle is between 0 and 360 degrees
	rayAngle %= twoPI;
	if (rayAngle < 0) rayAngle += twoPI;

	// moving right/left? up/down? Determined by which quadrant the angle is in.
	var right = (rayAngle > twoPI * 0.75 || rayAngle < twoPI * 0.25);
	var up = (rayAngle < 0 || rayAngle > Math.PI);

	var wallType = 0;

	// only do these once
	var angleSin = Math.sin(rayAngle);
	var angleCos = Math.cos(rayAngle);

	var dist = 0;	// the distance to the block we hit
	var xHit = 0; 	// the x and y coord of where the ray hit the block
	var yHit = 0;

	var textureX;	// the x-coord on the texture of the block, ie. what part of the texture are we going to render
	var wallX;	// the (x,y) map coords of the block
	var wallY;

	var wallIsHorizontal = false;

	// first check against the vertical map/wall lines
	// we do this by moving to the right or left edge of the block we're standing in
	// and then moving in 1 map unit steps horizontally. The amount we have to move vertically
	// is determined by the slope of the ray, which is simply defined as sin(angle) / cos(angle).

	var slope = angleSin / angleCos; 	// the slope of the straight line made by the ray
	var dXVer = right ? 1 : -1; 	// we move either 1 map unit to the left or right
	var dYVer = dXVer * slope; 	// how much to move up or down

	var x = right ? Math.ceil(player.x) : Math.floor(player.x);	// starting horizontal position, at one of the edges of the current map block
	var y = player.y + (x - player.x) * slope;			// starting vertical position. We add the small horizontal step we just made, multiplied by the slope.

	while (x >= 0 && x < mapWidth && y >= 0 && y < mapHeight) {
		var wallX = Math.floor(x + (right ? 0 : -1));
		var wallY = Math.floor(y);

		// is this point inside a wall block?
		if (worldMap[wallY][wallX] > 0) {
			var distX = x - player.x;
			var distY = y - player.y;
			dist = distX*distX + distY*distY;	// the distance from the player to this point, squared.

			wallType = worldMap[wallY][wallX]; // we'll remember the type of wall we hit for later
			textureX = y % 1;	// where exactly are we on the wall? textureX is the x coordinate on the texture that we'll use later when texturing the wall.
			if (!right) textureX = 1 - textureX; // if we're looking to the left side of the map, the texture should be reversed

			xHit = x;	// save the coordinates of the hit. We only really use these to draw the rays on minimap.
			yHit = y;

			wallIsHorizontal = true;

			break;
		}
		x += dXVer;
		y += dYVer;
	}



	// now check against horizontal lines. It's basically the same, just "turned around".
	// the only difference here is that once we hit a map block, 
	// we check if there we also found one in the earlier, vertical run. We'll know that if dist != 0.
	// If so, we only register this hit if this distance is smaller.

	var slope = angleCos / angleSin;
	var dYHor = up ? -1 : 1;
	var dXHor = dYHor * slope;
	var y = up ? Math.floor(player.y) : Math.ceil(player.y);
	var x = player.x + (y - player.y) * slope;

	while (x >= 0 && x < mapWidth && y >= 0 && y < mapHeight) {
		var wallY = Math.floor(y + (up ? -1 : 0));
		var wallX = Math.floor(x);
		if (worldMap[wallY][wallX] > 0) {
			var distX = x - player.x;
			var distY = y - player.y;
			var blockDist = distX*distX + distY*distY;
			if (!dist || blockDist < dist) {
				dist = blockDist;
				xHit = x;
				yHit = y;

				wallType = worldMap[wallY][wallX];
				textureX = x % 1;
				if (up) textureX = 1 - textureX;
			}
			break;
		}
		x += dXHor;
		y += dYHor;
	}

	if (dist) {
		//drawRay(xHit, yHit);

		dist = Math.sqrt(dist);

		// use perpendicular distance to adjust for fish eye
		// distorted_dist = correct_dist / cos(relative_angle_of_ray)
		dist = dist * Math.cos(player.rot - rayAngle);

		// now calc the position, height and width of the wall strip

		// "real" wall height in the game world is 1 unit, the distance from the player to the screen is viewDist,
		// thus the height on the screen is equal to wall_height_real * viewDist / dist

		var height = Math.round(viewDist / dist);

		// width is the same, but we have to stretch the texture to a factor of stripWidth to make it fill the strip correctly
		var width = height * stripWidth;

		// top placement is easy since everything is centered on the x-axis, so we simply move
		// it half way down the screen and then half the wall height back up.
		var top = Math.round((screenHeight - height) / 2);

        var texX = Math.round(textureX*width);

		if (texX > width - stripWidth)
			texX = width - stripWidth;
        
        screenLines.push([width, height, top, wallType, texX]);
        
	}
}
    
function resetScreenDefaults() {
    fill(255)
    stroke(0)
    strokeWeight(1)
}
    
function drawMinimap(){
    //MINIMAP BLOCKS    
    for (var y=0;y<mapHeight;y++) {
		
        for (var x=0;x<mapWidth;x++) {
			const colorValue = parseInt(worldMap[y][x] / wallImages.length * 255)
			fill(colorValue, 177 + parseInt(colorValue / 2) , 255 - colorValue);
			noStroke()
			var wall = worldMap[y][x];

			if (wall > 0) {
                
				rect(x * miniMapScale, y * miniMapScale, miniMapScale, miniMapScale)
			}
		}
	}
    
    //MINIMAP PLAYER
    fill(color("red"))
    rect(player.x * miniMapScale - 2, player.y * miniMapScale - 2, miniMapScale / 2, miniMapScale / 2)
    
    strokeWeight(2)
    stroke(color("red"));
	line(player.x * miniMapScale, player.y * miniMapScale, (player.x + Math.cos(player.rot) * 2) * miniMapScale, (player.y + Math.sin(player.rot) * 2) * miniMapScale);
	
}
    
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        player.dir = -1;
    } else if (keyCode === RIGHT_ARROW) {
        player.dir = 1;
    }
    
    if (keyCode === UP_ARROW) {
        player.speed = 1;
    } else if (keyCode === DOWN_ARROW) {
        player.speed = -1;
    }
    
    
    //Refresh Page Override
    if (keyCode === 116) {
        location.reload();
    }
    return false
}

function keyReleased() {
    if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
        player.dir = 0;
    }
    
    if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
        player.speed = 0;
    }
    
    return false
}

function move() {
	var moveStep = player.speed * player.moveSpeed;	// player will move this far along the current direction vector

	player.rot += player.dir * player.rotSpeed; // add rotation if player is rotating (player.dir != 0)

	// make sure the angle is between 0 and 360 degrees
	//while (player.rot < 0) player.rot += twoPI;
	//while (player.rot >= twoPI) player.rot -= twoPI;

	var newX = player.x + Math.cos(player.rot) * moveStep;	// calculate new player position with simple trigonometry
	var newY = player.y + Math.sin(player.rot) * moveStep;

	if (isBlocking(newX, newY)) {	// are we allowed to move to the new position?
		return; // no, bail out.
	}

	player.x = newX; // set new position
	player.y = newY;
}

function isBlocking(x,y) {

	// first make sure that we cannot move outside the boundaries of the level
	if (y < 0 || y >= mapHeight || x < 0 || x >= mapWidth)
		return true;

	// return true if the map block is not 0, ie. if there is a blocking wall.
	return (worldMap[Math.floor(y)][Math.floor(x)] != 0); 
}

function setupGrid(){
	let numberOfColumns = worldMap[0].length;
	let numberOfRows = worldMap.length;
	let width = miniMapScale * (numberOfColumns + 1);
	let height = miniMapScale * (numberOfRows + 1);
	
	xStep = miniMapScale;//Scalewidth/numberOfColumns; //to make sure they are evenly spaced, we divide the width and height by numberOfColumns
	yStep = miniMapScale;//Scaleheight/numberOfRows; //and numberOfRows respectively
	
	for(var x = 0; x < width; x += xStep){ //start at the first column, where x = 0
	
	  for(var y = 0; y < height; y += yStep){ //go through all the rows (y = 0, y = yStep * 1, y  = yStep * 2, etc.)
	  
		var p = createVector(x, y); //we create a vector at this location
		
		positions.push(p); // and then we put the vector into the array
		
	  }
	  //at the end of the inner for loop, we go back to the first loop, and we increment x
	  //now our column is going to be x = xStep*1, and we populate all the rows with the inner for loop
	  //and again, and again until x > width
	}
}

function drawGrid(){
	fill(250, 100, 100); //pink is cool

	for(var i = 0; i < positions.length; i++){ //go through all our positions
		ellipse(positions[i].x, positions[i].y, 1, 1); //put a circle at each of them
	}
}


function mousePressed() {
	value = true;
  }

  function mouseReleased() {
	value = false;
  }

// Prevent Default TAB
document.addEventListener("keydown", function(e) {
        if (e.keyCode == 9) {
            e.preventDefault();
        }
}, false);

// Prevent Default TAB
document.getElementById('newIamge').addEventListener("change", function(e) {
	showimagepreview(this);
}, false);

function showimagepreview(input) { //image preview after select image
	if (input.files && input.files[0]) {
	  var filerdr = new FileReader();
  
	  filerdr.onload = function(e) {
		var img = new Image();
  
		img.onload = function() {
		  var canvas = document.createElement('canvas');
		  var ctx = canvas.getContext('2d');
		  canvas.width = 64;
		  canvas.height = 64;
		  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  
		  var data = canvas.toDataURL('image/png');
		
		  wallImages.push(loadImage(data));
		  images.push({url: data, name: input.files[0].name});
		  loadWalls();
		}
		img.src = e.target.result;
	  }
	  filerdr.readAsDataURL(input.files[0]);
	}
  }