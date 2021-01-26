$('.owl-carousel').owlCarousel({
    items:1,
    loop:true,
    margin:10,
    nav:true,
    navText:['', '']
})

$("body").on('click', '[href*="#"]', function(e){
    $.scrollTo($(this.hash), 800);
});
