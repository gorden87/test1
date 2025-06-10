document.addEventListener("DOMContentLoaded", function () {
  const timeElements = document.querySelectorAll(".time-card span");
  const timeZones = [
    "Europe/Moscow",
    "America/New_York",
    "Asia/Tokyo",
    "Australia/Sydney"
  ];

  function updateTime() {
    const now = new Date();
    timeElements.forEach((el, index) => {
      const tz = timeZones[index];
      const formatter = new Intl.DateTimeFormat('ru-RU', {
        timeZone: tz,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
      el.textContent = formatter.format(now);
    });
  }

  updateTime();
  setInterval(updateTime, 1000);
});