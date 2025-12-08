const games = [
  {name:"Retro Bowl", img:"https://i.imgur.com/2rG3f8P.png", file:"games/retro-bowl.html"},
  {name:"Geometry Dash Lite", img:"https://i.imgur.com/6yX8kLm.png", file:"games/geometry-dash-lite.html"},
  {name:"Drive Mad", img:"https://i.imgur.com/8vN7jKp.png", file:"games/drive-mad.html"},
  {name:"Crazy Cattle 3D", img:"https://i.imgur.com/X5kP9mL.png", file:"games/crazy-cattle-3d.html"},
  {name:"FNAF 1", img:"https://i.imgur.com/Qw3vRtF.jpeg", file:"games/fnaf1.html"},
  {name:"FNAF 2", img:"https://i.imgur.com/3tR9vZk.jpeg", file:"games/fnaf2.html"},
  {name:"FNAF 3", img:"https://i.imgur.com/8nL5pYk.jpeg", file:"games/fnaf3.html"},
  {name:"Capybara Clicker", img:"https://i.imgur.com/7kLmN2x.png", file:"games/capybara.html"},
  {name:"Cookie Clicker", img:"https://i.imgur.com/9kPqR8v.png", file:"games/cookieclicker.html"},
  {name:"Subway Surfers", img:"https://i.imgur.com/1vF6hLm.png", file:"games/subwaysurfers.html"}
];

function render(q="") {
  const f = games.filter(g=>g.name.toLowerCase().includes(q.toLowerCase()));
  document.getElementById("grid").innerHTML = f.map(g=>`
    <div class="game" onclick="play('${g.file}')">
      <img src="${g.img}" onerror="this.src='https://via.placeholder.com/150/333/fff?text=${g.name}'">
      <h3>${g.name}</h3>
    </div>
  `).join("");
}

function play(f) {
  document.getElementById("gameFrame").src = f;
  document.getElementById("player").style.display = "block";
}

function closeGame() {
  document.getElementById("player").style.display = "none";
  document.getElementById("gameFrame").src = "";
}

function openTab(tab) {
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById(tab).classList.add("active");
  document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
  document.querySelectorAll(".tab")[["vault","proxy","core"].indexOf(tab)].classList.add("active");
  closeGame();
}

// Helios Proxy (full working version)
document.getElementById("proxyframe").src = `
data:text/html,
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Helios Browser</title>
  <style>
    body{margin:0;background:#202124;color:#e8eaed;height:100vh;display:flex;flex-direction:column}
    .topbar{background:#242729;padding:8px;display:flex;align-items:center}
    .addr{background:#52565b;padding:10px 16px;border-radius:50px;flex:1;margin:0 10px;display:flex;align-items:center}
    .addr input{background:none;border:none;color:#fff;width:100%;outline:none;font-size:16px}
    button{background:#3c4043;border:none;color:#fff;padding:10px 20px;border-radius:50px;margin:0 5px;cursor:pointer}
    iframe{width:100%;height:100%;border:none;background:#1e1e1e}
  </style>
</head>
<body>
  <div class="topbar">
    <button onclick="history.back()">Back</button>
    <button onclick="history.forward()">Forward</button>
    <button onclick="location.reload()">Reload</button>
    <div class="addr">
      <input type="text" id="url" placeholder="Search or enter URL" value="https://google.com">
    </div>
    <button onclick="go()">Go</button>
  </div>
  <iframe id="frame"></iframe>
  <script>
    const frame = document.getElementById('frame');
    const input = document.getElementById('url');
    function go() {
      let u = input.value.trim();
      if (!u) u = 'https://google.com';
      if (!u.startsWith('http')) u = 'https://' + u;
      frame.src = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(u);
    }
    input.addEventListener('keypress', e => { if (e.key==='Enter') go(); });
    go();
  </script>
</body>
</html>
`.trim();

function applyCloak() {
  document.title = document.getElementById("cloakTitle").value;
  document.querySelector("link[rel='icon']").href = document.getElementById("cloakIcon").value;
}

render();