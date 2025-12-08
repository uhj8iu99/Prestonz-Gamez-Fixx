const games = [
  {name:"Retro Bowl",            img:"https://images.launchbox-app.com/158956-clearlogo.png", file:"games/retro-bowl.html"},
  {name:"Geometry Dash Lite",    img:"https://e3334afd.cf-nate.pages.dev/0/g/geodash/game/splash.png", file:"games/geometry-dash-lite.html"},
  {name:"Drive Mad",             img:"https://cdn.jsdelivr.net/gh/genizy/dmad-poki@49b5ab6b987f5f3be58f9dae59c92e8fc1aab9b0/webapp/cover.jpg", file:"games/drive-mad.html"},
  {name:"Crazy Cattle 3D",       img:"https://cdn.jsdelivr.net/gh/bubbls/cc3d-merge/index.png", file:"games/crazy-cattle-3d.html"},
  {name:"FNAF 1",                img:"https://i.imgur.com/4z4p1nM.png", file:"games/fnaf1.html"},
  {name:"FNAF 2",                img:"https://i.imgur.com/9n2fQ0J.png", file:"games/fnaf2.html"},
  {name:"FNAF 3",                img:"https://i.imgur.com/Kp9aV3f.png", file:"games/fnaf3.html"},
  {name:"Capybara Clicker",      img:"https://i.imgur.com/2kL5n9F.png", file:"games/capybara.html"},
  {name:"Cookie Clicker",        img:"https://i.imgur.com/3Qw2v9x.png", file:"games/cookieclicker.html"},
  {name:"Subway Surfers",        img:"https://i.imgur.com/Vj8kL2p.png", file:"games/subwaysurfers.html"}
];

function render(filter = "") {
  const filtered = games.filter(g => g.name.toLowerCase().includes(filter.toLowerCase()));
  document.getElementById("grid").innerHTML = filtered.map(g => `
    <div class="game" onclick="play('${g.file}')">
      <img src="${g.img}" onerror="this.src='https://via.placeholder.com/300x200/333/fff?text=${g.name}'">
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

render();