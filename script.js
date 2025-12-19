window.addEventListener('beforeunload', e => { e.preventDefault(); e.returnValue = ''; });

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
  {name:"Crazy Cattle 3D", img:"https://i.ibb.co/0jK0Y3K/crazy-cattle.png", file:"games/crazy-cattle-3d.html"},
  {name:"Slope", img:"https://i.ibb.co/slope-icon.png", file:"games/slope.html"},
  {name:"1v1.LOL", img:"https://i.ibb.co/1v1lol-icon.png", file:"games/1v1lol.html"},
  {name:"Basket Random", img:"https://i.ibb.co/basket-random.png", file:"games/basket-random.html"},
  {name:"BitLife", img:"https://i.ibb.co/bitlife-icon.png", file:"games/bitlife.html"},
  {name:"Drift Hunters", img:"https://i.ibb.co/drift-hunters.png", file:"games/drift-hunters.html"},
  {name:"Eggy Car", img:"https://i.ibb.co/eggy-car.png", file:"games/eggy-car.html"},
  {name:"Getaway Shootout", img:"https://i.ibb.co/getaway-shootout.png", file:"games/getaway-shootout.html"},
  {name:"Hole.io", img:"https://i.ibb.co/holeio-icon.png", file:"games/holeio.html"},
  {name:"Monkey Mart", img:"https://i.ibb.co/monkey-mart.png", file:"games/monkey-mart.html"},
  {name:"Moto X3M", img:"https://i.ibb.co/motox3m-icon.png", file:"games/moto-x3m.html"},
  {name:"OvO", img:"https://i.ibb.co/ovo-icon.png", file:"games/ovo.html"},
  {name:"Paper.io 2", img:"https://i.ibb.co/paperio2-icon.png", file:"games/paperio2.html"},
  {name:"Rooftop Snipers", img:"https://i.ibb.co/rooftop-snipers.png", file:"games/rooftop-snipers.html"},
  {name:"Smash Karts", img:"https://i.ibb.co/smash-karts.png", file:"games/smash-karts.html"},
  {name:"Snow Rider 3D", img:"https://i.ibb.co/snow-rider.png", file:"games/snow-rider.html"},
  {name:"Temple Run 2", img:"https://i.ibb.co/temple-run2.png", file:"games/temple-run2.html"},
  {name:"Tube Jumpers", img:"https://i.ibb.co/tube-jumpers.png", file:"games/tube-jumpers.html"},
  {name:"Tunnel Rush", img:"https://i.ibb.co/tunnel-rush.png", file:"games/tunnel-rush.html"},
  {name:"World's Hardest Game", img:"https://i.ibb.co/worlds-hardest.png", file:"games/worlds-hardest-game.html"},
  {name:"Basketball Stars", img:"https://i.ibb.co/basketball-stars.png", file:"games/basketball-stars.html"}
];

// rest of script.js stays the same
render();