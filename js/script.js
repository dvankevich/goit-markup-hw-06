(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-open-modal]"),
        closeModalBtn: document.querySelector("[data-close]"),
        modal: document.querySelector("[data-modal]"),
        openMobileBtn: document.querySelector("[data-open-mobile-menu]"),
        closeMobileBtn: document.querySelector("[data-close-mobile-menu]"),
        mmenu: document.querySelector("[data-mobile-menu]"),
    };
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    console.log(refs.openMobileBtn);
    console.log(refs.mmenu.classList);

    function toggleModal() {
        refs.modal.classList.toggle("is-open");
        document.body.classList.toggle("no-scroll"); // block scroll
    }

    refs.openMobileBtn.addEventListener("click", toggleMobile);
    refs.closeMobileBtn.addEventListener("click", toggleMobile);

    function toggleMobile() {
        refs.mmenu.classList.toggle("is-open");
        document.body.classList.toggle("no-scroll"); // block scroll
    }
})();
