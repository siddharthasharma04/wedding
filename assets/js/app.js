$(function () {
    var body = $("html, body");
    AOS.init();
    const owl = $('#mainSlider');
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 5000,
        slideTransition:'1',
        animateOut: 'fadeOut',
        animateIn:'fadeIn'
    });
    $('#quoteCarousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 6000,
        slideTransition:'1',
        animateOut: 'bounceOutLeft',
        animateIn:'bounceInRight'
    });


    const timeCheck = () =>{
        const today = new Date();
        const mainDate = new Date('2020-02-25 19:30:00');
        const diff = new Date(mainDate - today);
        const days = (diff.getMonth() * 31) + diff.getDate();
        const hours = diff.getHours();
        const mins = diff.getMinutes();
        const sec = diff.getSeconds();
        $('#days').html(days);
        $('#hours').html(hours);
        $('#mins').html(mins);
        $('#seconds').html(sec);
    
    }

    setInterval(timeCheck,1000);

    $('#gotop').click(function(){
        body.stop().animate({scrollTop:0}, 800, 'swing');
    });
    $('.go-down').click(function(){
        body.stop().animate({
            scrollTop: $("#second-section").offset().top
        }, 800,'swing');
    });
    $(document).scroll(function(){
        
        if($(this).scrollTop()>$("#second-section").offset().top){
            $('#gotop').show();
        }else{
            $('#gotop').hide();
        }
    })
});