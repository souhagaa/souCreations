// Get the modal
/*var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var view = document.getElementById("view1");
view.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}*/

// Get the modal
  var modal = document.getElementById("first-modal");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById("first-work");
  var modalImg = document.getElementById("modal-content0");
  var captionText = document.getElementById("caption");

  img.onclick = function(captionText){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = captionText.value;
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
  modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
