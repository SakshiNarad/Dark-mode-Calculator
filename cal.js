const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.id === "=") {
            display.value = eval(display.value);

        } else if (button.id === "ac") {
            display.value = "";

        } else if (button.id == "de") {
            display.value = display.value.slice(0, -1);

        } else {
            display.value += button.id;
        }
    });
});