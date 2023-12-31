let clicked = true;
document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementsByTagName("input")[0];
    let path = document.getElementsByTagName("path")[0];
    const socket = new WebSocket("ws://localhost:3000");
    button.addEventListener("click", function(){
        socket.send("ButtonClicked");
    });
    socket.onmessage = ({data}) => {
        if (data == "ButtonClicked") {
            if(clicked){
                path.setAttribute("stroke", "#dc2121");
                path.setAttribute("fill", "#dc2121");
                clicked = false;
            }
            else{
                path.setAttribute("stroke", "#0bb40b");
                path.setAttribute("fill", "#0bb40b");
                clicked = true;
            }
        }
    };
});
