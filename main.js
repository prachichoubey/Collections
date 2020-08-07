//animate smooth scroll

$('#view').on('click', function(){
    const images= $('$image').position().top;

    $('hmtl, body').animate({
        scrollTop: images
    }, 900);
});