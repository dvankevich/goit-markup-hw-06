(() => {
  const refs = {
    openModalBtn: document.querySelector("[open-modal]"),
    closeModalBtn: document.querySelector("[close]"),
    modal: document.querySelector("[modal]"),

    openMobileBtn: document.querySelector("[open-mobile-menu]"),
    closeMobileBtn: document.querySelector("[close-mobile-menu]"),
    mmenu: document.querySelector("[mobile-menu]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
  }

  refs.openMobileBtn.addEventListener("click", toggleMobile);
  refs.closeMobileBtn.addEventListener("click", toggleMobile);

  function toggleMobile() {
    refs.mmenu.classList.toggle("is-open");
  }
})();
