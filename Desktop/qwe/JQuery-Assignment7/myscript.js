						
$(document).ready(function()
{

	  $("td").mouseenter(function()													//Method to highlight cell of table with dotted border when mounseenter in its region 
	  {
			  $(this).css("border-style","dotted");
	  });

	  $("td").mouseleave(function()
	  {													//to make the cell's border as it was by default when mouseleave from its region
			  $(this).css("border-style","solid");
			  $(this).css("border-color","white");
	  });
  
		$("td").click(function()
		{
				  var put_colour=$("input[type='radio'][name='color']:checked").val();  		//takes the value from radio button				
				  if(put_colour==undefined)																	// if radio button is unchecked it means its value would be undefined
				  {
					   alert("Please select colour from Radio Button");
				  }
				  else																								// else if it is checked 			
				  {
					  if($(this).css("background-color")=="rgb(255, 0, 0)"||$(this).css("background-color")=="rgb(0, 255, 0)"||$(this).css("background-color")=="rgb(0, 0, 255)")
					{
					  alert("It is already coloured");														//check either cell is colour then show it is already coloured					
					}
					else
					{
					  $(this).css("background-color",put_colour);										// if not then put colour on the cell of table
					}
				  }
		});
	   
	    $("#shufflebtn").click(function( ){																//on click shuffle button
			var loc = [];																						   //
			var colorClass = [];	
			
			while(loc.length < 9)
			{
				var newLoc=(Math.floor(Math.random() * 9) + 1);											// random number is generated between 1-9
				if(loc.indexOf(newLoc)==-1)
				{																										// unique random number is added to class loc
					loc[loc.length]=newLoc;
				}
			}
			
			jQuery.each($("td"),function(index,value)
			{
				var numberOnCell=parseInt($(value).html());												//parsing string value into integer of cell of table
				
				colorClass[numberOnCell-1]=$(value).css("background-color");												
			});
						
			jQuery.each($("td"),function(index, value)												//it is setting the colour to the random number as it was earlier
			{
				var numberWeAreSetting=loc[index];
				var colorWeAreSetting=colorClass[numberWeAreSetting-1];
				
				$(value).html(numberWeAreSetting);
				if(colorWeAreSetting)
				{
					$(value).css("background-color",colorWeAreSetting);
				}
			});
			return false;
	});
	   
	   
	   $("#resetbtn").click(function( ){																					//it reset the whole grid to default colour and number in sequence			
			jQuery.each($("td"),function(index, value){
				$(value).css("background-color","#ccc");
				$(value).html(index+1);
			});	
		});
});


