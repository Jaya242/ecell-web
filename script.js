document.addEventListener('DOMContentLoaded', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    const clickOrder = [];

    gridItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            item.style.backgroundColor = '#ff0000';
            
            clickOrder.push(index);

            if (index === 8) {
                resetSquaresInSequence(clickOrder);
            }
        });
    });
});

function resetSquaresInSequence(order) {
    let delay = 0;
    
    order.forEach((index) => {
        setTimeout(() => {
            const item = document.querySelectorAll('.grid-item')[index];
            item.style.backgroundColor = '#0066cc';
        }, delay);
        delay += 300; 
    });
} 