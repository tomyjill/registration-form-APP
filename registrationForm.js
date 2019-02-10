$(document).ready(function(){

    // $('#datepicker').datepicker();
    $("#firstName").focusout(function(){
        const firstNameInputValue = $(this).val();
        const hasNumber = /\d/;
        if(firstNameInputValue ==''){
            $(this).addClass('is-invalid');
            $('#submit').attr('disabled',true);
            $("#error_firstName").text("* Enter your first name!");
        } else if(firstNameInputValue.length < 3){
            $(this).addClass('is-invalid');
            $('#submit').attr('disabled',true);
            $("#error_firstName").text("* First name should contain at least 3 characters!");
        } else if(hasNumber.test(firstNameInputValue) == true){
            $(this).addClass('is-invalid');
            $('#submit').attr('disabled',true);
            $("#error_firstName").text("* First name should not contain numbers!");
        } else {
            $(this).addClass('is-valid');
            $(this).removeClass('is-invalid');
            $('#submit').attr('disabled',false);
            $("#error_firstName").text("");
        }
   });
    $("#lastName").focusout(function(){
        const lastNameInputValue = $(this).val();
        const hasNumber = /\d/;
        if(lastNameInputValue =='') {
            $(this).addClass('is-invalid');
                $('#submit').attr('disabled',true);
                $("#error_lastName").text("* Enter your last name!");
        } else if(lastNameInputValue.length < 3 ){
            $(this).addClass('is-invalid');
            $('#submit').attr('disabled',true);
            $("#error_lastName").text("* Last name should contain at least 3 characters!");
        } else if(hasNumber.test(lastNameInputValue) == true){
                $(this).addClass('is-invalid');
                $('#submit').attr('disabled',true);
                $("#error_lastName").text("* Last name should not contain numbers!");
        } else {
            $(this).addClass('is-valid');
            $(this).removeClass('is-invalid');
            $('#submit').attr('disabled',false);
            $("#error_lastName").text("");
        }
   });
   $("#email").focusout(function(){
       //console.log('working'); 
        const emailInputValue = $(this).val();
        if (emailInputValue == '') {
            $(this).addClass('is-invalid');
            $('#submit').attr('disabled',true);
            $("#error_email").text("* Enter your email!");
        } else if(emailInputValue.length < 5) {
            $(this).addClass('is-invalid');
            $('#submit').attr('disabled',true);
            $("#error_email").text("* Email should contain at least 5 characters!");
        } else if(!emailInputValue.includes('@')) {
            $(this).addClass('is-invalid');
            $('#submit').attr('disabled',true);
            $("#error_email").text("* Email should contain @");
        } else if (!emailInputValue.includes('.')) {
            $(this).addClass('is-invalid');
            $('#submit').attr('disabled',true);
            $("#error_email").text("* Email should contain .");
        } else {
            $(this).addClass('is-valid');
            $(this).removeClass('is-invalid');
            $('#submit').attr('disabled',false);
            $("#error_email").text("");
        }
    });
    $("#pwd").focusout(function(){
        const pwdInputValue = $(this).val();
        const hasNumber = /\d/;
        //console.log('working');
        if(pwdInputValue =='') {
            $(this).addClass('is-invalid');
            $('#submit').attr('disabled',true);
            $("#error_pwd").text("* Enter your password!");
        } else if(pwdInputValue.length < 6) {   
            $(this).addClass('is-invalid');
            $('#submit').attr('disabled',true);
            $("#pwdHelp").removeClass('text-muted');
            $("#pwdHelp").addClass('text-danger');
        } else if(hasNumber.test(pwdInputValue) == false) {
            $(this).addClass('is-invalid');
            $('#submit').attr('disabled',true);
            $("#error_pwd").text("* Password should include numbers!");  
        } else {
            $(this).addClass('is-valid');
            $(this).removeClass('is-invalid');
            $("#pwdHelp").removeClass('text-danger');
            $('#submit').attr('disabled',false);
            $("#error_pwd").text("");
        }
    });
    $("#datepicker").focusout(function(){
        const dateInputValue = $(this).val();
        console.log(dateInputValue);
        if(dateInputValue == '') {
            $(this).addClass('is-invalid');
                $('#submit').attr('disabled',true);
                $("#error_datepicker").text("* Enter your date of birth!");
        } else {
            $(this).addClass('is-valid');
            $(this).removeClass('is-invalid');
            $('#submit').attr('disabled',false);
            $("#error_datepicker").text("");
        }
   });
   $("#submit").on('click', function(){
       console.log('working');
       alert("Thank you " + firstNameInputValue);
   });
});
