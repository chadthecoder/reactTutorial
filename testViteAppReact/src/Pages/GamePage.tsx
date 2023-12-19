import Header from "../Components/Header";
import '../css/GamePage.css';

function GamePage() {

//let display = false;
let gameWidth;
let gameHeight;
let bestTime = 100;
let shapeId, gameId;
let shapeNumber = Math.random();
let start = new Date().getTime(), end, time;

function changeShape()
	{
    gameId = document.getElementById('game');
    shapeId = document.getElementById('shape');
		console.log('change shape start');
    console.log(gameId);
		
		gameWidth = gameId!.clientWidth;
		gameHeight = gameId!.clientHeight;
		
  shapeNumber = Math.random();

		if(Math.random() < 0.5) // circle
		{
			shapeId!.style.borderRadius = "50%";
			const size = Math.floor(Math.random() * 400) + 10+"px";
			shapeId!.style.width = size;
			shapeId!.style.height = size;
		}
		else if(shapeNumber >= 0.5) //square ish
		{
			shapeId!.style.borderRadius = "0%";
			shapeId!.style.width = Math.floor(Math.random() * 400) + 10+"px";
		 	shapeId!.style.height = Math.floor(Math.random() * 400) + 10+"px";
		}
		//else //triangle not done
		{
			//shapeId.style.width = 0;
   			//shapeId.style.height = 0;
   			//shapeId.borderWidth = "0 150 150 150"; //150px solid transparent;
			//shapeId.borderStyle = "solid";
			//shapeId.borderColor = "rgba(201, 76, 76, 0), rgba(0,0,0,0), rgba(0,0,0,1), rgba(0,0,0,0)"

   //shapeId.style.borderRadius = "0%";
			//shapeId.style.width = Math.floor(Math.random() * 400) + 10+"px";
		 //shapeId.style.height = Math.floor(Math.random() * 400) + 10+"px";
		
		}
	
	 shapeId!.style.marginTop = Math.floor(Math.random() * gameHeight)+"px"; // - document.getElementById("shape").style.height+"px";
		shapeId!.style.marginLeft = Math.floor(Math.random() * gameWidth)+"px";

		let color = "#"+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
		if(color == "#FFFFFF")
		{
			color = "#0000FF";
		}	
		shapeId!.style.backgroundColor = color;

	shapeId!.style.display = "block";
	start = new Date().getTime();
}

function appearDelay()
	{
	setTimeout(changeShape, Math.random()*2000);
	}

function goodbye()
{
  shapeId = document.getElementById('shape');
	end = new Date().getTime();
	time = (end - start)/1000;
	if(time < bestTime) bestTime = time;
	shapeId!.style.display = "none";

	document.getElementById("time")!.innerHTML = "The time taken was: " + time + "s";
	document.getElementById("best")!.innerHTML = "The best time so far was: " + bestTime + "s";

	appearDelay();
}

//set the inital shape and color of the object
appearDelay();

  return (
    <div>
        <Header />

          <h1 id="time">Tap the Shape!!!</h1>
          <h2 id="best">How fast can you tap the shape?</h2>


          <div id="game">
            <div id='shape' onClick={goodbye}></div>
          </div>
    </div> 
  )
}

export default GamePage