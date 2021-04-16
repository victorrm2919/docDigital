$(function () {
    $('.navigation ul a, .homeB').on("click", function (e) {
        const href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(href).offset().top - 100 }, 800);
      });

    $('.preDef').click(function (e) { 
        e.preventDefault();
    });


});