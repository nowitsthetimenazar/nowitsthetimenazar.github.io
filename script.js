// script.js

// Элементы DOM
const scene = document.getElementById('scene');
const screens = document.querySelectorAll('.screen');
const events = document.querySelectorAll('.event');

// Переменные для управления движением
let mouseX = 0;
let mouseY = 0;
let targetRotationX = 0;
let targetRotationY = 0;
let currentRotationX = 0;
let currentRotationY = 0;

// Инициализация сцены
function init() {
    // Создаем здания для города
    createBuildings();
    
    // Создаем растительность
    createVegetation();
    
    // Создаем облака
    createClouds();
    
    // Добавляем солнце
    createSun();
    
    // Слушаем движение мыши
    document.addEventListener('mousemove', handleMouseMove);
    
    // Запускаем анимацию
    animate();
}

// Обработка движения мыши
function handleMouseMove(e) {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = (e.clientY / window.innerHeight) * 2 - 1;
    
    targetRotationY = mouseX * 10;
    targetRotationX = mouseY * 5;
}

// Анимация сцены
function animate() {
    // Плавное перемещение к целевой позиции
    currentRotationX += (targetRotationX - currentRotationX) * 0.1;
    currentRotationY += (targetRotationY - currentRotationY) * 0.1;
    
    // Применяем преобразования к сцене
    if (scene) {
        scene.style.transform = `rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg)`;
    }
    
    // Параллакс эффект для событий
    events.forEach(event => {
        const speedX = parseInt(event.dataset.speedx) || 5;
        const speedY = parseInt(event.dataset.speedy) || 2;
        
        const moveX = currentRotationY * speedX;
        const moveY = currentRotationX * speedY;
        
        event.style.transform = `translate(${moveX}px, ${moveY}px) translateZ(20px)`;
    });
    
    requestAnimationFrame(animate);
}

// Создание зданий
function createBuildings() {
    const cityScreen = document.querySelector('.city-screen');
    if (!cityScreen) return;
    
    const buildingColors = ['#BDBDBD', '#9E9E9E', '#757575', '#616161'];
    
    for (let i = 0; i < 20; i++) {
        const building = document.createElement('div');
        building.className = 'building';
        
        // Случайные параметры здания
        const width = Math.random() * 100 + 50;
        const height = Math.random() * 300 + 200;
        const left = Math.random() * 100;
        const color = buildingColors[Math.floor(Math.random() * buildingColors.length)];
        
        building.style.width = `${width}px`;
        building.style.height = `${height}px`;
        building.style.left = `${left}%`;
        building.style.background = color;
        
        // Добавляем окна
        const windowCount = Math.floor((width * height) / 1000);
        for (let w = 0; w < windowCount; w++) {
            const window = document.createElement('div');
            window.className = 'window';
            
            const windowSize = Math.random() * 10 + 5;
            const windowLeft = Math.random() * (width - windowSize);
            const windowTop = Math.random() * (height - windowSize);
            
            window.style.width = `${windowSize}px`;
            window.style.height = `${windowSize}px`;
            window.style.left = `${windowLeft}px`;
            window.style.top = `${windowTop}px`;
            
            // Случайно включаем свет в окнах
            if (Math.random() > 0.5) {
                window.style.background = '#FFF9C4';
            } else {
                window.style.background = '#E0E0E0';
            }
            
            building.appendChild(window);
        }
        
        cityScreen.appendChild(building);
    }
}

// Функция для создания растительности
function createVegetation() {
    const cityScreen = document.querySelector('.city-screen');
    if (!cityScreen) return;
    
    // Добавляем траву вдоль дороги
    const grass = document.createElement('div');
    grass.className = 'grass';
    grass.style.width = '100%';
    grass.style.height = '20px';
    grass.style.bottom = '150px';
    cityScreen.appendChild(grass);
    
    // Добавляем деревья
    for (let i = 0; i < 15; i++) {
        const tree = document.createElement('div');
        tree.className = 'tree';
        
        const treeWidth = Math.random() * 20 + 40;
        const treeHeight = treeWidth * 2;
        const treeLeft = Math.random() * 100;
        
        tree.style.width = `${treeWidth}px`;
        tree.style.height = `${treeHeight}px`;
        tree.style.left = `${treeLeft}%`;
        tree.style.bottom = '150px';
        
        // Случайный оттенок зеленого
        const greenShade = Math.floor(Math.random() * 30 + 70);
        tree.style.background = `hsl(120, 60%, ${greenShade}%)`;
        
        cityScreen.appendChild(tree);
    }
    
    // Добавляем кусты
    for (let i = 0; i < 20; i++) {
        const bush = document.createElement('div');
        bush.className = 'bush';
        
        const bushWidth = Math.random() * 30 + 50;
        const bushHeight = bushWidth / 2;
        const bushLeft = Math.random() * 100;
        
        bush.style.width = `${bushWidth}px`;
        bush.style.height = `${bushHeight}px`;
        bush.style.left = `${bushLeft}%`;
        bush.style.bottom = '150px';
        
        // Случайный оттенок зеленого
        const greenShade = Math.floor(Math.random() * 30 + 50);
        bush.style.background = `hsl(120, 60%, ${greenShade}%)`;
        
        cityScreen.appendChild(bush);
    }
}

// Функция для создания облаков
function createClouds() {
    const cityScreen = document.querySelector('.city-screen');
    if (!cityScreen) return;
    
    for (let i = 0; i < 5; i++) {
        const cloud = document.createElement('div');
        cloud.className = 'cloud';
        
        const cloudSize = Math.random() * 50 + 70;
        const cloudTop = Math.random() * 150 + 20;
        const cloudLeft = Math.random() * 100;
        const animationDelay = Math.random() * 20;
        
        cloud.style.width = `${cloudSize}px`;
        cloud.style.height = `${cloudSize / 2}px`;
        cloud.style.top = `${cloudTop}px`;
        cloud.style.left = `${cloudLeft}%`;
        cloud.style.animationDelay = `${animationDelay}s`;
        
        cityScreen.appendChild(cloud);
    }
}

// Функция для создания солнца
function createSun() {
    const cityScreen = document.querySelector('.city-screen');
    if (!cityScreen) return;
    
    const sun = document.createElement('div');
    sun.className = 'sun';
    cityScreen.appendChild(sun);
}

// Показать город
function showCity() {
    // Скрываем текущий активный экран
    const activeScreen = document.querySelector('.screen.active');
    if (activeScreen) {
        activeScreen.classList.remove('active');
    }
    
    // Показываем экран города
    const cityScreen = document.querySelector('.city-screen');
    if (cityScreen) {
        cityScreen.classList.add('active');
    }
}

// Выбор события
function selectEvent(eventNumber) {
    // Анимация выбора события
    const selectedEvent = document.getElementById(`event${eventNumber}`);
    if (!selectedEvent) return;
    
    selectedEvent.style.transform = 'translateZ(100px) scale(1.2)';
    selectedEvent.style.boxShadow = '0 20px 40px rgba(76, 175, 80, 0.8)';
    
    // В зависимости от выбранного события
    setTimeout(() => {
        if (eventNumber === 1) {
            alert('Переход к продаже кроссовок');
        } else if (eventNumber === 2) {
            alert('Переход к покупке кроссовок');
        } else if (eventNumber === 3) {
            alert('Переход к лотерее');
        } else if (eventNumber === 4) {
            alert('Переход к Telegram каналу');
        }
    }, 1000);
}

// Запуск инициализации после загрузки страницы
window.addEventListener('load', init);

// Сделаем функции глобальными для доступа из HTML
window.showCity = showCity;
window.selectEvent = selectEvent;
