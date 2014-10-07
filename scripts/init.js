$("#menu-icon").on('click', function(){
  $(".inner-nav").toggle();
});

$(window).on('resize', function(){
  if($(window).width() > 992){
    $(".inner-nav").show();
  }
  else{
    $(".inner-nav").hide();
  }
});