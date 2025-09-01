// availability.js
document.addEventListener('DOMContentLoaded', function() {
    // Данные о наличии товаров (можете заменить на загрузку с сервера)
    const availabilityData = {
        'box_us8': [
            { model: 'Air Jordan 1 Retro High', brand: 'Nike/Jordan', size: 'US 8 (EU 41)', stock: 'in-stock', condition: '8/10' },
            { model: 'Nike Dunk Low', brand: 'Nike', size: 'US 8 (EU 41)', stock: 'low-stock', condition: '9/10' },
            { model: 'New Balance 550', brand: 'New Balance', size: 'US 8 (EU 41)', stock: 'in-stock', condition: '7/10' },
            { model: 'Adidas Forum Low', brand: 'Adidas', size: 'US 8 (EU 41)', stock: 'out-of-stock', condition: '8/10' },
            { model: 'Asics Gel-Lyte III', brand: 'Asics', size: 'US 8 (EU 41)', stock: 'in-stock', condition: '9/10' }
        ],
        'box_us9': [
            // Данные для бокса US 9
        ]
    };
    
    // Функция для отображения таблицы наличия
    function renderAvailabilityTable(boxId) {
        const tableBody = document.getElementById('availability-table-body');
        if (!tableBody || !availabilityData[boxId]) return;
        
        tableBody.innerHTML = '';
        
        availabilityData[boxId].forEach(item => {
            const row = document.createElement('tr');
            
            // Определяем текст для статуса наличия
            let statusText = '';
            let statusClass = '';
            
            switch(item.stock) {
                case 'in-stock':
                    statusText = 'В наличии';
                    statusClass = 'in-stock';
                    break;
                case 'low-stock':
                    statusText = 'Мало';
                    statusClass = 'low-stock';
                    break;
                case 'out-of-stock':
                    statusText = 'Нет в наличии';
                    statusClass = 'out-of-stock';
                    break;
            }
            
            row.innerHTML = `
                <td>${item.model}</td>
                <td>${item.brand}</td>
                <td>${item.size}</td>
                <td class="${statusClass}">${statusText}</td>
                <td>${item.condition}</td>
            `;
            
            tableBody.appendChild(row);
        });
    }
    
    // Определяем ID текущего бокса (можно установить в HTML через data-атрибут)
    const currentBoxId = document.body.getAttribute('data-box-id') || 'box_us8';
    renderAvailabilityTable(currentBoxId);
    
    // Обновление наличия (можно вызывать при изменении данных)
    window.updateAvailability = function(boxId, newData) {
        if (availabilityData[boxId]) {
            availabilityData[boxId] = newData;
            renderAvailabilityTable(boxId);
        }
    };
});
