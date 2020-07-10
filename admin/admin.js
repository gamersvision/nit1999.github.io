$("li").click(function (){
  $(this).toggleClass("completed");
});
//delete
$("span").click(function (event){
//  $(this).parent().remove();
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation();
});
//var name=document.querySelector("#name");
//var pass=document.querySelector("#pass");
$('document').ready(function (){


$('#submit').click(function (){
  var name=$('#Name').val();

  var pass=$('#pass').val();
//  $("h1").text(name);
//  $("ul").append("<li>"+name + pass+"</li>")
$('#table1').find('tbody').append($('<tr>').append($('<td>'+name+ '</td>')).append($('<td>'+pass+ '</td>')).append('<a>'+delete+'</a>'));
});
});
