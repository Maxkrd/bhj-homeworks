const modal = document.getElementById("modal_main").classList.add("modal_active");
const modalClose = Array.from(document.querySelectorAll(".modal__close"));
const modalShow = document.querySelector(".show-success");
const modalSuccess = document.getElementById("modal_success");

for (let i = 0; i < modalClose.length; i++) {
  modalClose[i].onclick = function() {
    let parentModal = this.closest(".modal");
    parentModal.classList.remove("modal_active");
  }
}
modalShow.onclick = function() {
  modalSuccess.classList.add("modal_active");
  modal.classList.remove("modal_active");
}
modalSuccess.onclick = function() {
  modal.classList.remove("modal_active");
}