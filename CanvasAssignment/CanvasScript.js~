		var xCof;
		var yCof;
		var constant;
		function parseEquation()												//to find cofficients of equation
		{
          var equation=document.getElementById("eq").value;
          xCof=parseInt(equation);											//cofficient of x
          yCof=parseInt(equation.substring(equation.indexOf("x")+1,equation.indexOf("y")));     //cofficient of y
          constant=parseInt(equation.substring(equation.indexOf("=")+1));						//storing the constant value
             
          drawLine();
   	}
   	function drawLine()														//method to draw line of linear equation
   	{
   		 var steps=parseInt(document.getElementById("steps").value);			//getting the steps from user
			 var startPoint=parseInt(document.getElementById("start").value);		//getting the starting point from user
			 var endPoint=parseInt(document.getElementById("end").value);			//getting the ending point from user
			 var y;
		    var x=startPoint;
		    x*=10;
 		
			while(x<=endPoint)
			{
				y=(-1*(((xCof*x)-(constant))/(yCof)))*10;					//finding the starting point co-ordinate
			   context.moveTo(x,y);	
				x=(x+steps);
				if(x<=endPoint)
				{
					y=(-1*(((xCof*x)-(constant))/(yCof)))*10;				//finding the next coming co-ordinate
					context.lineTo(x,y);
			   	context.stroke();		
			   	context.moveTo(x,y);	   									//plotting the line of equation
				}
			}
   
   	}
   	function resetCanvas()													//reset Canvas on click reset button
   	{
   		location.reload();
   	}
