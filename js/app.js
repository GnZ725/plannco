$(document).ready(function(){

  // start back to top
  $('.btn-backtotops').hide();
  $(window).scroll(function(){
    let getscrolltop = $(this).scrollTop();
    // console.log(getscrolltop);
    if(getscrolltop >=370){
      $(".btn-backtotops").fadeIn(1000);

     
    }else{
       $(".btn-backtotops").fadeOut(1000);
    }

  });


  // end back to top
  
  // Start header
  // Start nav
  $(".navbuttons").click(function(){
    $(".navbuttons").toggleClass("crossxs");
  });

  // for navbar

  $(window).scroll(function(){

    let getscrolltop =$(this).scrollTop();
    console.log(getscrolltop);
    if(getscrolltop >= 200){
      $(".navbar").addClass("navmenus");
    }else{
    $(".navbar").removeClass("navmenus");
    }
  });

  // End nav
  // End header

  // Start Property

  // for active items
  $(".propertylist").click(function(){

    $(this).addClass("activeitems").siblings().removeClass("activeitems");

    // for filter
    let getattvalue = $(this).attr("data-filter");
    // console.log(getattvalue); 

    if(getattvalue === "all"){
      $(".filters").show("slide",1000);
    }else{
      $(".filters").hide();
      $(".filters").not("."+getattvalue).hide("slide",1000);
      $(".filters").filter("."+getattvalue).show("slide",1000);    
    }
  });

  // for image overlay (or) lightbox2

  lightbox.option({
    showImageNumberLabel:false
  });


  // End Property

// start adv section

  $(window).scroll(function(){
    let getscrolltop = $(this).scrollTop();

        // console.log(getscrolltop);
    if(getscrolltop>=900){
      $(".advimages").addClass("fromlefts");
      $(".advtexts").addClass("fromrights");
    }else{
       $(".advimages").removeClass("fromlefts");
      $(".advtexts").removeClass("fromrights");
    }

  })

// end adv section


// start footer section

const getyear = $("#getyear");
const getfullyear = new Date().getUTCFullYear();
getyear.text(getfullyear);

// end footer section

});




