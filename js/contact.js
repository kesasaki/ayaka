(function () {
    $(function () {
        return $('.contact-form').validate({
            showErrors: function(errorMap, errorList) {
                $("#alert-message").removeClass('none');
                setTimeout(function(){
                    $("#alert-message").addClass('none');
                }, 5500);
            },
            onfocusout: false,
            onclick: false,
            onkeyup: false,
            debug: true,
            submitHandler: function (e) {
                var btn_submit, form;
                form = $(e);
                btn_submit = form.find('button[type=submit]');
                return $.ajax({
                    url: "https://script.google.com/macros/s/AKfycbyCvla1iuYy1RFTqxNYfZbYZqPxWmyaZY3UM3dIUdy3qBffzSwI/exec",
                    dataType: 'jsonp',
                    data: form.serialize(),
                    beforeSend: function () {
                        return btn_submit.attr('disabled', true);
                    },
                    complete: function () {
                        $("#contact-modal-close").trigger('click');
                        return btn_submit.attr('disabled', false);
                    },
                    success: function (response) {
                        $(".contact-reset").trigger('click');
                        return console.log(response);
                    },
                    error: function (response) {
                        return console.log(response);
                    }
                });
            }
        });
    });
}.call(this));

$(function(){
    $('#contact-modal-close').on('change', function() {
        if(this.checked) {
            $("#alert-message").addClass('none');
        }
    });
});
