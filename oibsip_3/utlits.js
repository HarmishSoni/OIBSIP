function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;

    if (isNaN(inputTemperature)) {
        alert('Please enter a valid number for the temperature.');
        return;
    }

    let convertedTemperature;
    let unitSymbol;

    if (unit === 'celsius') {
        convertedTemperature = (inputTemperature * 9 / 5) + 32;
        unitSymbol = '°F';
    } else if (unit === 'fahrenheit') {
        convertedTemperature = (inputTemperature - 32) * 5 / 9;
        unitSymbol = '°C';
    } else if (unit === 'kelvin') {
        convertedTemperature = inputTemperature - 273.15;
        unitSymbol = 'K';
    }

    document.getElementById('result').innerText = `Converted temperature: ${convertedTemperature.toFixed(2)} ${unitSymbol}`;
}
