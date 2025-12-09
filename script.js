// Tab close warning
window.addEventListener('beforeunload', e => { e.preventDefault(); e.returnValue = ''; });

// Games in perfect order + permanent images
const games = [
  {name:"Retro Bowl", img:"https://i.ibb.co/3zXhY3P/retro-bowl.png", file:"games/retro-bowl.html"},
  {name:"Drive Mad", img:"https://i.ibb.co/0jK0Y3K/drive-mad.png", file:"games/drive-mad.html"},
  {name:"Geometry Dash Lite", img:"https://i.ibb.co/4p7k7Y8/geometry-dash.png", file:"games/geometry-dash-lite.html"},
  {name:"FNAF 1", img:"https://i.ibb.co/7p4n7vF/fnaf1.png", file:"games/fnaf1.html"},
  {name:"FNAF 2", img:"https://i.ibb.co/3d3v7nK/fnaf2.png", file:"games/fnaf2.html"},
  {name:"FNAF 3", img:"https://i.ibb.co/9h7v7pL/fnaf3.png", file:"games/fnaf3.html"},
  {name:"Subway Surfers", img:"https://i.ibb.co/7v7p7nL/subway-surfers.png", file:"games/subwaysurfers.html"},
  {name:"Cookie Clicker", img:"https://i.ibb.co/4p7k7Y8/cookie-clicker.png", file:"games/cookieclicker.html"},
  {name:"Capybara Clicker", img:"https://i.ibb.co/3zXhY3P/capybara.png", file:"games/capybara.html"},
  {name:"Crazy Cattle 3D", img:"https://i.ibb.co/0jK0Y3K/crazy-cattle.png", file:"games/crazy-cattle-3d.html"}
];

function render(q="") {
  const filtered = games.filter(g=>g.name.toLowerCase().includes(q.toLowerCase()));
  document.getElementById("grid").innerHTML = filtered.map(g=>`
    <div class="game" onclick="play('${g.file}')">
      <img src="${g.img}" onerror="this.src='https://via.placeholder.com/180/222/fff?text=${g.name}'">
      <h3>${g.name}</h3>
    </div>
  `).join("");
}

function play(f){document.getElementById("gameFrame").src=f;document.getElementById("player").style.display="block";}
function closeGame(){document.getElementById("player").style.display="none";document.getElementById("gameFrame").src="";}

// FIXED TAB SWITCHING
document.querySelectorAll(".tab").forEach(tab => {
  tab.onclick = function() {
    const target = this.getAttribute("data-tab");
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.getElementById(target).classList.add("active");
    this.classList.add("active");
    closeGame();
  };
});

function applyCloak(){
  document.title = document.getElementById("cloakTitle").value;
}

render();