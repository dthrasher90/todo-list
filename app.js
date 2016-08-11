$(document).ready(function($) {
	alert("js is working");

function addListItem (){
 var text = $("#new-text").val();
 $('#todolist').append("<li>"+text+"</li>");

}
$(function(){
  $("#add").click(addListItem);

});
});
