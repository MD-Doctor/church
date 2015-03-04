

//fadeIn homepage title//

$(document).ready(function () {
     $(".churchName").fadeIn(4000); 
   });



//fadeIn fadeOut picture show//

$(document).ready(function()
{
    $('.img:gt(0)').hide();
    setInterval(function() {
       $(".img:first-child").fadeOut(3000).next(".img").fadeIn(3000).end().appendTo("#slideshow")
}, 4000);
      
});


//Accordion//

$(function() {
    $( "#accordion" ).accordion({
       heightStyle: "content"
    });
  });

$(function() {
    $( "#accordion" ).accordion({
      collapsible: true
    });
  });


function showbig(pic) {
    document.getElementById("life1").src = pic;
}


function showbig2(pic) {
    document.getElementById("life2").src = pic;
}

function showbig3(pic) {
    document.getElementById("life3").src = pic;
}

function showbig4(pic) {
    document.getElementById("life4").src = pic;
}



//Highlight current navigation link//

$(function() {
     var loc = window.location.href.substr(window.location.href
.lastIndexOf("/")+1);
     $("#nav").each(function(){
          if($(this).attr("href") == loc || $(this).attr("href") == '' )
          $(this).addClass("active");
     })
});





