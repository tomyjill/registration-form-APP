$(document).ready(function(){
    $('#submit').attr('disabled', true);

    // $('#datepicker').datepicker();
    $("#firstName").focusout(function(){
        const firstNameInputValue = $(this).val();
        const hasNumber = /\d/;
        if(firstNameInputValue ==''){
            $(this).addClass('is-invalid');
            $("#error_firstName").text("* Enter your first name!");
        } else if(firstNameInputValue.length < 3){
            $(this).addClass('is-invalid');   
            $("#error_firstName").text("* First name should contain at least 3 characters!");
        } else if(hasNumber.test(firstNameInputValue) == true){
            $(this).addClass('is-invalid');    
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
            $("#error_lastName").text("* Enter your last name!");
        } else if(lastNameInputValue.length < 3 ){
            $(this).addClass('is-invalid');
            $("#error_lastName").text("* Last name should contain at least 3 characters!");
        } else if(hasNumber.test(lastNameInputValue) == true){
            $(this).addClass('is-invalid');
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
        const emailIsValid = /\S+@\S+\.\S+/.test(emailInputValue)
        if (emailInputValue == '') {
            $(this).addClass('is-invalid');
            $("#error_email").text("* Enter your email!");
        } else if(emailInputValue.length < 5) {
            $(this).addClass('is-invalid');
            $("#error_email").text("* Email should contain at least 5 characters!");
        } else if(emailIsValid == false) {
            $(this).addClass('is-invalid');
            $("#error_email").text("* Enter a valid email!");
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
            $("#error_pwd").text("* Enter your password!");
        } else if(pwdInputValue.length < 6) {   
            $(this).addClass('is-invalid');
            $("#pwdHelp").removeClass('text-muted');
            $("#pwdHelp").addClass('text-danger');
        } else if(hasNumber.test(pwdInputValue) == false) {
            $(this).addClass('is-invalid');
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
            $("#error_datepicker").text("* Enter your date of birth!");
        } else {
            $(this).addClass('is-valid');
            $(this).removeClass('is-invalid');
            $('#submit').attr('disabled',false);
            $("#error_datepicker").text("");
        }
   });
   $("#submit").on('click', function() {
       const isValidClasses = $(document).find('.is-valid');
       const isInvalidClasses = $(document).find('.is-invalid');
       const firstName = document.getElementById("firstName").value;
       const lastName = document.getElementById("lastName").value;
       console.log(isInvalidClasses.length);
    if (isValidClasses.length < 5 || isInvalidClasses.length !== 0 ) {
        alert('Please fill in the form correctly!');   
    } else if (isValidClasses.length == 5 && isInvalidClasses.length == 0) {
        $('#submit').attr('disabled', false);
        alert("Thank you " + firstName + ' ' + lastName);
    }
   });
});
