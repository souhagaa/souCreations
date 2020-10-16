/*function checkEmail() {

        var email = document.getElementById('email');
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!filter.test(email.value)) {
            alert('Please provide a valid email address');
            email.focus;
            return false;
        }
    };
*/
class message {

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
function sendData() {
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
