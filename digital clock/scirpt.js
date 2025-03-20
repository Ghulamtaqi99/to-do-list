function updateTime() {
  const timeElement = document.getElementById('time');
  const dateElement = document.getElementById('date');
  const now = new Date();

  const time = now.toLocaleTimeString();
  const date = now.toLocaleDateString();

  timeElement.textContent = time;
  dateElement.textContent = date;
}

setInterval(updateTime, 1000);
updateTime();