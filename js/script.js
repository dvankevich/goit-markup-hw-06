(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-open-modal]"),
        closeModalBtn: document.querySelector("[data-close]"),
        modal: document.querySelector("[data-modal]"),
    };
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-open");
        document.body.classList.toggle("no-scroll"); // block scroll
    }
})();
