canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

Ecar_width=75;
Ecar_height=100;

background_image = "parkingLot.jpg";
Ecar_image = "car2.png";

Ecar_x=5;
Ecar_y=225;

function add() {
	backgrounf_imgTag=new Image();
	backgrounf_imgTag.onload=uploadBackground();
	backgrounf_imgTag.src=background_image;

	Ecar_imgTag=new Image();
	Ecar_imgTag.onload=uploadEcar();
	Ecar_imgTag.src=Ecar_image;

}

function uploadBackground() {
	ctx.drawImage(backgrounf_imgTag,0,0,canvas.width,canvas.height);

}

function uploadEcar() {

	ctx.drawImage(Ecar_imgTag,Ecar_x,Ecar_y,Ecar_width,Ecar_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(Ecar_y>=0)
	{
		Ecar_y=Ecar_y-10;
		console.log("When up arrow is pressed, x = " + Ecar_x + "| y = "+Ecar_y);
		uploadBackground();
		uploadEcar();
	}
}

function down()
{
	if(Ecar_y>=0)
	{
		Ecar_y=Ecar_y+10;
		console.log("When down arrow is pressed, x = " + Ecar_x + "| y = "+Ecar_y);
		uploadBackground();
		uploadEcar();
	}
}

function left()
{
	if(Ecar_x>=0)
	{
		Ecar_x=Ecar_x-10;
		console.log("When left arrow is pressed, x = " + Ecar_x + "| y = "+Ecar_y);
		uploadBackground();
		uploadEcar();
	}
}

function right()
{
	if(Ecar_x>=0)
	{
		Ecar_x=Ecar_x+10;
		console.log("When right arrow is pressed, x = " + Ecar_x + "| y = "+Ecar_y);
		uploadBackground();
		uploadEcar();
	}
}
