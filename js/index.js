$(document).ready(function(){
  
  $("#3js").click(function(){window..open('index3.html','_blank');});
  
  $(".projectNames").click(function(){var type=$(this).find("h1").text();$("#myModalLabel").text(type);var AllData=$("."+type+"Pannel").html();$(".myModalBody").text('');$(".myModalBody").append(AllData);$("#MyModal").modal('show')});$('.close').click(function(){$("#MyModal").modal('hide')});$(window).scroll(function()
{if($(this).scrollTop()>=$('.section').position().top){console.log($(this).attr("id"))}
var nav=$(".navbar");if($(this).scrollTop()>=50)
{(nav.hasClass('smallNavBar'))?(nav.removeClass('smallNavBar'),nav.removeClass('navbar-default'),nav.addClass('navbar-inverse'),nav.addClass('bigNavBar')):nav.addClass('bigNavBar');$('#return-to-top').fadeIn(200)}else{nav.addClass('navbar-default');nav.removeClass('navbar-inverse');nav.addClass('smallNavBar');$('#return-to-top').fadeOut(200)}});$('#return-to-top').click(function(){$('body,html').animate({scrollTop:0},500)})})
