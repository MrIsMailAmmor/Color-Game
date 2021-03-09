var numOfSquares = 6;
var colors = generateRandomColor(numOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


for (var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Facile" ? numOfSquares = 3: numOfSquares = 6;
		reset();
	});
}

function reset () {
	colors = generateRandomColor(numOfSquares);
	//pick a new random colors
	pickedColor = pickColor();
	// change colors display to match picked color
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textDisplay = "New Colors";
	//change square's colors
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]){
		squares[i].style.display ="block";
		squares[i].style.backgroundColor = colors[i];
		
	}else {
		squares[i].style.display = "none";
	}
}
	messageDisplay.textContent = "";
}


/*easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numOfSquares = 3;
	colors = generateRandomColor(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
for (var i = 0; i < squares.length; i++) {
	if (colors[i]) {
		squares[i].style.backgroundColor = colors[i];
	} else {
		squares[i].style.display = "none";
	}
	messageDisplay.textContent = "";
}	
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numOfSquares = 6;
	colors = generateRandomColor(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	
	
	*/
	
	

resetButton.addEventListener("click", function () {
	//generate new colors
	colors = generateRandomColor(numOfSquares);
	//pick a new random colors
	pickedColor = pickColor();
	// change colors display to match picked color
	colorDisplay.textContent = pickedColor;
	//change square's colors
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		h1.style.backgroundColor = "steelblue";
		messageDisplay.textContent = "";
		this.textContent = "Nouveau Jeu";
}
});

colorDisplay.textContent = pickedColor;



for (var i = 0; i < squares.length; i++) {
	
	squares[i].style.backgroundColor = colors[i];
	
	squares[i].addEventListener("click", function(){
		
		var clickedColor = this.style.backgroundColor;
		
		if(clickedColor === pickedColor){
			
			messageDisplay.textContent ="C'est la bonne couleur !";
			changeColors(clickedColor);
			h1.style.backgroundColor = pickedColor;
			resetButton.textContent = "Rejouer ?";
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Essayer une autre fois";
			
		}
	});
}


function changeColors (color) {
	for(var i = 0; i < colors.length; i++){
		squares[i].style.backgroundColor = color;
	}

}
function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor (num) {
	//make an array
	var arr = [];
	//add num random colros to array
	for (var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor () {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	
	return "rgb(" + r + ", " + g + ", " + b + ")";
}









