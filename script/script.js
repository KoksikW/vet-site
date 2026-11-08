/* ===== Лабораторна робота 8-9: інтерактивність за допомогою JavaScript ===== */

/* 1. Перевірка завантаження DOM */
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');
});

/* 2. Навігаційне меню: зміна кольору посилань при наведенні курсора */
document.querySelectorAll('.navigation a').forEach(link => {
    link.addEventListener('mouseover', function () {
        this.style.color = '#d3af59';
    });

    link.addEventListener('mouseout', function () {
        this.style.color = '#1f2a44';
    });
});

/* 3. Форма «Зв'яжіться з нами» (about.html): обробка відправки */
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;

        console.log('Форма відправлена:');
        console.log('Ім\'я:', name);
        console.log('Email:', email);
        console.log('Повідомлення:', message);

        // Тут можна додати код для відправки даних на сервер
        alert('Дякуємо за ваше повідомлення!');
        this.reset();
    });
}

/* 4. Слайдер зображень у розділі «Хто ми» (about.html) */
let currentSlide = 0;
const slides = document.querySelectorAll('#imageSlider img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dots = document.querySelectorAll('#imageSlider .dot');

function showSlide(n) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[n].style.display = 'block';
    dots.forEach((dot, i) => dot.classList.toggle('active', i === n));   // заповнений кружечок = поточний слайд
}

if (slides.length > 0 && prevBtn && nextBtn) {
    nextBtn.addEventListener('click', function () {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    prevBtn.addEventListener('click', function () {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);
}
