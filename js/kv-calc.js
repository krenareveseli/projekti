const planetGravity = {
  Mercury: 0.38,
  Venus: 0.91,
  Mars: 0.38,
  Jupiter: 2.34,
  Saturn: 1.06,
  Uranus: 0.92,
  Neptune: 1.19,
  Moon: 0.16,
  Pluto: 0.06
};

const planetIcons = {
  Mercury: "☿",
  Venus: "♀",
  Mars: "♂",
  Jupiter: "♃",
  Saturn: "♄",
  Uranus: "♅",
  Neptune: "♆",
  Moon: "🌕",
  Pluto: "♇"
};

document.getElementById('calculateWeight').addEventListener('click', () => {
  const earthWeight = parseFloat(document.getElementById('earthWeight').value);
  const resultsDiv = document.getElementById('planetResults');
  resultsDiv.innerHTML = ''; // pastro rezultate

  if(!earthWeight || earthWeight <= 0) {
    resultsDiv.innerHTML = "<p>Please enter a valid weight!</p>";
    return;
  }

  for(const planet in planetGravity) {
    const weightOnPlanet = (earthWeight * planetGravity[planet]).toFixed(1);
    const card = document.createElement('div');
    card.className = 'kv-planet-card';
    card.innerHTML = `
      <div class="kv-planet-icon">${planetIcons[planet]}</div>
      <h3>${planet}</h3>
      <p>${weightOnPlanet} kg</p>
    `;
    resultsDiv.appendChild(card);
  }
});