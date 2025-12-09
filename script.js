// Tab close warning
window.addEventListener('beforeunload', e => {
  e.preventDefault();
  e.returnValue = 'Your changes may not be saved.';
});

// Games list
const games = [
  {name:"Retro Bowl", img:"https://i.postimg.cc/6qY4vN9F/retro-bowl.jpg", file:"games/retro-bowl.html"},
  {name:"Drive Mad", img:"https://i.postimg.cc/9Q2r3vN8/drive-mad.jpg", file:"games/drive-mad.html"},
  {name:"Geometry Dash Lite", img:"https://i.postimg.cc/1zq9vK7K/geometry-dash.jpg", file:"games/geometry-dash-lite.html"},
  {name:"FNAF 1", img:"https://i.postimg.cc/Qw3vRtF/fnaf1.jpg", file:"games/fnaf1.html"},
  {name:"FNAF 2", img:"https://i.postimg.cc/3tR9vZk/fnaf2.jpg", file:"games/fnaf2.html"},
  {name:"FNAF 3", img:"https://i.postimg.cc/8nL5pYk/fnaf3.jpg", file:"games/fnaf3.html"},
  {name:"Subway Surfers", img:"https://i.postimg.cc/1vF6hLm/subwaysurfers.jpg", file:"games/subwaysurfers.html"},
  {name:"Cookie Clicker", img:"https://i.postimg.cc/9kPqR8v/cookieclicker.jpg", file:"games/cookieclicker.html"},
  {name:"Capybara Clicker", img:"https://i.postimg.cc/7kLmN2x/capybara.jpg", file:"games/capybara.html"},
  {name:"Crazy Cattle 3D", img:"https://i.postimg.cc/X5kP9mL/crazycattle.jpg", file:"games/crazy-cattle-3d.html"}
  // add more here in any order
];

function render(q="") {
  const f = games.filter(g=>g.name.toLowerCase().includes(q.toLowerCase()));
  document.getElementById("grid").innerHTML = f.map(g=>`
    <div class="game" onclick="play('${g.file}')">
      <img src="${g.img}" onerror="this.src='https://via.placeholder.com/200/222/fff?text=${g.name}'">
      <h3>${g.name}</h3>
    </div>
  `).join("");
}

function play(f){document.getElementById("gameFrame").src=f;document.getElementById("player").style.display="block";}
function closeGame(){document.getElementById("player").style.display="none";document.getElementById("gameFrame").src="";}

// FIXED TAB SWITCHING
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", function() {
    const target = this.getAttribute("data-tab");
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.getElementById(target).classList.add("active");
    this.classList.add("active");
    closeGame();
  });
});

function applyCloak(){
  document.title = document.getElementById("cloakTitle").value;
}

// Proxy
document.getElementById("proxyframe").src = `data:text/html,
<!DOCTYPE html><html><head><style>body{margin:0;background:#000;color:#fff;height:100vh;display:flex;flex-direction:column}
.bar{background:#1a1a1a;padding:10px;display:flex;gap:10px}
input,button{padding:12px;border:none;border-radius:50px;flex:1}
input{background:#222;color:#fff;outline:none}
button{background:#a855f7;color:#000;cursor:pointer;font-weight:bold}
iframe{flex:1;border:none}</style></head>
<body><div class="bar">
<input id="u" placeholder="https://youtube.com" value="https://google.com">
<button onclick="go()">Go</button></div>
<iframe id="f"></iframe>
<script>
function go(){let u=document.getElementById('u').value;if(!u.startsWith('http'))u='https://'+u;
document.getElementById('f').src='https://api.allorigins.win/raw?url='+encodeURIComponent(u);}
go();
</script></body></html>`.trim();

render();