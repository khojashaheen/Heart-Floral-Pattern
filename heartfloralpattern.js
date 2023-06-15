function setup() {
	createCanvas(windowWidth, windowHeight);
}
let angleInDegrees = 0,angleInDegrees_2=0;
let x=0;
let y=0;
let x_2=0;
let y_2=0;
let r=255
let g=0
let b=0
function draw() {
	var size=15
	
	translate(windowWidth/2,windowHeight/2)
	
	//Right Side
	push(); // Start a new drawing state
	rotate(-PI*3/4)
	var angle= radians(angleInDegrees % 405);
	rotate(angle);
	fill(r,g,b);
	circle(x,y,size)
	pop(); // Restore original state
	
	//Left Side
	push(); // Start a new drawing state
	rotate(-PI*7/4)
	var angle2= radians((angleInDegrees_2) % 405);
	rotate(angle2);
	fill(r,g,b);
	circle(x_2,y_2,size)
	pop(); // Restore original state
	
	angleInDegrees +=1;
	angleInDegrees_2 -=1;
	x= (x+1)%180
	y= (y+1)%180
	x_2= (x_2-1)%180
	y_2= (y_2-1)%180
	
	//Change colours dynamically
	r-=0.2
	g+=0.25
	b+=0.5
}