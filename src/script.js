// Список временных зон
const timeZones = [
  { element: document.querySelector('[data-tz="Europe/Moscow"] span'], tz: "Europe/Moscow" },
  { element: document.querySelector('[data-tz="America/New_York"] span'), tz: "America/New_York" },
  { element: document.querySelector('[data-tz="Asia/Tokyo"] span'), tz: "Asia/Tokyo" },
  { element: document.querySelector('[data-tz="Australia/Sydney"] span'), tz: "Australia/Sydney" }
];

// Функция для форматирования даты под нужный часовой пояс
function formatTime(date, timeZone) {
  const options = {
    timeZone: timeZone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  };
  return new Intl.DateTimeFormat('ru-RU', options).format(date);
}

// Обновление времени
function updateTime() {
  const now = new Date();
  timeZones.forEach(tzObj => {
    tzObj.element.textContent = formatTime(now, tzObj.tz);
  });
}

// Запускаем сразу и обновляем каждую секунду
updateTime();
setInterval(updateTime, 1000);