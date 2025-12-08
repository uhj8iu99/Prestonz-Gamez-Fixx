window.addEventListener('beforeunload', e => { e.preventDefault(); e.returnValue = 'Your changes may not be saved.'; });

const games = [
  {name:"Retro Bowl", img:"https://i.postimg.cc/6qY4vN9F/retro-bowl.jpg", file:"games/retro-bowl.html"},
  {name:"Geometry Dash Lite", img:"https://i.postimg.cc/1zq9vK7K/geometry-dash.jpg", file:"games/geometry-dash-lite.html"},
  {name:"Drive Mad", img:"https://i.postimg.cc/9Q2r3vN8/drive-mad.jpg", file:"games/drive-mad.html"},
  {name:"FNAF 1", img:"https://i.postimg.cc/Qw3vRtF/fnaf1.jpg", file:"games/fnaf1.html"},
  {name:"FNAF 2", img:"https://i.postimg.cc/3tR9vZk/fnaf2.jpg", file:"games/fnaf2.html"},
  {name:"FNAF 3", img:"https://i.postimg.cc/8nL5pYk/fnaf3.jpg", file:"games/fnaf3.html"},
  {name:"Capybara Clicker", img:"https://i.postimg.cc/7kLmN2x/capybara.jpg", file:"games/capybara.html"},
  {name:"Cookie Clicker", img:"https://i.postimg.cc/9kPqR8v/cookieclicker.jpg", file:"games/cookieclicker.html"},
  {name:"Subway Surfers", img:"https://i.postimg.cc/1vF6hLm/subwaysurfers.jpg", file:"games/subwaysurfers.html"},
  {name:"Crazy Cattle 3D", img:"https://i.postimg.cc/X5kP9mL/crazycattle.jpg", file:"games/crazy-cattle-3d.html"}
  // Add more in this exact order
];

function render(q="") {
  const f = games.filter(g=>g.name.toLowerCase().includes(q.toLowerCase()));
  document.getElementById("grid").innerHTML = f.map(g=>`
    <div class="game" onclick="play('${g.file}')">
      <img src="${g.img}" onerror="this.src='https://via.placeholder.com/160/222/fff?text=${g.name}'">
      <div class="info"><h3>${g.name}</h3></div>
    </div>
  `).join("");
}

function play(f) { document.getElementById("gameFrame").src = f; document.getElementById("player").style.display="block"; }
function closeGame() { document.getElementById("player").style.display="none"; document.getElementById("gameFrame").src=""; }

function openTab(t) {
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById(t).classList.add("active");
  document.querySelectorAll(".tab").forEach(tab=>tab.classList.remove("active"));
  document.querySelectorAll(".tab")[["vault","proxy","core"].indexOf(t)].classList.add("active");
  closeGame();
}

function applyCloak() {
  document.title = document.getElementById("cloakTitle").value;
}

render();