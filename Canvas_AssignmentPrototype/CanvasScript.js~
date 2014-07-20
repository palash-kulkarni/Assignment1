		var Equation=
		{
			constructor:function(x_Cof,y_Cof,constant)
			{
				
				this.x_Cof=x_Cof;
				this.y_Cof=y_Cof;
				this.constant=constant;
			},
			callDrawLine:function()
			{
				Graph.drawLine();
			}
		}
		var Equation_Parsing=																				//Object Equation_parsing have a method parsing to parse equation
		{
        	parsing:function()
		  	{
				equation=document.getElementById("eq").value;
				Equation.x_Cof=parseInt(equation);															//cofficient of x
				Equation.y_Cof=parseInt(equation.substring(equation.indexOf("x")+1,equation.indexOf("y")));  //cofficient of y
				Equation.constant=parseInt(equation.substring(equation.indexOf("=")+1));						//storing the constant value
				Equation.callDrawLine();															//callDrawLine is called which is the member of Equation object 
		  	} 
		}
		var Canvas=function()																				//Canvas method is used here to initialize canvas with its axis
		{			 
			var canvas=document.getElementById('mycanvas');
		   var context=canvas.getContext('2d');
		   context.translate(canvas.width/2, canvas.height/2);									//origin is translated
		   context.scale(1, -1);																			
		   context.beginPath();
			context.moveTo(0,300);
			context.lineTo(0,-300);
			context.moveTo(300,0);
			context.lineTo(-300,0);
			context.stroke();
			Equation_Parsing.parsing();															//parsing is called which is member of Equation_parsing object 
		}
		var Graph=																						//method to draw line of linear equation
		{
			drawLine:function()
			{
				var canvas=document.getElementById('mycanvas');
				var context=canvas.getContext('2d');
				var steps=parseInt(document.getElementById("steps").value);						//getting the steps from user
				var startPoint=parseInt(document.getElementById("start").value);				//getting the starting point from user
				var endPoint=parseInt(document.getElementById("end").value);					//getting the ending point from user
				var y;
				var x=startPoint;
				x*=10;
				while(x<=endPoint)
				{
					y=(-1*(((Equation.x_Cof*x)-(Equation.constant))/(Equation.y_Cof)))*10;					//finding the starting point co-ordinate
					context.moveTo(x,y);	
					x=(x+steps);
					if(x<=endPoint)
					{
						y=(-1*(((Equation.x_Cof*x)-(Equation.constant))/(Equation.y_Cof)))*10;				//finding the next coming co-ordinate
						context.lineTo(x,y);
						context.stroke();		
						context.moveTo(x,y);	   									//plotting the line of equation
					}
				}
				
			},
			resetCanvas:function()													//reset Canvas on click reset button
			{
				location.reload();
			}
		}
   	
