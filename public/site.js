min_slide = 0;
max_slide = document.getElementById('slides').children.length - 1;

function slide() {
  if (localStorage["slide"] == undefined) {
    return 0;
  } else {
    return parseInt(localStorage["slide"]);
  }
}

function mark(n) {
  if (n < min_slide) n = min_slide;
  if (n > max_slide) n = max_slide;

  window.localStorage["slide"] = n;
}

function prev() {
  mark(slide() - 1);
  window.scrollTo(0, window.innerHeight * slide());
}

function next() {
  mark(slide() + 1);
  window.scrollTo(0, window.innerHeight * slide());
}

/* Change slides with the left and right arrow keys */
document.onkeyup = function(e) {
  switch(e.which) {
    case 37: prev(); break;
    case 39: next(); break;
  }
}

/* Ignore the up and down arrow keys */
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
  scrollTo(0, window.innerHeight * slide());
}
