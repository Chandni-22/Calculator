const display = document.getElementById("display")
const button = document.getElementById("button")
button.addEventListener("click",function(){makesound()})
button.addEventListener("click",(Event)=> {
    let target = Event.target;
    console.log(target);
    if (target.innerHTML === "clear") {
        display.value = "";
    } else if (target.classList.contains("number")) {
        display.value += target.innerHTML;
    } else if (target.classList.contains("operator")) {
        let lastchar = display.value[display.value.length - 1];
        if (
            lastchar === "+" || lastchar === "-" || lastchar ==="*" || lastchar === "/"
        ) {
            display.value=display.value.slice(0,-1) + target.innerHTML;
        } else {
            display.value += target.innerHTML;
        }
    } else if (target.innerHTML === "=") {
        if (display.value.length !== 0) {
            try{
                display.value = eval(display.value);
            } catch (error) {
                display.value = "expression";
            }
        } else {
            display.value = "";
        }
    }
})

function makesound() {
    let audio = new Audio("click.mp3");
    audio.play();
}