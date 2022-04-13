window.onload = () => {
        // pio
        var pio = document.getElementById("pio-container")
        var bx,by,mx,my;
        // 创建一个开关
        var mouseDown = false;
    pio.onmousedown = function (event) {
            var event = event || window.event;
            mouseDown = true;
            bx = pio.offsetLeft;
            by = pio.offsetTop;
            mx = event.clientX;
            my = event.clientY;
        }
    document.onmousemove = function (event) {
            var event = event || window.event;
            var height = document.documentElement.clientHeight;
        if (mouseDown) {
                pio.style.left = event.clientX-mx+bx+"px";
                pio.style.top = event.clientY-my+by+"px";
                if(pio.offsetLeft<=0){
                    pio.style.left=0
                }
                if(pio.offsetTop>=height){
                    pio.style.top = height-pio.clientHeight + "px";
                }
            }
        }
    pio.onmouseup = function () {
            mouseDown = false;
        }
}
