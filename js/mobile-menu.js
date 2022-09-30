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

// (() => {
//   const mobileMenu = document.querySelector('.menu-container');
//   const openMenuBtn = document.querySelector('.menu-btn');
//   const closeMenuBtn = document.querySelector('.js-close-menu');

//   const toggleMenu = () => {
//     const isMenuOpen =
//       openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//       openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//       mobileMenu.classList.toggle('is-open');

//     const scrollLockMethod = !isMenuOpen
//       ? 'disableBodyScroll'
//       : 'enableBodyScroll';
//     bodyScrollLock[scrollLockMethod](document.body);
//   };

//   openMenuBtn.addEventListener('click', toggleMenu);
//   closeMenuBtn.addEventListener('click', toggleMenu);

//   // Close the mobile menu on wider screens if the device orientation changes
//   window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove('is-open');
//     openMenuBtn.setAttribute('aria-expanded', false);
//     bodyScrollLock.enableBodyScroll(document.body);
//   });
// })();