
var using = false
var strokeStyle = 'black'
var context = canvas.getContext('2d')
var pos =  {x:undefined,y:undefined}
var usingEraser = false

function drawLine(x1,y1,x2,y2){
    context.beginPath()
    context.strokeStyle  = strokeStyle
    context.moveTo(x1,y1)
    context.lineTo(x2,y2)
    context.lineWidth = 3;
    context.stroke()
    context.closePath()
}

if(document.body.ontouchstart !== undefined){

    canvas.ontouchstart = function (e) {
        var x = e.touches[0].clientX
        var y = e.touches[0].clientY
        if (usingEraser) {
            using = true
            context.clearRect(x,y,20,20,)
        }
        else {
            using = true
            pos.x = x
            pos.y = y
        }
    }
    canvas.ontouchmove = function (e) {
        var x = e.touches[0].clientX
        var y = e.touches[0].clientY
        if (using){
            if (usingEraser){
                context.clearRect(x,y,20,20,)
            }
            else {
                drawLine(pos.x,pos.y,x,y)
                pos.x = x;
                pos.y = y;
            }
        }
    }
    canvas.ontouchend = function (e) {
        using = false
    }
}else {
    canvas.onmousedown = function (e) {
        var x = e.clientX
        var y = e.clientY
        if (usingEraser) {
            using = true
            context.clearRect(x,y,20,20,)
        }
        else {
            using = true
            pos.x = x
            pos.y = y
        }
    }
    canvas.onmousemove = function (e) {
        var x = e.clientX
        var y = e.clientY
        if (using){
            if (usingEraser){
                context.clearRect(x,y,20,20,)
            }
            else {
                drawLine(pos.x,pos.y,x,y)
                pos.x = x;
                pos.y = y;
            }
        }
    }
    canvas.onmouseup = function (e) {
        using = false
    }
}
canvas.width = document.documentElement.clientWidth
canvas.height = document.documentElement.clientHeight

window.onresize = function (){
    canvas.width = document.documentElement.clientWidth
    canvas.height = document.documentElement.clientHeight
}
clear.onclick =function () {

    context.clearRect(0,0,canvas.width,canvas.height)
}

eraser.onclick =function () {
    usingEraser = true
    eraser.style = "    position: absolute;\n" +
        "    top: 3.5em;\n" +
        "    left: 1.7em;"
    pen.style = "    position: absolute;\n" +
        "    top: 1em;" +
        "    left: 1em;"
}
pen.onclick =function () {
    usingEraser = false
    eraser.style = "    position: absolute;\n" +
        "    top: 3.5em;\n" +
        "    left: 1em;"
    pen.style = "    position: absolute;\n" +
        "    top: 1em;" +
        "    left: 1.7em;"
}
red.onclick =function () {
    strokeStyle = "red"
    blue.setAttribute("style", "left: 1.2em;");
    green.setAttribute("style", "left: 1.2em;");
    yellow.setAttribute("style", "left: 1.2em;");
    red.setAttribute("style", "left: 1.7em;");
}
blue.onclick =function () {
    strokeStyle = "blue"
    blue.setAttribute("style", "left: 1.7em;");
    green.setAttribute("style", "left: 1.2em;");
    yellow.setAttribute("style", "left: 1.2em;");
    red.setAttribute("style", "left: 1.2em;");
}
green.onclick =function () {
    strokeStyle = "green"
    blue.setAttribute("style", "left: 1.2em;");
    green.setAttribute("style", "left: 1.7em;");
    yellow.setAttribute("style", "left: 1.2em;");
    red.setAttribute("style", "left: 1.2em;");
}
yellow.onclick =function () {
    strokeStyle = "yellow"
    blue.setAttribute("style", "left: 1.2em;");
    green.setAttribute("style", "left: 1.2em;");
    yellow.setAttribute("style", "left: 1.7em;");
    red.setAttribute("style", "left: 1.2em;");
}