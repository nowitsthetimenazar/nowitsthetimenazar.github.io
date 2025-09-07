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
