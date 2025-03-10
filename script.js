// Находим элементы для интерактивности
const infoBtn = document.querySelector('.interactive-btn'); // Кнопка "Узнать больше"
const popup = document.querySelector('.popup'); // Всплывающее окно
const closeBtn = document.querySelector('.close-btn'); // Кнопка закрытия
const audioTriggers = document.querySelectorAll('.play-audio'); // Все элементы "Слушать пример"

// Обработчик для кнопки "Узнать больше"
infoBtn.addEventListener('click', () => {
    popup.classList.toggle('show'); // Показываем или скрываем попап
});

// Обработчик для кнопки закрытия
closeBtn.addEventListener('click', () => {
    popup.classList.remove('show'); // Скрываем попап
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && popup.classList.contains('show')) { // Проверяем, что нажата Escape и попап открыт
        popup.classList.remove('show'); // Скрываем попап
    }
});

// Обработчик для аудио
audioTriggers.forEach(trigger => {
    const audio = trigger.nextElementSibling; // Находим соответствующий аудиоэлемент
    trigger.addEventListener('click', () => {
        if (audio.paused) {
            audio.play(); // Воспроизводим аудио
            trigger.textContent = 'Пауза'; // Меняем текст на "Пауза"
        } else {
            audio.pause(); // Ставим на паузу
            trigger.textContent = 'Слушать пример'; // Возвращаем исходный текст
        }
    });
});