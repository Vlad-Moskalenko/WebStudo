(() => {
const burgerBtn = document.querySelector('.menu-btn');
const menuContainer = document.querySelector('.menu-container');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('is-open')

    const expanded = burgerBtn.getAttribute('aria-expanded') === 'true' || false;
    burgerBtn.setAttribute('aria-expanded', !expanded)
    menuContainer.classList.toggle('is-open')
})

})();
