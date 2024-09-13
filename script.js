


document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("calculator-display");
    let input = "";

    // Update the display
    const updateDisplay = () => {
        display.value = input;
    };

    // Handle button click
    const handleButtonClick = (value) => {
        input += value;
        updateDisplay();
    };

    // Clear input
    const clearInput = () => {
        input = "";
        updateDisplay();
    };

    // Handle backspace
    const handleBackspace = () => {
        input = input.slice(0, -1);
        updateDisplay();
    };

    // Calculate result
    const calculateResult = () => {
        try {
            let result = eval(input);
            display.value = result;
            input = result.toString(); 
        } catch (error) {
            display.value = "Error";
        }
    };

    document.querySelectorAll(".number, .operator").forEach(button => {
        button.addEventListener("click", (e) => {
            handleButtonClick(e.target.dataset.value);
        });
    });

   
    document.getElementById("clear").addEventListener("click", clearInput);

    document.getElementById("backspace").addEventListener("click", handleBackspace);

    document.getElementById("equal").addEventListener("click", calculateResult);
});
