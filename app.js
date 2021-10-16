$(function () {
    console.log("Let's get ready to party with jQuery!");

$('article img').addClass('image-center')

$('article p:last-child').remove()

$('#title').css('font-size', Math.random() * 100);

$('<li>Puppies!</li>').appendTo('ol');

$('aside').empty().append($('<p>' , {text: 'So sorry for that!'}))

$(".form-control").on('keyup blur change', function () {
    let red = $(".form-control").eq(0).val();
    let blue = $(".form-control").eq(1).val();
    let green = $(".form-control").eq(2).val();
    $("body").css("background-color",
        "rgb(" + red + "," + green + "," + blue + ")");
  });

$('img').on('click', function (e) {
    $(e.target).remove
    });
});

