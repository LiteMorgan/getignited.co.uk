// SVG Sprite Injector
console.log('test');

const ajax = new XMLHttpRequest();
ajax.open("GET", "/img/spritesheets/icons.svg", true);
ajax.send();
ajax.onload = function(e) {
  const div = document.createElement("div");
  div.innerHTML = ajax.responseText;
  document.body.insertBefore(div, document.body.childNodes[0]);
  console.log('Sprite generated')
}