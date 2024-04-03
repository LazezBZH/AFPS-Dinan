const sendForm = document.querySelector(".send");
const ok = document.getElementById("ok");
const contactInputs = document.querySelectorAll(".contact-input");

ok.addEventListener("change", toggleSendBtn);
function toggleSendBtn() {
  sendForm.disabled = !sendForm.disabled;
}
