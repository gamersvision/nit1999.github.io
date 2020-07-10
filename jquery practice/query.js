//----------------------hide and show--------------
/*
$('document').ready(function (){
  $('#hide').click(function (){
    $('h2').hide(1000);
  });
});
$('document').ready(function (){
  $('#show').click(function (){
    $('h2').show();
    //$(selector).hide(speed,callback);
  });
});

*/
//-----------OR-------------
$(document).ready(function(){
  $("#hide").click(function(){
    $("h2").toggle(1000);
    //$(selector).toggle(speed,callback);
    //fadeIn(speed,callback) -hide element
    //fadeOut -show element
    //$(selector).fadeTo(speed,opacity,callback);
  });
});
//--------------------slide to hide and show---------
$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
    //slideUp- upward move
    //slideDown - downward move
    //
  });
});
//------------------animation---------------------
$(document).ready(function(){
  $("#anime").click(function(){
    var div = $(".animate");
    div.animate({height: '300px', opacity: '0.4'}, "slow");
    div.animate({width: '300px', opacity: '0.8'}, "slow");
    div.animate({height: '100px', opacity: '0.4'}, "slow");
    div.animate({width: '100px', opacity: '0.8'}, "slow");
  });
});
//****The jQuery stop() method is used to stop an animation or effect before it is finished.
//The stop() method works for all jQuery effect functions, including sliding, fading and custom animations.
//$(selector).stop(stopAll,goToEnd);

//--------------------without callback----------
$(document).ready(function(){
  $("#withoutCB").click(function(){
    $(".para").hide(1000);
    alert("The paragraph is now hidden");
  });
});
//-----------------apply css property------------
$('.cssProp').css("backgroundColor","red").slideUp(230).slideDown(300);



//------------------------get and set content---------
//text() - Sets or returns the text content of selected elements
//    $("#test1").text("Hello world!");
//html() - Sets or returns the content of selected elements (including HTML markup)
//$("#test2").html("<b>Hello world!</b>");
//val() - Sets or returns the value of form fields
$(document).ready(function (){
  $('#valGet').click(function (){
    var k=$('#valInput').val();
     $('h3').text(k);
  });
});
//----------get attributes----
$(document).ready(function(){
  $("#attr").click(function(){
    alert($("#w3s").attr("value"));
  });
});
//---------------------------
