<script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.12.4.min.js"></script>
$(document).ready(function($) {
	alert("js is working");

function addListItem (){
 var text = $("#new-text").val();
 $('#todolist').append(<li>test</li>);

}
$(function(){
  $("#add").onclick(addListItem);

});
