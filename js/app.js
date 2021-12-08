$('.second-section').waypoint(function(direction){
    if(direction == 'down'){
        $('nav').addClass('sticky');
    } else{
        $('nav').removeClass('sticky');
    }
},{
    offset: '101%'
});

$('.second-section').waypoint(function(direction){
    if(direction == 'down'){
        $('.home-item').removeClass('active');
        $('.feature-item').addClass('active');
    } else{
        $('.home-item').addClass('active')
        $('.feature-item').removeClass('active');
    }
});

$('.gallery').waypoint(function(direction){
    if(direction == 'down'){
        $('.feature-item').removeClass('active')
        $('.gallery-item').addClass('active');
    } else{
        $('.feature-item').addClass('active')
        $('.gallery-item').removeClass('active');
    }
},{
    offset: '30%'
});

$('.navbar-icon').click(function(){
    $('.toggle-icon').toggleClass('feather-menu').toggleClass('feather-x')
})

/* ---------- Animation ---------- */

$('.second-section').waypoint(function(direction){
    $('.animate-second-section-header').addClass('animate__animated animate__fadeInLeft');
    $('.animate-features-box').addClass('animate__animated animate__fadeInBottomRight')
},{
    offset: '70%'
});

/* ---------- Counter ---------- */
$('.clients-count').counterUp({
    delay: 10,
    time: 1500
});

$('.venobox').venobox();