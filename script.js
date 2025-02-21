function convert() {
    let value = parseFloat(document.getElementById("value").value);
    let unit = document.getElementById("unit").value;
    let result = 0;
    
    if (!isNaN(value)) {
        if (unit === "milesToKm") {
            result = value * 1.60934;
        } else if (unit === "kmToMiles") {
            result = value * 0.621371;
        }
    }
    
    document.getElementById("result").innerText = "Result: " + result.toFixed(2);
}