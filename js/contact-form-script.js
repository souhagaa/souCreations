class clientMessage {

  constructor(name, email, number, subject, message) {
    this.name = name;
    this.email = email;
    this.number = number;
    this.subject = subject;
    this.message = message;
  }

  printMessage() {
    this.name + "sent you a message about" + this.subject + "it says: " + this.message;
  }
}

/*function sendData() {
                    var msgs = {};
                    var email = document.getElementById('email').value;
                    var name = document.getElementById('name').value;
                    var number = document.getElementById('number').value;
                    var subject = document.getElementById('subject').value;
                    var msg = document.getElementById('message').value;
                    var fullMessage =  new message(name, email, number, subject, msg);
                    msgs[name] = fullMessage;
                    document.getElementById("outputSubject").innerHTML = fullMessage.subject;
                    document.getElementById("userMsg").innerHTML = fullMessage.name;
                    document.getElementById("outputMsg").innerHTML = fullMessage.message;
                    console.log(msgs);
}
*/
$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "Did you fill in the form properly?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});


function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var number = $("#number").val();
    var msg_subject = $("#subject").val();
    var msg = $("#message").val();
    var fullMessage =  new clientMessage(name, email, number, msg_subject, msg);
    /*document.getElementById("outputSubject").innerHTML = fullMessage.subject;
    document.getElementById("userMsg").innerHTML = fullMessage.name;
    document.getElementById("outputMsg").innerHTML = fullMessage.message;*/
    formSuccess(fullMessage);
    /*$.ajax({
        type: "POST",
        url: "php/form-process.php",
        data: "name=" + name + "&email=" + email + "&number="+ number+ "&msg_subject=" + msg_subject + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            } else {
                formError();
                submitMSG(false,text);
            }
        }
    });*/
}

function formSuccess(fullMessage){
    console.log("formsuccess!");
    console.log(fullMessage);
    $("#contactForm")[0].reset();
    submitMSG(true, "Message Submitted!");
    $("#userMsg").html(fullMessage.name);
    $("#outputSubject").html(fullMessage.subject);
    $("#outputMsg").html(fullMessage.message);
    /*document.getElementById("outputSubject").innerHTML = fullMessage.subject;
    document.getElementById("userMsg").innerHTML = fullMessage.name;
    document.getElementById("outputMsg").innerHTML = fullMessage.message;*/
}

function formError(){
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}
