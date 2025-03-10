// элементы для интерактивности
const infoBtn = document.querySelector('.interactive-btn'); // Кнопка "Узнать больше"
const popup = document.querySelector('.popup'); // Всплывающее окно
const closeBtn = document.querySelector('.close-btn'); // Кнопка закрытия
const audioTriggers = document.querySelectorAll('.play-audio'); // Все элементы "Слушать пример"

// Обработчик для кнопки "Узнать больше"
infoBtn.addEventListener('click', () => {
    popup.classList.toggle('show');
});

// Обработчик для кнопки закрытия
closeBtn.addEventListener('click', () => {
    popup.classList.remove('show');
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && popup.classList.contains('show')) { 
        popup.classList.remove('show');
    }
});

// Обработчик для аудио
audioTriggers.forEach(trigger => {
    const audio = trigger.nextElementSibling;
    trigger.addEventListener('click', () => {
        if (audio.paused) {
            audio.play(); 
            trigger.textContent = 'Пауза';
        } else {
            audio.pause();
            trigger.textContent = 'Слушать пример';
        }
    });
});