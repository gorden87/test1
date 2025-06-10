function updateTime() {
  const now = new Date().toLocaleTimeString();
  document.getElementById('timestamp').innerText = 'Текущее время: ' + now;
}

// Автообновление времени при загрузке
window.onload = () => {
  updateTime();
};