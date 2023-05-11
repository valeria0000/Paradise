const aboutUs = document.getElementById("aboutUs"); // получаем доступ к кнопке 
const aboutUsModal = document.getElementById("modal-about"); // получаем доступ к кнопке модульного обьекта
const ModalClose = document.getElementsByClassName("close")[0]; // доступ к крестику

aboutUs.addEventListener("click", () => { //добавляем событие по нажатию на кнопку мы меняем ее значение на display:block;
    aboutUsModal.style.display = "block";
});

// Закрыть модальное окно при клике вне его области
window.addEventListener("click", (event) => {
  if (event.target == aboutUsModal) {
    aboutUsModal.style.display = "none";
  }
});

