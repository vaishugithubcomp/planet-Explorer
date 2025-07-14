const planets = [
  {
    name: "Mercury",
    size: "4,879 km",
    distanceFromSun: "57.9 million km",
    distances: { Venus: "50.3 million km", Earth: "91.7 million km" },
    img: "https://solarsystem.nasa.gov/system/feature_items/images/18_mercury_new.png",
  },
  {
    name: "Venus",
    size: "12,104 km",
    distanceFromSun: "108.2 million km",
    distances: { Mercury: "50.3 million km", Earth: "41.4 million km" },
    img: "https://solarsystem.nasa.gov/system/feature_items/images/27_venus_jg.png",
  },
  {
    name: "Earth",
    size: "12,742 km",
    distanceFromSun: "149.6 million km",
    distances: { Mercury: "91.7 million km", Venus: "41.4 million km", Mars: "78.3 million km" },
    img: "https://solarsystem.nasa.gov/system/feature_items/images/17_earth.png",
  },
  {
    name: "Mars",
    size: "6,779 km",
    distanceFromSun: "227.9 million km",
    distances: { Earth: "78.3 million km", Jupiter: "550 million km" },
    img: "https://solarsystem.nasa.gov/system/feature_items/images/19_mars.png",
  },
  {
    name: "Jupiter",
    size: "139,820 km",
    distanceFromSun: "778.5 million km",
    distances: { Mars: "550 million km", Saturn: "650 million km" },
    img: "https://solarsystem.nasa.gov/system/feature_items/images/16_jupiter_new.png",
  },
  {
    name: "Saturn",
    size: "116,460 km",
    distanceFromSun: "1.4 billion km",
    distances: { Jupiter: "650 million km", Uranus: "1.5 billion km" },
    img: "https://solarsystem.nasa.gov/system/feature_items/images/28_saturn.png",
  },
  {
    name: "Uranus",
    size: "50,724 km",
    distanceFromSun: "2.9 billion km",
    distances: { Saturn: "1.5 billion km", Neptune: "1.6 billion km" },
    img: "https://solarsystem.nasa.gov/system/feature_items/images/29_uranus.png",
  },
  {
    name: "Neptune",
    size: "49,244 km",
    distanceFromSun: "4.5 billion km",
    distances: { Uranus: "1.6 billion km" },
    img: "https://solarsystem.nasa.gov/system/feature_items/images/30_neptune.png",
  },
];


const container = document.querySelector(".planet-container");


planets.forEach((planet) => {
  const card = document.createElement("div");
  card.className = "planet-card";

  const img = document.createElement("img");
  img.src = planet.img;
  img.alt = planet.name;

  const name = document.createElement("div");
  name.className = "planet-name";
  name.textContent = planet.name;

  const btn = document.createElement("button");
  btn.className = "visit-btn";
  btn.textContent = "Visit";
  btn.addEventListener("click", () => showInfo(planet));

  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(btn);

  container.appendChild(card);
});


function showInfo(planet) {
  const infoPanel = document.getElementById("infoPanel");
  document.getElementById("planetImg").src = planet.img;
  document.getElementById("planetName").textContent = planet.name;
  document.getElementById("planetSize").textContent = planet.size;
  document.getElementById("planetDistance").textContent = planet.distanceFromSun;

  const distancesHTML = Object.entries(planet.distances)
    .map(([otherPlanet, dist]) => `<p><strong>Distance from ${otherPlanet}:</strong> ${dist}</p>`)
    .join("");
  document.getElementById("planetDistances").innerHTML = distancesHTML;

  infoPanel.style.display = "block";
}

function closeInfo() {
  document.getElementById("infoPanel").style.display = "none";
}
