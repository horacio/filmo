var prev = function() { window.scrollBy(0, -window.innerHeight); }
var next = function() { window.scrollBy(0, window.innerHeight); }

document.onkeyup = function(e) {
  switch(e.which) {
    case 37: prev(); break;
    case 39: next(); break;
  }
}

document.onkeydown = function(e) {
  switch(e.which) {
    case 38:
    case 40: return false;
  }
}

document.onclick = function(e) {
  if(e.target.nodeName != "A") next();
}

window.onload = function() {
  scrollTo(0, 0);
}
