function getWindowHeight() {
	var height = window.innerHeight;
	return height;
}

function getWindowWidth() {
	var width = window.innerWidth;
	return width;
}

function getPos(ball) {
	var posRect = ball.getBoundingClientRect();
	return posRect;
}