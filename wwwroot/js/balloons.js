$(function () {
    $('#birthday').pickadate({ format: 'mmmm, d' });
    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });
    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible');
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
         $('#' + this.id + 'Img').removeClass().addClass('animated bounceInDown') :
         $('#' + this.id + 'Img').addClass('animated bounceOutUp');
    });

    // randomize the h1 animation

    var animateList = [
        "bounce", "flash", "pulse", "rubberBand", "shake", "swing", "tada", "wobble", "jello", "heartbeat"
    ];
    var animateRand = Math.floor(Math.random() * 10);
    var animation = animateList[animateRand];

    $('h1.animated').addClass(animation);

    // create toast if submit with no balloons checked

    var toast = new Audio('media/toast.wav');

    $('#submit').on('click',function (e) {
        e.preventDefault();
        var ck_box = $('input[type="checkbox"]:checked').length;

        if (ck_box === 0) {
            toast.pause();
            // reset the audio
            toast.currentTime = 0;
            // play audio
            toast.play();
            $('#toast').toast({ autohide: false }).toast('show');
        }
    });

    $(document).on('keyup', function (e) {
        if (e.key === "Escape") {
            $('#toast').toast('hide');
        }
    });

    // create toggle button that toggles checkboxes
    var toggle = false;

    $('#check').on('click',
        function () {
            if (toggle === false) {
                $('.form-check-input').each(
                    function () {
                        $(this).prop('checked', true);
                        $(this).is(':checked') ?
                            $('#' + this.id + 'Img').removeClass().addClass('animated bounceInDown') :
                            $('#' + this.id + 'Img').addClass('animated bounceOutUp');
                    });
                toggle = true;
            } else if (toggle === true) {
                $('.form-check-input').each(
                    function () {
                        $(this).prop('checked', false);
                        $(this).is(':checked') ?
                            $('#' + this.id + 'Img').removeClass().addClass('animated bounceInDown') :
                            $('#' + this.id + 'Img').addClass('animated bounceOutUp');
                    });
                toggle = false;
            }
        });

    $('.form-check-label').mouseover(function() {
        var colorH1 = $(this).data('color');
        $('h1').css('color', colorH1);
    });

    $('.form-check-label').mouseleave(function() {
        $('h1').css('color', '#708090');
    });
});
