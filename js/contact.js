(function () {
    $(function () {
        return $('.contact-form').validate({
            highlight: function(element, errorClass) {
                $(element).addClass(errorClass)
            },
            unhighlight: function(element, errorClass) {
                $(element).removeClass(errorClass);
            },
            errorPlacement: function(error,element){
                return true;
            },
            debug: true,
            submitHandler: function (e) {
                var btn_submit, form;
                form = $(e);
                btn_submit = form.find('button[type=submit]');
                return $.ajax({
                    url: "https://script.google.com/macros/s/AKfycbxmV5-DIf1N-U0SjG1L9ynumE1wMe4xJWiOT8pkfSpPq9UvJp4t/exec",
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
