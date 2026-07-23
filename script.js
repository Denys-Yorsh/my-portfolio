// 1. Перемикач темної / світлої теми
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
        themeToggleBtn.textContent = '☀️ Світла тема';
    } else {
        themeToggleBtn.textContent = '🌙 Темна тема';
    }
});

// 2. Лічильник лайків для проектів
const likeButtons = document.querySelectorAll('.btn-like');

likeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const likeCountSpan = button.querySelector('.like-count');
        let currentLikes = parseInt(likeCountSpan.textContent);
        likeCountSpan.textContent = currentLikes + 1;
    });
});

// 3. Обробка відправки форми
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Запобігаємо перезавантаженню сторінки
    
    formStatus.textContent = 'Дякуємо! Ваше повідомлення успішно надіслано.';
    contactForm.reset(); // Очищаємо форму
});