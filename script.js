// Функция смены фона
function changeBackground(type, event) {
    const body = document.body;
    const options = document.querySelectorAll('.background-option');
    
    // Убираем активный класс у всех options
    options.forEach(option => option.classList.remove('active'));
    
    // Добавляем активный класс к clicked option
    event.target.classList.add('active');
    
    // Меняем фон в зависимости от выбора
    switch(type) {
        case 'default':
            body.style.background = '#f9f9f9';
            body.classList.remove('custom-bg');
            break;
        case 'lightblue':
            body.style.background = '#e6f7ff';
            body.classList.remove('custom-bg');
            break;
        case 'aliceblue':
            body.style.background = '#f0f8ff';
            body.classList.remove('custom-bg');
            break;
        case 'gradient':
            body.style.background = 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)';
            body.classList.remove('custom-bg');
            break;
    }
    
    // Сохраняем предпочтение в localStorage
    localStorage.setItem('backgroundPreference', type);
}

// Загрузка сохраненного фона
document.addEventListener('DOMContentLoaded', function() {
    const savedBackground = localStorage.getItem('backgroundPreference');
    if (savedBackground) {
        // Применяем сохраненный фон
        const body = document.body;
        switch(savedBackground) {
            case 'default':
                body.style.background = '#f9f9f9';
                break;
            case 'lightblue':
                body.style.background = '#e6f7ff';
                break;
            case 'aliceblue':
                body.style.background = '#f0f8ff';
                break;
            case 'gradient':
                body.style.background = 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)';
                break;
        }
        
        // Активируем соответствующую кнопку
        const options = document.querySelectorAll('.background-option');
        options.forEach(option => {
            if (option.onclick && option.onclick.toString().includes(savedBackground)) {
                option.classList.add('active');
            }
        });
    }
    
    // Поисковая функциональность
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const searchQuery = document.querySelector('.search-input').value;
            if (searchQuery.trim() !== '') {
                alert('Поиск: ' + searchQuery);
            }
        });
    }
});
// Плавная прокрутка к якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
// FAQ toggle functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        item.classList.toggle('active');
    });
});

// Additional functionality for the main page
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.step, .feature-card, .testimonial-card');
        
        elements.forEach(element => {
            const position = element.getBoundingClientRect();
            
            // If element is in viewport
            if(position.top < window.innerHeight - 100) {
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initialize animation styles
    const animatedElements = document.querySelectorAll('.step, .feature-card, .testimonial-card');
    animatedElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run on load and scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});
