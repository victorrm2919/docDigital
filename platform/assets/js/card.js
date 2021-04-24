// 4: VISA, 51 -> 55: MasterCard, 36-38-39: DinersClub, 34-37: American Express, 65: Discover, 5019: dankort


$(function () {
  const cards = [{
      name: "mastercard",
      colorCard: "#464646",
      src: "assets/img/card/mc.svg"
    },
    {
      name: "visa",
      colorCard: "#0061A8",
      src: "assets/img/card/visa.png"
    },
    {
      name: "americanExpress",
      colorCard: "#049372",
      src: "assets/img/card/amEx.svg"
    },
    {
      name: "default",
      colorCard: "#cacaca",
      src: "assets/img/card/default.svg"
    }

  ];

  let month = 0;
  let html = document.getElementsByTagName('html')[0];
  let number = "";

  let selected_card = -1;

  $(document).click(function (e) {
    if (!$(e.target).is(".ccv") || !$(e.target).closest(".ccv").length) {
      $(".cardCredit").css("transform", "rotatey(0deg)");
      $(".seccode").css("color", "var(--text-color)");
    }
    if (!$(e.target).is(".expire") || !$(e.target).closest(".expire").length) {
      $(".date_value").css("color", "var(--text-color)");
    }
    if (!$(e.target).is(".number") || !$(e.target).closest(".number").length) {
      $(".card_number").css("color", "var(--text-color)");
    }
    if (!$(e.target).is(".inputname") || !$(e.target).closest(".inputname").length) {
      $(".fullname").css("color", "var(--text-color)");
    }
  });


  //Card number input
  $(".number").keyup(function (event) {
    $(".card_number").text($(this).val());
    number = $(this).val();

    if (parseInt(number.substring(0, 2)) > 49 && parseInt(number.substring(0, 2)) < 56) {
      selected_card = 0; /* MasterCard */
    } else if (parseInt(number.substring(0, 1)) == 4) {
      selected_card = 1; /* Visa */
    } else if (parseInt(number.substring(0, 2)) == 34 || parseInt(number.substring(0, 2)) == 37) {
      selected_card = 2; /*AmericanExpress */
    } else {
      selected_card = -1;
    }

    if (selected_card != -1) {
      html.setAttribute("style", "--card-color: " + cards[selected_card].colorCard);
      $(".bankid").attr("src", cards[selected_card].src).show();
      $(".bankid").attr("data-name", cards[selected_card].name).show();
    } else {
      html.setAttribute("style", "--card-color: #cecece");
      $(".bankid").attr("src", "assets/img/card/default.svg");
      $(".bankid").attr("data-name", "default");
    }

    if (selected_card == 2) {
      $('.ccv').attr('maxlength', '4');
      $('.ccv').val('')
      $('.seccode').html('&#x25CF;');
    } else {
      $('.ccv').attr('maxlength', '3');

    }

    if ($(this).val().length === 0) {
      $(".card_number").html("&#x25CF;&#x25CF;&#x25CF;&#x25CF; &#x25CF;&#x25CF;&#x25CF;&#x25CF; &#x25CF;&#x25CF;&#x25CF;&#x25CF; &#x25CF;&#x25CF;&#x25CF;&#x25CF;");
    }

  }).focus(function () {
    $(".card_number").css("color", "white");
  }).on("keydown input", function () {
    if ($(this).val().length >= 1) {
      $(".card_number").text($(this).val());

      if (event.key >= 0 && event.key <= 9) {
        if ($(this).val().length === 4 || $(this).val().length === 9 || $(this).val().length === 14) {
          $(this).val($(this).val() + " ");
        }
      }
    }

  })



  //Name Input
  $(".inputname").keyup(function () {
    $(".fullname").text($(this).val());
    if ($(".inputname").val().length === 0) {
      $(".fullname").text("NOMBRE COMPLETO TITULAR");
    }
    return event.charCode;
  }).focus(function () {
    $(".fullname").css("color", "white");
  });

  //Security code Input
  $(".ccv").focus(function () {
    $(".cardCredit").css("transform", "rotatey(180deg)");
    $(".seccode").css("color", "white");
  }).keyup(function () {
    $(".seccode").text($(this).val());
    if ($(this).val().length === 0) {
      $(".seccode").html("&#x25CF;&#x25CF;&#x25CF;");
    }
  }).focusout(function () {
    $(".cardCredit").css("transform", "rotatey(0deg)");
    $(".seccode").css("color", "var(--text-color)");
  });


  //Date expire input
  $(".expire").keypress(function (event) {
    if (event.charCode >= 48 && event.charCode <= 57) {
      if ($(this).val().length === 1) {
        if (event.key > '2') {
          $(this).val($(this).val() + "2 / ");
        } else {
          $(this).val($(this).val() + event.key + " / ");
        }
      } else if ($(this).val().length === 0) {
        if (event.key == 1 || event.key == 0) {
          month = event.key;
          return event.charCode;
        } else {
          $(this).val(0 + event.key + " / ");
        }
      } else if ($(this).val().length > 2 && $(this).val().length < 9) {
        return event.charCode;
      }
    }
    return false;
  }).keyup(function (event) {
    if ($(this).val().length !== 0) {
      $(".date_value").html($(this).val());
      if (event.keyCode == 8 && $(".expire").val().length == 4) {
        $(this).val(month);
        $(".date_value").html($(this).val());
      }
    }
  }).keydown(function () {
    if ($(this).val().length !== 0) {
      $(".date_value").html($(this).val());
    }
  }).focus(function () {
    $(".date_value").css("color", "white");
  }).focusout(function () {
    if ($(this).val().length === 0) {
      $(".date_value").text("MM / YYYY");
    }
  });
});