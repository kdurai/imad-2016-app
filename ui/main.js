console.log('Loaded!');

//Change the text of main-text element

var element=document.getElementById("main-text");

element.innerHTML="New Value";

var img=document.getElementById("img");

img.onclick=function() {
//  img.style.marginLeft= '100px'  ;
  var interval = setInterval(moveRight,50);
};

var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}