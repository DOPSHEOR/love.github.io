//registration
var loginModal = document.getElementById("loginModal");
var regModal = document.getElementById("regModal");

function openLoginModal() {
  loginModal.style.display = "block";
}

function openRegModal() {
  regModal.style.display = "block";
}

var closeModal = function() {
  loginModal.style.display = "none";
  regModal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == loginModal || event.target == regModal) {
    closeModal();
  }
};

var closeButton = document.getElementsByClassName("close");
for (var i = 0; i < closeButton.length; i++) {
  closeButton[i].onclick = closeModal;
}
