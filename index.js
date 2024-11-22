document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    let currentInput = "";
    let lastInput = "";
    let operator = "";

    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.dataset.value;

            if (value === "C") {
                currentInput = "";
                lastInput = "";
                operator = "";
                display.textContent = "0";
            } else if (value === "=") {
                if (currentInput && lastInput && operator) {
                    const result = calculate(Number(lastInput), Number(currentInput), operator);
                    display.textContent = result;
                    currentInput = result.toString();
                    lastInput = "";
                    operator = "";
                }
            } else if (["+", "-", "*", "/"].includes(value)) {
                if (currentInput) {
                    operator = value;
                    lastInput = currentInput;
                    currentInput = "";
                }
            } else {
                if (value === "." && currentInput.includes(".")) return;
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });

    function calculate(a, b, op) {
        switch (op) {
            case "+":
                return a + b;
            case "-":
                return a - b;
            case "*":
                return a * b;
            case "/":
                return b !== 0 ? a / b : "Error";
            default:
                return 0;
        }
    }
});
