/*
*
*@author: Vaibhav Sarwade
*
*/
/**
 * 
 */

$(document).ready(function() 
{
	$(".projectNames").click(function()
	{
		var type = $(this).find("h1").text();
		$("#myModalLabel").text(type);
		var AllData = $("."+type+"Pannel").html();
		$(".myModalBody").text('');
		$(".myModalBody").append(AllData);
		$("#MyModal").modal('show');
		
	});
	////////////All close functions
	$('.close').click(function() 
	{
		$("#MyModal").modal('hide');
	});
	
});
