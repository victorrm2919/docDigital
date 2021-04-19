$(function () {
    $('.navigation ul a, .homeB').on("click", function (e) {
        const href = $(this).attr("href");
        let navbar  = $('.navbar').innerHeight();  //mide la altura de un elemento html
        let navig  = $('#navigation').innerHeight();

        let rPx = navbar - navig


        $("html, body").animate({ scrollTop: $(href).offset().top - rPx}, 500);
      });

    $('.preDef').click(function (e) { 
        e.preventDefault();
    });


});