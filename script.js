// Функция плавной прокрутки к разделу
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

document.querySelector('html').style.scrollBehavior = 'smooth';

document.querySelectorAll('.product-btn').forEach(btn => {
    btn.addEventListener('mouseover', () => {
        btn.style.transform = 'scale(1.1)';
    });
    btn.addEventListener('mouseout', () => {
        btn.style.transform = 'scale(1)';
    });
});
// Функция для добавления класса при прокрутке
document.addEventListener('scroll', () => {
    const featureItems = document.querySelectorAll('.feature-item');

    featureItems.forEach((item) => {
        const itemPosition = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (itemPosition < windowHeight - 100) {
            item.classList.add('visible'); // Появление элемента
        }
    });
});
document.addEventListener("scroll", function () {
    const productsSection = document.querySelector(".products");
    const productsDescription = document.querySelector(".products-description");
    const position = productsSection.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {
        productsSection.classList.add("show");
    }
});
function redirectToRegister() {
    window.location.href = 'register.html';
}



