const games = [
  { name: "Retro Bowl",          img: "https://i.imgur.com/2rG3f8P.png", file: "games/retro-bowl.html" },
  { name: "Geometry Dash Lite",  img: "https://i.imgur.com/6yX8kLm.png", file: "games/geometry-dash-lite.html" },
  { name: "Drive Mad",           img: "https://i.imgur.com/8vN7jKp.png", file: "games/drive-mad.html" },
  { name: "Crazy Cattle 3D",     img: "https://i.imgur.com/X5kP9mL.png", file: "games/crazy-cattle-3d.html" },
  { name: "FNAF 1",              img: "https://i.imgur.com/Qw3vRtF.jpeg", file: "games/fnaf1.html" },
  { name: "FNAF 2",              img: "https://i.imgur.com/3tR9vZk.jpeg", file: "games/fnaf2.html" },
  { name: "FNAF 3",              img: "https://i.imgur.com/8nL5pYk.jpeg", file: "games/fnaf3.html" },
  { name: "Capybara Clicker",    img: "https://i.imgur.com/7kLmN2x.png", file: "games/capybara.html" },
  { name: "Cookie Clicker",      img: "https://i.imgur.com/9kPqR8v.png", file: "games/cookieclicker.html" },
  { name: "Subway Surfers",      img: "https://i.imgur.com/1vF6hLm.png", file: "games/subwaysurfers.html" }
];

function render(query = "") {
  const filtered = games.filter(g => g.name.toLowerCase().includes(query.toLowerCase()));
  document.getElementById("grid").innerHTML = filtered.map(g => `
    <div class="game" onclick="play('${g.file}')">
      <img src="${g.img}" onerror="this.src='https://via.placeholder.com/180/333/fff?text=${g.name}'">
      <h3>${g.name}</h3>
    </div>
  `).join("");
}

function play(file) {
  document.getElementById("gameFrame").src = file;
  document.getElementById("player").style.display = "block";
}

function closeGame() {
  document.getElementById("player").style.display = "none";
  document.getElementById("gameFrame").src = "";
}

// Fixed tab switching (uses onclick directly in HTML)
function openTab(tab) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(tab).classList.add("active");
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.querySelector(`.tab[onclick="openTab('${tab}')"]`).classList.add("active");
  closeGame();
}

function go() {
  let url = document.getElementById("url").value.trim() || "https://google.com";
  if (!url.startsWith("http")) url = "https://" + url;
  document.getElementById("proxyframe").src = "https://api.allorigins.win/raw?url=" + encodeURIComponent(url);
}

function applyCloak() {
  document.title = document.getElementById("cloakTitle").value;
  let link = document.querySelector("link[rel='icon']");
  if (link) link.href = document.getElementById("cloakIcon").value;
}

// Run on load
render();