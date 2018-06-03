/*window scroll*/

$(window).scroll(function(){
    var scroll= $(this).scrollTop();

    if(scroll>200){
        $('.up').fadeIn();
    }
    else{
        $('.up').fadeOut();
    }

});

/*up arrow*/

$('.up').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});


/*click nav bar*/

$('.right li a').click(function(){
    $('html,body').animate({
        scrollTop: $('#'+ $(this).data('value')).offset().top
    },1500)
});