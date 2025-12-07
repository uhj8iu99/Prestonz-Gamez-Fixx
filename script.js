const games = [
  {name:"Retro Bowl",thumb:"https://images.launchbox-app.com/158956-clearlogo.png",file:"games/retro-bowl.html"},
  {name:"Geometry Dash Lite",thumb:"https://e3334afd.cf-nate.pages.dev/0/g/geodash/game/splash.png",file:"games/geometry-dash-lite.html"},
  {name:"Drive Mad",thumb:"https://cdn.jsdelivr.net/gh/genizy/dmad-poki@49b5ab6b987f5f3be58f9dae59c92e8fc1aab9b0/webapp/cover.jpg",file:"games/drive-mad.html"},
  {name:"Crazy Cattle 3D",thumb:"https://cdn.jsdelivr.net/gh/bubbls/cc3d-merge/index.png",file:"games/crazy-cattle-3d.html"}
];

function render() {
  document.getElementById("games-grid").innerHTML = games.map(g=>`
    <div class="game" onclick="play('${g.file}')">
      <img src="${g.thumb}" onerror="this.src='https://via.placeholder.com/300x200/333/999?text=${g.name}'">
      <h3>${g.name}</h3>
    </div>
  `).join("");
}

function play(file) {
  document.getElementById("frame").src = file;
  document.getElementById("player").style.display = "block";
}

function back() {
  document.getElementById("player").style.display = "none";
  document.getElementById("frame").src = "";
}

function openTab(tab) {
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById(tab).classList.add("active");
  document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
  event.target.classList.add("active");
}

function search(q) {
  const filtered = games.filter(g=>g.name.toLowerCase().includes(q.toLowerCase()));
  document.getElementById("games-grid").innerHTML = filtered.map(g=>`
    <div class="game" onclick="play('${g.file}')">
      <img src="${g.thumb}" onerror="this.src='https://via.placeholder.com/300x200/333/999?text=${g.name}'">
      <h3>${g.name}</h3>
    </div>
  `).join("");
}

render();