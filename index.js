function convertTemperature() {
    let val = document.getElementById("input_value");
    let result = document.getElementById("result");
    let output = document.getElementById("output");
    let input = document.getElementById("input");

    let inputValue = input.value;
    let outputValue = output.value;

    if (inputValue === "celsius" && outputValue === "fahrenheit") {
        result.innerHTML = (Number(val.value) * 9 / 5) + 32 + "°F";
    } else if (inputValue === "fahrenheit" && outputValue === "celsius") {
        result.innerHTML = ((Number(val.value) - 32) * 5 / 9).toFixed(2) + "°C";
    }
}

document.getElementById("convert").addEventListener("click", convertTemperature);

function limparInputs() {
    document.getElementById("input_value").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("input").selectedIndex = 0;
    document.getElementById("output").selectedIndex = 0;
}

document.getElementById("clean").addEventListener("click", limparInputs);
