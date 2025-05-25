let hamburgerButton = document.getElementById('hamburger-button-open');
let hamburgerButtonClose = document.getElementById('hamburger-button-close');
let sideModal = document.querySelector('.hamburger-menu');
let overlay = document.querySelector('.overlay')


document.querySelectorAll('.drop-list').forEach(li => {
    li.addEventListener('click', function () {
         const arrow = li.querySelector('.arrow-down');
         let nextElem = this.nextElementSibling; // Get the next element
        if (nextElem) {
            nextElem.style.display = nextElem.style.display === "none" || nextElem.style.display === "" ? "flex" : "none";

            arrow.classList.toggle('change-arrows')
        }
    })
})


function openModal() {
    sideModal.classList.add('open');
    overlay.classList.add('overlay-open')
    
}
function closeModal() {
    sideModal.classList.remove('open');
    overlay.classList.remove('overlay-open')
    
}

hamburgerButton.addEventListener('click', openModal);
hamburgerButtonClose.addEventListener('click', closeModal);



