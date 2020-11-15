function celsiusToFahrenheit(celsius){
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}


var celsiusInput = document.getElementById("celsius");
var fahrenhInput = document.getElementById("fahrenheit");

celsiusInput.addEventListener('input', function(e) {
    fahrenhInput.value = celsiusToFahrenheit(e.target.value)
})

fahrenhInput.addEventListener('input', function(e) {
    celsiusInput.value = fahrenheitToCelsius(e.target.value);
})


