var container = document.getElementById("container");
var bordersArray = ['50%','0'];
var blursArray = ['0','5px'];
var colorsArray = ['#FF6B6B','#FFE66D','#4472CA'];
var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;
var count = 40;

function createElementRandom(){
    for(var i = 0 ;i < count;i++){
        var randomleft = Math.floor(Math.random()*width);
        var randomtop = Math.floor(Math.random()*height);
        var color = Math.floor(Math.random*3);
        var border = Math.floor(Math.random()*2);
        var blur = Math.floor(Math.random()*2);
        var widthElement = Math.floor(Math.random()*5)+5;
        var timeAnimation = Math.floor(Math.random()*12)+5;


        var div = document.createElement("div");
        div.style.backgroundcolor = colorsArray[color];
        div.style.prosition = "absolute";
        div.style.width= widthElement + 'px';
        div.style.height= widthElement + 'px';
        div.style.marginLeft = randomleft + 'px';
        div.style.marginTop = randomtop + 'px';
        div.style.borderRadius = bordersArray[border];
        div.style.filter = 'blur('+ blursArray[blur]+')';
        div.style.animation= 'move'+ timeAnimation + 's aese-in infinite';
        container.appendChild(div);
    }
}
createElementRandom();