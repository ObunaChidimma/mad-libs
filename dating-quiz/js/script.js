$(document).ready(function () {
    $('.form').submit(function (e) {
        e.preventDefault()
    })
    $('.form1').submit(function () {
        $('.form1').slideUp();
        $('.form2').slideDown();
    })
    $('.form2').submit(function () {
        $('.form2').slideUp();
        $('.form3').slideDown();
    })
    $('.form3').submit(function () {
        $('.form3').slideUp();
        $('.form4').slideDown();
    })
    $('.form4').submit(function () {
        $('.form4').slideUp();
        $('.result').slideDown();
        const eye = $(`input:radio[name='eye']:checked`).val();
        const hobbie = $(`input:radio[name='hobbies']:checked`).val();
        const skin = $(`input:radio[name='skin']:checked`).val();
        const food = $(`input:radio[name='food']:checked`).val();

        if (eye === '4' && hobbie === '1' && skin === '1' && food === '2') {
            $('.match1').show();
        } else if (eye === '2' && hobbie === '1' && skin === '3' && food === '4') {
            $('.match2').show();
        } else if (eye === '4' && hobbie === '2' && skin === '4' && food === '3') {
            $('.match4').show();
        } else if (eye === '3' && hobbie === '4' && skin === '2' && food === '3') {
            $('.match3').show();
        } else if (eye === '1' && hobbie === '3' && skin === '4' && food === '2') {
            $('.match2').show();
        } else if (eye === '4' && hobbie === '3' && skin === '3' && food === '2') {
            $('.match3').show();
        }  else if (eye === '4' && hobbie === '2' && skin === '3' && food === '2') {
            $('.match1').show();
        } else if (eye === '2' && hobbie === '3' && skin === '1' && food === '2') {
            $('.match4').show();
        }else if (eye === '2' && hobbie === '2' && skin === '1' && food === '4') {
            $('.match1').show();
        } else {
            $('.match2').show();
        }
    });

    $('.button').click(function () {
        $('.result').slideUp();
        $('.match').slideUp();
        $('.for').slideUp();
        $('.form1').slideDown();
    })
});

