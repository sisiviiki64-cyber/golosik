$(document).ready(function(){



  $("#intro h3").delay(1000).queue(function(n){

    $(this).toggleClass("fuller")

    n()

  })



  $("#intro a").delay(1400).queue(function(n){

    $(this).toggleClass("fuller2")

    n()

  })



   $("#intro a").hover(function(){

     $("#button-overlay").toggleClass("loader")

     $("#button-container a").toggleClass("loader2")

   })



   $("#menu-button").hover(function(){

     $("#menu-button").toggleClass("hover-animation")

     $("#menu-button").toggleClass("hover-color")

   })



   $('#nav-container ul li a').hover(function(){

  $('#nav-container ul li a').toggleClass('nav-animate');

  $(this).toggleClass('nav-animate')

    /* $(this).toggleClass('nav-shadow') */

});



  $("#menu-button").click(function (){

    $("#intro h3").toggleClass("fuller")

  

    $("#intro a").toggleClass('fuller2')



    $("#menu-button").toggleClass("animate")

    $("#menu-overlay").toggleClass("reveal")

    $("#menu-button").toggleClass("change-color")

    $("#menu-button").hover(function(){

      $("#menu-button").toggleClass('hover-color')

      $("#menu-button").toggleClass('hover-color2')

    })

    $("#nav-container").delay(200).queue(function(n){

      $(this).toggleClass("hidden")

      n()

    })

    $("#nav1").delay(400).queue(function(n){

      $(this).toggleClass("hidden")

      n()

    })



    $("#nav2").delay(600).queue(function(n){

      $(this).toggleClass("hidden")

      n()

    })



    $("#nav3").delay(800).queue(function(n){

      $(this).toggleClass("hidden")

      n()

    })

  })



})

