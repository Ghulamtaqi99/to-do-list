let display = document.getElementById('display');
let idd = document.getElementById("dee");
let buttons = Array.from(document.getElementsByTagName('button'));
let buttons = Array.from(document.getElementsByTagName("butttpmm"));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                display.value = '';
                break;
            case '=':
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = 'Error';
                }
                break;
            default:
                display.value += e.target.innerText;
        }
    });
});
buttons.map(button => {
    button.addEventListener("click",  (e) => {
        switch (e.target.innertext){
            case "c":
                display.value = "";
                break;
            case "=":
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = "error";
                }
                break;
            default:
                display.value =+ e.target.innerText;
        }
    });
});
let displays = document.getElementById("new");
let buttonss = Array.from(document.getElementsByTagName("button"));

buttons.map(buttons => {
    buttons
})
let display = document.getElementById("new");
let buttooon = Array.from(document,getElementsByTagName("button"));
button.map(button => {
    buttonss
})