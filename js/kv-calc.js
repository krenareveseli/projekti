const planetGravity = {
  Mercury: 0.38,
  Venus: 0.91,
  Mars: 0.38,
  Jupiter: 2.34,
  Saturn: 1.06,
  Uranus: 0.92,
  Neptune: 1.19,
  Moon: 0.16,
  Pluto: 0.06,
};

const planetIcons = {
  Mercury: "../images/mercury.png",
  Venus: "../images/venus.png",
  Mars: "../images/mars.png",
  Jupiter: "../images/jupiter.png",
  Saturn: "../images/saturn1.png",
  Uranus: "../images/uranus.png",
  Neptune: "../images/neptune.png",
  Moon: "../images/full-moon.png",
  Pluto: "../images/pluto.png",
};

document.getElementById("calculateWeight").addEventListener("click", () => {
  const earthWeightInput = document.getElementById("earthWeight");
  const resultsDiv = document.getElementById("planetResults");

  const earthWeight = parseFloat(earthWeightInput.value);

  if (isNaN(earthWeight) || earthWeight <= 0) {
    resultsDiv.innerHTML = `
      <p class="text-danger text-center">
        Please enter a valid weight!
      </p>
    `;
    return;
  }

  for (const planet in planetGravity) {
    const weightOnPlanet = (earthWeight * planetGravity[planet]).toFixed(1);

    const col = document.createElement("div");
    col.className = "col";

    col.innerHTML = `
      <div class="kv-planet-card text-center h-100">
        <img 
          src="${planetIcons[planet]}" 
          alt="${planet}" 
          class="kv-planet-icon"
        >
        <h3>${planet}</h3>
        <p>${weightOnPlanet} kg</p>
      </div>
    `;

    resultsDiv.appendChild(col);
  }
});