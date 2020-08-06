$( document ).ready(function() {
    console.log("Ready!");
    $("#loginform").submit(function(event){
        event.preventDefault();
        ajaxPost();
    });

    function ajaxPost(){
        // Prepare Form Data from web form.
        var formData = {
            email : $("#email").val(),
            upwd : $("#upwd").val()
        }
        $.ajax({ // DO AJAX POST
        type : "POST",
        contentType : "application/json",
        url : window.location + "api/login",
        data : JSON.stringify(formData),
        dataType : 'json',
        success : function(customer) {
            if (customer.valid == true){
                $("#loginform").addClass("success");
                $("#loginform").removeClass("fail");
                $("#errormsg").removeClass("showmessage");

            }else{
                $("#loginform").removeClass("success");
                $("#loginform").addClass("fail");

                $("#errormsg").addClass("showmessage");

            }
            $("#postResultDiv").html("<p>" + "Post Successfully! <br>" + "Email Address: " + customer.email+ "</br>" + 
            "Password: " + customer.upwd+ "</br>" + "Valid User: " + customer.valid + "</p>");
        },
        error : function(e) {
            alert("Error!")
            console.log("ERROR: ", e);
        }
    });
        resetData();
    }

    function resetData(){
        $("email").val("");
        $("upwd").val("");
    }
});