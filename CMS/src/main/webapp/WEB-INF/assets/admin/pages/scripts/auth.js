var AuthPage = function() {

    var handleLogin = function() {
        $("#login-form").validate({
            errorElement: 'span',
            errorClass: 'help-block',
            focusInvalid: false,
            rules: {
                username: {
                    required: true
                },
                password: {
                    required: true
                }
            },
            highlight: function(element) {
                $(element).closest('.form-group').addClass('has-error');
            },
            unhighlight: function (element) {
                $(element).closest('.form-group').removeClass('has-error');
            },
            success: function(label) {
                label.closest('.form-group').removeClass('has-error');
                label.remove();
            },
            errorPlacement: function(error, element) {
                error.insertAfter(element.closest('.input-group'));
            }
        });
    };

    var handleForgotPassword = function() {
        $("#forgot-form").validate({
            errorElement: 'span',
            errorClass: 'help-block',
            focusInvalid: false,
            rules: {
                email: {
                    required: true,
                    email: true
                }
            },
            highlight: function(element) {
                $(element).closest('.form-group').addClass('has-error');
            },
            unhighlight: function (element) {
                $(element).closest('.form-group').removeClass('has-error');
            },
            success: function(label) {
                label.closest('.form-group').removeClass('has-error');
                label.remove();
            },
            errorPlacement: function(error, element) {
                error.insertAfter(element.closest('.input-group'));
            }
        });
    };

    var initDatePicker = function() {
        $('.date-picker').datepicker({
            autoclose: true
        });
    };

    var handleRegister = function() {
        $("#forgot-form").validate({
            errorElement: 'span',
            errorClass: 'help-block',
            focusInvalid: false,
            rules: {
                fullname: {
                    required: true,
                    maxlength: 255
                },
                identity: {
                    required: true
                },
                gender: {
                    required: true
                },
                dob: {
                    required: true
                },
                address: {
                    required: true
                },
                phone: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                email_confirmation: {
                    required: true,
                    equalTo: 'input[name="email"]'
                }
            },
            messages: {
                email_confirmation: {
                    equalTo: 'This field must be same with Email field.'
                }
            },
            highlight: function(element) {
                $(element).closest('.form-group').addClass('has-error');
            },
            unhighlight: function (element) {
                $(element).closest('.form-group').removeClass('has-error');
            },
            success: function(label) {
                label.closest('.form-group').removeClass('has-error');
                label.remove();
            }
        });
    };

    return {
        login: function() {
            handleLogin();
        },
        forgotPassword: function() {
            handleForgotPassword();
        },
        register: function() {
            initDatePicker();
            handleRegister();
        }
    };

}();