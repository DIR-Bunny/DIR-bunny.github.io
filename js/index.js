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

// ===== Scroll to Top ==== 
	$(window).scroll(function() {
	    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
		$('#return-to-top').fadeIn(200);    // Fade in the arrow
	    } else {
		$('#return-to-top').fadeOut(200);   // Else fade out the arrow
	    }
	});
	$('#return-to-top').click(function() {      // When arrow is clicked
	    $('body,html').animate({
		scrollTop : 0                       // Scroll to top of body
	    }, 500);
	});
