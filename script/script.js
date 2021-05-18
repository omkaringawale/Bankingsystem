$(document).ready(function(){
    $("#carouselExampleCaptions").carousel( { interval: 1000 } ); 
       $("#carouselButton").on ("click",function(){
               if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                   $("#carouselExampleCaptions").carousel("pause");
                   $("#carouselButton").children("span").removeClass('fa-pause');
                   $("#carouselButton").children("span").addClass('fa-play');
               }
               else if ($("#carouselButton").children("span").hasClass('fa-play')){
                   $("#carouselExampleCaptions").carousel('cycle');
                   $("#carouselButton").children("span").removeClass('fa-play');
                   $("#carouselButton").children("span").addClass('fa-pause');                    
               }
           
           });
        });        