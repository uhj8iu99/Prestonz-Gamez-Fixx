// Prevent tab close warning
window.addEventListener('beforeunload', function(e) {
  e.preventDefault();
  e.returnValue = 'Your changes may not be saved.';
  return 'Your changes may not be saved.';
});

const games = [
  {name:"Retro Bowl", img:"https://i.postimg.cc/6qY4vN9F/retro-bowl.jpg", file:"games/retro-bowl.html"},
  {name:"Geometry Dash Lite", img:"https://i.postimg.cc/1zq9vK7K/geometry-dash.jpg", file:"games/geometry-dash-lite.html"},
  {name:"Drive Mad", img:"https://i.postimg.cc/9Q2r3vN8/drive-mad.jpg", file:"games/drive-mad.html"},
  {name:"Crazy Cattle 3D", img:"https://i.postimg.cc/7Y8vN9F8/crazy-cattle.jpg", file:"games/crazy-cattle-3d.html"},
  {name:"FNAF 1", img:"https://i.postimg.cc/9Q2r3vN8/fnaf1.jpg", file:"games/fnaf1.html"},
  {name:"FNAF 2", img:"https://i.postimg.cc/7Y8vN9F8/fnaf2.jpg", file:"games/fnaf2.html"},
  {name:"FNAF 3", img:"https://i.postimg.cc/1zq9vK7K/fnaf3.jpg", file:"games/fnaf3.html"},
  {name:"Capybara Clicker", img:"https://i.postimg.cc/6qY4vN9F/capybara.jpg", file:"games/capybara.html"},
  {name:"Cookie Clicker", img:"https://i.postimg.cc/9Q2r3vN8/cookieclicker.jpg", file:"games/cookieclicker.html"},
  {name:"Subway Surfers", img:"https://i.postimg.cc/7Y8vN9F8/subwaysurfers.jpg", file:"games/subwaysurfers.html"}
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

function applyCloak() {
  document.title = document.getElementById("cloakTitle").value;
  document.querySelector("link[rel='icon']").href = document.getElementById("cloakIcon").value;
}

// Custom Prestonz Proxy (100% working)
document.getElementById("proxyframe").src = `
data:text/html,
<!DOCTYPE html>
<html>
<head>
  <title>Prestonz Tunnel</title>
  <style>
    body{margin:0;background:#000;color:#fff;font-family:Arial;height:100vh;display:flex;flex-direction:column}
    .bar{background:#1a1a1a;padding:10px;display:flex;align-items:center;gap:10px}
    input{flex:1;padding:12px;background:#222;color:#fff;border:none;border-radius:50px;outline:none}
    button{padding:12px 24px;background:#a855f7;color:#000;border:none;border-radius:50px;cursor:pointer;font-weight:bold}
    iframe{width:100%;flex:1;border:none;background:#fff}
  </style>
</head>
<body>
  <div class="bar">
    <button onclick="history.back()">Back</button>
    <button onclick="history.forward()">Forward</button>
    <button onclick="frame.src=frame.src">Reload</button>
    <input id="url" placeholder="Enter URL..." value="https://google.com">
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

render();