let output = document.getElementById('output');
let outputValue = ''
let btns = document.querySelectorAll("button");
for (let btn of btns) {
    btn.addEventListener("click", (e) => {
        let keyClicked = e.target.innerHTML;
        if (keyClicked === "C") {
            output.value = '';
        } else if (keyClicked === "DEL") {
            output.value = String(output.value).slice(0, -1);
        } else if (keyClicked === "%") {
            output.value = (output.value / 100);
        } else if (keyClicked === "=") {
            output.value = eval(output.value);
        } else if (keyClicked === "x") {
            output.value += "*";
        } else {
            output.value += keyClicked;
        }
    })
}
