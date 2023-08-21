const parent = document.body;
const cal = document.querySelector(".calculator");
const btn = document.querySelector("button");
const para = document.querySelector("p");
const countPara = document.querySelector("#result");
const input = document.getElementById("input");
const units = document.getElementById("units");


// Titl Effect
const tiltContainer = document.querySelector(".container");

tiltContainer.addEventListener("mousemove", (e) => {
    const xPos = (e.clientX / window.innerWidth - 0.5) * 30;
    const yPos = (e.clientY / window.innerHeight - 0.5) * 30;
    tiltContainer.style.transform = `perspective(1000px) rotateX(${yPos}deg) rotateY(${xPos}deg)`;


    //Adjust Shadow based on tilt angle
    const shadowIntensity = Math.min(Math.abs(xPos) + Math.abs(yPos), 30) / 30; //Adjusted 30 based on tilt range
    const shadowBlur = 20 * shadowIntensity;
    const shadowOpacity = 0.2 + 0.3 * shadowIntensity;

    tiltContainer.style.boxShadow = `0 ${shadowBlur}px ${shadowBlur}px rgba(0, 0, 0, ${shadowOpacity})`;

});

tiltContainer.addEventListener("mouseleave", () => {
    tiltContainer.style.transform = "none";
    tiltContainer.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.5)";

});

units.addEventListener("change", function unitChoose () {
    const massFrom = document.getElementById("massFrom");
    const massTo = document.getElementById("massTo");
    const optionFrom = document.getElementById("option_from");
    const optionTo = document.getElementById("option_to");
    const pressFrom = document.getElementById("pressFrom");
    const pressTo = document.getElementById("pressTo");
    const speedFrom = document.getElementById("speedFrom");
    const speedTo = document.getElementById("speedTo");

    if (units.value === "mass") {
        massFrom.style.display = "inline-block";
        massTo.style.display = "inline-block";
        optionFrom.style.display = "none";
        optionTo.style.display = "none";
        pressFrom.style.display = "none";
        pressTo.style.display = "none";
        speedFrom.style.display = "none";
        speedTo.style.display = "none";

    } else if (units.value === "length") {
        massFrom.style.display = "none";
        massTo.style.display = "none";
        optionFrom.style.display = "inline-block";
        optionTo.style.display = "inline-block";
        pressFrom.style.display = "none";
        pressTo.style.display = "none";
        speedFrom.style.display = "none";
        speedTo.style.display = "none";

    } else if (units.value === "pressure") {
        massFrom.style.display = "none";
        massTo.style.display = "none";
        optionFrom.style.display = "none";
        optionTo.style.display = "none";
        pressFrom.style.display = "inline-block";
        pressTo.style.display = "inline-block";
        speedFrom.style.display = "none";
        speedTo.style.display = "none";

    } else if (units.value === "speed") {
        massFrom.style.display = "none";
        massTo.style.display = "none";
        optionFrom.style.display = "none";
        optionTo.style.display = "none";
        pressFrom.style.display = "none";
        pressTo.style.display = "none";
        speedFrom.style.display = "inline-block";
        speedTo.style.display = "inline-block";
    }
});


function formatConversionResult (input, optionFrom, result, optionTo) {
    const absResult = Math.abs(result);

    let formattedResult;
    if (absResult >= 0.00001 && absResult < 10000000){
        formattedResult = result.toString();
        
        if (formattedResult.includes(".")) {
            formattedResult = result.toFixed(4).replace(/\.?0+$/,""); // Remove trailing zeros.
        }
    } else {
        formattedResult = result.toExponential(4).replace('e', ' × 10^');
    }
     
    return `${input} ${optionFrom} = ${formattedResult} ${optionTo}`;
}

//Mass Result
function massConversionResult (input, massFrom, result, massTo) {
    const absResult = Math.abs(result);

    let formattedResult;
    if (absResult >= 0.001 && absResult < 10000000){
        formattedResult = result.toString();
        
        if (formattedResult.includes(".")) {
            formattedResult = result.toFixed(4).replace(/\.?0+$/,""); // Remove trailing zeros.
        }
    } else {
        formattedResult = result.toExponential(4).replace('e', ' × 10^');
    }
     
    return `${input} ${massFrom} = ${formattedResult} ${massTo}`;
}

//Pressure Result
function pressureConversionResult (input, pressFrom, result, pressTo) {
    const absResult = Math.abs(result);

    let formattedResult;
    if (absResult >= 0.00001 && absResult < 10000000){
        formattedResult = result.toString();
        
        if (formattedResult.includes(".")) {
            formattedResult = result.toFixed(4).replace(/\.?0+$/,""); // Remove trailing zeros.
        }
    } else {
        formattedResult = result.toExponential(4).replace('e', ' × 10^');
    }
     
    return `${input} ${pressFrom} = ${formattedResult} ${pressTo}`;
}

//Speed Result
function speedConversionResult (input, speedFrom, result, speedTo) {
    const absResult = Math.abs(result);

    let formattedResult;
    if (absResult >= 0.00001 && absResult < 10000000){
        formattedResult = result.toString();
        
        if (formattedResult.includes(".")) {
            formattedResult = result.toFixed(4).replace(/\.?0+$/,""); // Remove trailing zeros.
        }
    } else {
        formattedResult = result.toExponential(4).replace('e', ' × 10^');
    }
     
    return `${input} ${speedFrom} = ${formattedResult} ${speedTo}`;
}


//Speed funtion
function speedConvertor () {
    const input = parseFloat(document.getElementById("input").value);
    const speedFrom = (document.getElementById("speedFrom").value);
    const speedTo = (document.getElementById("speedTo").value);

    //miles/hr
    if (speedFrom === "mile/hr" && speedTo === "foot/sec") {
        const result = input * 1.46667;
        para.innerText = speedConversionResult(input, speedFrom, result, speedTo);
    } else if (speedFrom === "mile/hr" && speedTo === "m/s" ) {
        const result = input * 0.44704;
        para.innerText = speedConversionResult(input, speedFrom, result, speedTo);
    } else if (speedFrom === "mile/hr" && speedTo === "km/hr" ) {
        const result = input * 1.60934;
        para.innerText = speedConversionResult(input, speedFrom, result, speedTo);
    } else if (speedFrom === "mile/hr" && speedTo === "knot" ) {
        const result = input * 0.868976;
        para.innerText = speedConversionResult(input, speedFrom, result, speedTo);
    } else if (speedFrom === "mile/hr" && speedTo === "mile/hr" ) {
        const result = input * 1;
        para.innerText = speedConversionResult(input, speedFrom, result, speedTo);
    }

    //Foot / Sec
    else if (speedFrom === "foot/sec" && speedTo === "foot/sec") {
        const result = input * 1;
        para.innerText = speedConversionResult(input, speedFrom, result, speedTo);
    } else if (speedFrom === "foot/sec" && speedTo === "m/s" ) {
        const result = input * 0.3048;
        para.innerText = speedConversionResult(input, speedFrom, result, speedTo);
    } else if (speedFrom === "foot/sec" && speedTo === "km/hr" ) {
        const result = input * 1.09728;
        para.innerText = speedConversionResult(input, speedFrom, result, speedTo);
    } else if (speedFrom === "foot/sec" && speedTo === "knot" ) {
        const result = input * 0.592484;
        para.innerText = speedConversionResult(input, speedFrom, result, speedTo);
    }  else if (speedFrom === "foot/sec" && speedTo === "mile/hr" ) {
        const result = input * 0.681818;
        para.innerText = speedConversionResult(input, speedFrom, result, speedTo);
    }

    //Meter/sec
    else if (speedFrom === "m/s" && speedTo === "foot/sec") {
        const result = input * 3.28084;
        para.innerText = speedConversionResult(input, speedFrom, result, speedTo);
    } else if (speedFrom === "m/s" && speedTo === "m/s" ) {
        const result = input * 1;
        para.innerText = speedConversionResult(input, speedFrom, result, speedTo);
    } else if (speedFrom === "m/s" && speedTo === "km/hr" ) {
        const result = input * 3.6;
        para.innerText = speedConversionResult(input, speedFrom, result, speedTo);
    } else if (speedFrom === "m/s" && speedTo === "knot" ) {
        const result = input * 1.94384;
        para.innerText = speedConversionResult(input, speedFrom, result, speedTo);
    }  else if (speedFrom === "m/s" && speedTo === "mile/hr" ) {
        const result = input * 2.23694;
        para.innerText = speedConversionResult(input, speedFrom, result, speedTo);
    }

    //Kilometer/hr
    else if (speedFrom === "km/hr" && speedTo === "foot/sec") {
        const result = input * 0.911344;
        para.innerText = speedConversionResult(input, speedFrom, result, speedTo);
    } else if (speedFrom === "km/hr" && speedTo === "m/s" ) {
        const result = input * 0.277778;
        para.innerText = speedConversionResult(input, speedFrom, result, speedTo);
    } else if (speedFrom === "km/hr" && speedTo === "km/hr" ) {
        const result = input * 1;
        para.innerText = speedConversionResult(input, speedFrom, result, speedTo);
    } else if (speedFrom === "km/hr" && speedTo === "knot" ) {
        const result = input * 0.539957;
        para.innerText = speedConversionResult(input, speedFrom, result, speedTo);
    }  else if (speedFrom === "km/hr" && speedTo === "mile/hr" ) {
        const result = input * 0.621371;
        para.innerText = speedConversionResult(input, speedFrom, result, speedTo);
    }

    //knot
    else if (speedFrom === "knot" && speedTo === "foot/sec") {
        const result = input * 1.68781;
        para.innerText = speedConversionResult(input, speedFrom, result, speedTo);
    } else if (speedFrom === "knot" && speedTo === "m/s" ) {
        const result = input * 0.51444;
        para.innerText = speedConversionResult(input, speedFrom, result, speedTo);
    } else if (speedFrom === "knot" && speedTo === "km/hr" ) {
        const result = input * 1.852;
        para.innerText = speedConversionResult(input, speedFrom, result, speedTo);
    } else if (speedFrom === "knot" && speedTo === "knot" ) {
        const result = input * 1;
        para.innerText = speedConversionResult(input, speedFrom, result, speedTo);
    }  else if (speedFrom === "knot" && speedTo === "mile/hr" ) {
        const result = input * 1.15078;
        para.innerText = speedConversionResult(input, speedFrom, result, speedTo);
    }
}


//Pressuere Function
function pressureConvertor () {
    const input = parseFloat(document.getElementById("input").value);
    const pressFrom = (document.getElementById("pressFrom").value);
    const pressTo = (document.getElementById("pressTo").value);

    if (pressFrom === "bar" && pressTo === "torr") {
        const result = input * 750.062;
        para.innerText = pressureConversionResult(input, pressFrom, result, pressTo);
    } else if (pressFrom === "bar" && pressTo === "pascal") {
        const result = input * 100000;
        para.innerText = pressureConversionResult(input, pressFrom, result, pressTo);
    } else if (pressFrom === "bar" && pressTo === "pound/square-inch") {
        const result = input * 14.5038;
        para.innerText = pressureConversionResult(input, pressFrom, result, pressTo);
    } else if (pressFrom === "bar" && pressTo === "std-atmosphere") {
        const result = input * 0.986923;
        para.innerText = pressureConversionResult(input, pressFrom, result, pressTo);
    } else if (pressFrom === "bar" && pressTo === "bar") {
        const result = input * 1;
        para.innerText = pressureConversionResult(input, pressFrom, result, pressTo);
    }

    //torr
    else if (pressFrom === "torr" && pressTo === "torr") {
        const result = input * 1;
        para.innerText = pressureConversionResult(input, pressFrom, result, pressTo);
    } else if (pressFrom === "torr" && pressTo === "pascal") {
        const result = input * 133.322;
        para.innerText = pressureConversionResult(input, pressFrom, result, pressTo);
    } else if (pressFrom === "torr" && pressTo === "pound/square-inch") {
        const result = input * 0.0193368;
        para.innerText = pressureConversionResult(input, pressFrom, result, pressTo);
    } else if (pressFrom === "torr" && pressTo === "std-atmosphere") {
        const result = input * 0.00131579;
        para.innerText = pressureConversionResult(input, pressFrom, result, pressTo);
    } else if (pressFrom === "torr" && pressTo === "bar") {
        const result = input * 0.00133322;
        para.innerText = pressureConversionResult(input, pressFrom, result, pressTo);
    }

    //pascal
    else if (pressFrom === "pascal" && pressTo === "torr") {
        const result = input * 0.00750062;
        para.innerText = pressureConversionResult(input, pressFrom, result, pressTo);
    } else if (pressFrom === "pascal" && pressTo === "pascal") {
        const result = input * 1;
        para.innerText = pressureConversionResult(input, pressFrom, result, pressTo);
    } else if (pressFrom === "pascal" && pressTo === "pound/square-inch") {
        const result = input * 0.000145038;
        para.innerText = pressureConversionResult(input, pressFrom, result, pressTo);
    } else if (pressFrom === "pascal" && pressTo === "std-atmosphere") {
        const result = input * 9.8692e-6;
        para.innerText = pressureConversionResult(input, pressFrom, result, pressTo);
    } else if (pressFrom === "pascal" && pressTo === "bar") {
        const result = input * 1e-5;
        para.innerText = pressureConversionResult(input, pressFrom, result, pressTo);
    }

    //Pound / Square Inch
    else if (pressFrom === "pound/square-inch" && pressTo === "torr") {
        const result = input * 51.7149;
        para.innerText = pressureConversionResult(input, pressFrom, result, pressTo);
    } else if (pressFrom === "pound/square-inch" && pressTo === "pascal") {
        const result = input * 6894.76;
        para.innerText = pressureConversionResult(input, pressFrom, result, pressTo);
    } else if (pressFrom === "pound/square-inch" && pressTo === "pound/square-inch") {
        const result = input * 1;
        para.innerText = pressureConversionResult(input, pressFrom, result, pressTo);
    } else if (pressFrom === "pound/square-inch" && pressTo === "std-atmosphere") {
        const result = input * 0.068046;
        para.innerText = pressureConversionResult(input, pressFrom, result, pressTo);
    } else if (pressFrom === "pound/square-inch" && pressTo === "bar") {
        const result = input * 0.0689476;
        para.innerText = pressureConversionResult(input, pressFrom, result, pressTo);
    }

    //std. Atmosphere
    else if (pressFrom === "std-atmosphere" && pressTo === "torr") {
        const result = input * 760;
        para.innerText = pressureConversionResult(input, pressFrom, result, pressTo);
    } else if (pressFrom === "std-atmosphere" && pressTo === "pascal") {
        const result = input * 101325;
        para.innerText = pressureConversionResult(input, pressFrom, result, pressTo);
    } else if (pressFrom === "std-atmosphere" && pressTo === "pound/square-inch") {
        const result = input * 14.6959;
        para.innerText = pressureConversionResult(input, pressFrom, result, pressTo);
    } else if (pressFrom === "std-atmosphere" && pressTo === "std-atmosphere") {
        const result = input * 1;
        para.innerText = pressureConversionResult(input, pressFrom, result, pressTo);
    } else if (pressFrom === "std-atmosphere" && pressTo === "bar") {
        const result = input * 1.01325;
        para.innerText = pressureConversionResult(input, pressFrom, result, pressTo);
    }

}


// Mass 
function massConvertor () {
    const massFrom = (document.getElementById("massFrom").value);
    const massTo = (document.getElementById("massTo").value);
    const input = parseFloat(document.getElementById("input").value);

    // Gram
    if (massFrom === "gram" && massTo === "kilogram") {
        const result = input * 0.001;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "gram" && massTo === "tonne") {
        const result = input * 1e-6;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "gram" && massTo === "gram") {
        const result = input * 1;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "gram" && massTo === "milligram") {
        const result = input * 1000;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "gram" && massTo === "microgram") {
        const result = input * 1e+6;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "gram" && massTo === "imperial-ton") {
        const result = input * 9.8421e-7;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "gram" && massTo === "us-ton") {
        const result = input * 1.1023e-6;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "gram" && massTo === "stone") {
        const result = input * 0.000157473;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "gram" && massTo === "pound") {
        const result = input * 0.00220462;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "gram" && massTo === "ounce") {
        const result = input * 0.035274;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    }


    // Kilogram
    else if (massFrom === "kilogram" && massTo === "kilogram") {
        const result = input * 1;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "kilogram" && massTo === "tonne") {
        const result = input * 0.001;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "kilogram" && massTo === "gram") {
        const result = input * 1000;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "kilogram" && massTo === "milligram") {
        const result = input * 1e+6;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "kilogram" && massTo === "microgram") {
        const result = input * 1e+9;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "kilogram" && massTo === "imperial-ton") {
        const result = input * 0.000984207;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "kilogram" && massTo === "us-ton") {
        const result = input * 0.00110231;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "kilogram" && massTo === "stone") {
        const result = input * 0.157473;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "kilogram" && massTo === "pound") {
        const result = input * 2.20462;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "kilogram" && massTo === "ounce") {
        const result = input * 35.274;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    }


    //Tonne
    else if (massFrom === "tonne" && massTo === "kilogram") {
        const result = input * 1000;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "tonne" && massTo === "tonne") {
        const result = input * 1;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "tonne" && massTo === "gram") {
        const result = input * 1e+6;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "tonne" && massTo === "milligram") {
        const result = input * 1e+9;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "tonne" && massTo === "microgram") {
        const result = input * 1e+12;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "tonne" && massTo === "imperial-ton") {
        const result = input * 0.0984207;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "tonne" && massTo === "us-ton") {
        const result = input * 1.10231;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "tonne" && massTo === "stone") {
        const result = input * 157.473;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "tonne" && massTo === "pound") {
        const result = input * 2204.62;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "tonne" && massTo === "ounce") {
        const result = input * 35274;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    }

    //Milligram
    else if (massFrom === "milligram" && massTo === "kilogram") {
        const result = input * 1e-6;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "milligram" && massTo === "tonne") {
        const result = input * 1e-9;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "milligram" && massTo === "gram") {
        const result = input * 0.001;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "milligram" && massTo === "milligram") {
        const result = input * 1;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "milligram" && massTo === "microgram") {
        const result = input * 1000;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "milligram" && massTo === "imperial-ton") {
        const result = input * 9.8421e-10;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "milligram" && massTo === "us-ton") {
        const result = input * 1.1023e-9;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "milligram" && massTo === "stone") {
        const result = input * 1.5747e-7;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "milligram" && massTo === "pound") {
        const result = input * 2.2046e-6;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "milligram" && massTo === "ounce") {
        const result = input * 3.5274e-5;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    }

    //Microgram
    else if (massFrom === "microgram" && massTo === "kilogram") {
        const result = input * 1e-9;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "microgram" && massTo === "tonne") {
        const result = input * 1e-12;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "microgram" && massTo === "gram") {
        const result = input * 1e-6;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "microgram" && massTo === "milligram") {
        const result = input * 0.001;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "microgram" && massTo === "microgram") {
        const result = input * 1;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "microgram" && massTo === "imperial-ton") {
        const result = input * 9.8421e-13;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "microgram" && massTo === "us-ton") {
        const result = input * 1.1023e-12;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "microgram" && massTo === "stone") {
        const result = input * 1.5747e-10;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "microgram" && massTo === "pound") {
        const result = input * 2.2046e-9;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "microgram" && massTo === "ounce") {
        const result = input * 3.5274e-8;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    }

    //Imperial ton
    else if (massFrom === "imperial-ton" && massTo === "kilogram") {
        const result = input * 1016.05;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "imperial-ton" && massTo === "tonne") {
        const result = input * 1.01605;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "imperial-ton" && massTo === "gram") {
        const result = input * 1.016e+6;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "imperial-ton" && massTo === "milligram") {
        const result = input * 1.016e+9;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "imperial-ton" && massTo === "microgram") {
        const result = input * 1.016e+12;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "imperial-ton" && massTo === "imperial-ton") {
        const result = input * 1;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "imperial-ton" && massTo === "us-ton") {
        const result = input * 1.12;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "imperial-ton" && massTo === "stone") {
        const result = input * 160;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "imperial-ton" && massTo === "pound") {
        const result = input * 2240;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "imperial-ton" && massTo === "ounce") {
        const result = input * 35840;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    }

    // US ton
    else if (massFrom === "us-ton" && massTo === "kilogram") {
        const result = input * 907.185;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "us-ton" && massTo === "tonne") {
        const result = input * 0.907185;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "us-ton" && massTo === "gram") {
        const result = input * 907185;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "us-ton" && massTo === "milligram") {
        const result = input * 9.072e+8;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "us-ton" && massTo === "microgram") {
        const result = input * 9.072e+11;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "us-ton" && massTo === "imperial-ton") {
        const result = input * 0.892857;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "us-ton" && massTo === "us-ton") {
        const result = input * 1;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "us-ton" && massTo === "stone") {
        const result = input * 142.857;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "us-ton" && massTo === "pound") {
        const result = input * 2000;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "us-ton" && massTo === "ounce") {
        const result = input * 32000;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    }

    //Stone
    else if (massFrom === "stone" && massTo === "kilogram") {
        const result = input * 6.35029;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "stone" && massTo === "tonne") {
        const result = input * 0.00635029;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "stone" && massTo === "gram") {
        const result = input * 6350.29;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "stone" && massTo === "milligram") {
        const result = input * 6.35e+6;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "stone" && massTo === "microgram") {
        const result = input * 6.35e+9;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "stone" && massTo === "imperial-ton") {
        const result = input * 0.00625;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "stone" && massTo === "us-ton") {
        const result = input * 0.007;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "stone" && massTo === "stone") {
        const result = input * 1;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "stone" && massTo === "pound") {
        const result = input * 14;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "stone" && massTo === "ounce") {
        const result = input * 224;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    }

    //Pound
    else if (massFrom === "pound" && massTo === "kilogram") {
        const result = input * 0.453592;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "pound" && massTo === "tonne") {
        const result = input * 0.000453592;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "pound" && massTo === "gram") {
        const result = input * 453.592;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "pound" && massTo === "milligram") {
        const result = input * 453592;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "pound" && massTo === "microgram") {
        const result = input * 4.536e+8;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "pound" && massTo === "imperial-ton") {
        const result = input * 0.000446429;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "pound" && massTo === "us-ton") {
        const result = input * 0.0005;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "pound" && massTo === "stone") {
        const result = input * 0.0714286;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "pound" && massTo === "pound") {
        const result = input * 1;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "pound" && massTo === "ounce") {
        const result = input * 16;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    }

    //Ounce
    else if (massFrom === "ounce" && massTo === "kilogram") {
        const result = input * 0.0283495;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "ounce" && massTo === "tonne") {
        const result = input * 2.835e-5;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "ounce" && massTo === "gram") {
        const result = input * 28.3495;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "ounce" && massTo === "milligram") {
        const result = input * 28349.5;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "ounce" && massTo === "microgram") {
        const result = input * 2.835e+7;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "ounce" && massTo === "imperial-ton") {
        const result = input * 2.7902e-5;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "ounce" && massTo === "us-ton") {
        const result = input * 3.125e-5;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "ounce" && massTo === "stone") {
        const result = input * 0.00446429;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "ounce" && massTo === "pound") {
        const result = input * 0.0625;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    } else if (massFrom === "ounce" && massTo === "ounce") {
        const result = input * 1;
        para.innerText = massConversionResult(input, massFrom, result, massTo);
    }
}



// Length 
function lengthConvertor () {
    const optionFrom = (document.getElementById("option_from").value);
    const optionTo = (document.getElementById("option_to").value);
    const input = parseFloat(document.getElementById("input").value);

    // Meter
    if (optionFrom === "meter" && optionTo === "kiloMeter") {
        const result = input * 0.001;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "meter" && optionTo === "milliMeter"){
        const result = input * 1000;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "meter" && optionTo === "centiMeter"){
        const result = input * 100;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "meter" && optionTo === "microMeter"){
        const result = input * 1e+6;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "meter" && optionTo === "nanoMeter"){
        const result = input * 1e+9;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "meter" && optionTo === "mile"){
        const result = input * 0.000621371;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "meter" && optionTo === "yard"){
        const result = input * 1.09361;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "meter" && optionTo === "foot"){
        const result = input * 3.28084;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "meter" && optionTo === "inch"){
        const result = input * 39.3701;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "meter" && optionTo === "nauticalMile"){
        const result = input * 0.000539957;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "meter" && optionTo === "meter"){
        const result = input * 1;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    }
    
    // Kilometer
    else if (optionFrom === "kiloMeter" && optionTo === "meter"){
        const result = input * 1000;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "kiloMeter" && optionTo === "kiloMeter"){
        const result = input * 1;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "kiloMeter" && optionTo === "milliMeter"){
        const result = input * 1e+6;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "kiloMeter" && optionTo === "centiMeter"){
        const result = input * 100000;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "kiloMeter" && optionTo === "microMeter"){
        const result = input * 1e+9;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "kiloMeter" && optionTo === "nanoMeter"){
        const result = input * 1e+12;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "kiloMeter" && optionTo === "mile"){
        const result = input * 0.621371;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "kiloMeter" && optionTo === "yard"){
        const result = input * 1093.61;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "kiloMeter" && optionTo === "foot"){
        const result = input * 3280.84;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "kiloMeter" && optionTo === "inch"){
        const result = input * 39370.1;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "kiloMeter" && optionTo === "nauticalMile"){
        const result = input * 0.539957;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    }
    
    //Millimeter
    else if (optionFrom === "milliMeter" && optionTo === "meter"){
        const result = input * 0.001;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "milliMeter" && optionTo === "kiloMeter"){
        const result = input * 1e-6;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "milliMeter" && optionTo === "centiMeter"){
        const result = input * 0.1;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "milliMeter" && optionTo === "milliMeter"){
        const result = input * 1;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "milliMeter" && optionTo === "microMeter"){
        const result = input * 1000;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "milliMeter" && optionTo === "nanoMeter"){
        const result = input * 1e+6;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "milliMeter" && optionTo === "mile"){
        const result = input * 6.2137e-7;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "milliMeter" && optionTo === "yard"){
        const result = input * 0.00109361;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "milliMeter" && optionTo === "foot"){
        const result = input * 0.00328084;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "milliMeter" && optionTo === "inch"){
        const result = input * 0.0393701;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "milliMeter" && optionTo === "nauticalMile"){
        const result = input * 5.3996e-7;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    }
    
    // Centimeter
    else if (optionFrom === "centiMeter" && optionTo === "meter"){
        const result = input * 0.01;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "centiMeter" && optionTo === "kiloMeter"){
        const result = input * 1e-5;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "centiMeter" && optionTo === "centiMeter"){
        const result = input * 1;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "centiMeter" && optionTo === "milliMeter"){
        const result = input * 10;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "centiMeter" && optionTo === "microMeter"){
        const result = input * 10000;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "centiMeter" && optionTo === "nanoMeter"){
        const result = input * 1e+7;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "centiMeter" && optionTo === "mile"){
        const result = input * 6.2137e-6;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "centiMeter" && optionTo === "yard"){
        const result = input * 0.0109361;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "centiMeter" && optionTo === "foot"){
        const result = input * 0.0328084;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "centiMeter" && optionTo === "inch"){
        const result = input * 0.393701;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "centiMeter" && optionTo === "nauticalMile"){
        const result = input * 5.3996e-6;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    }
    
    // Micrometer
    else if (optionFrom === "microMeter" && optionTo === "meter"){
        const result = input * 1e-6;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "microMeter" && optionTo === "kiloMeter"){
        const result = input * 1e-9;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "microMeter" && optionTo === "centiMeter"){
        const result = input * 1e-4;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "microMeter" && optionTo === "milliMeter"){
        const result = input * 0.001;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "microMeter" && optionTo === "microMeter"){
        const result = input * 1;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "microMeter" && optionTo === "nanoMeter"){
        const result = input * 1000;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "microMeter" && optionTo === "mile"){
        const result = input * 6.2137e-10;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "microMeter" && optionTo === "yard"){
        const result = input * 1.0936e-6;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "microMeter" && optionTo === "foot"){
        const result = input * 3.2808e-6;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "microMeter" && optionTo === "inch"){
        const result = input * 3.937e-5;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "microMeter" && optionTo === "nauticalMile"){
        const result = input * 5.3996e-10;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    }
    
    // Nanometer
    else if (optionFrom === "nanoMeter" && optionTo === "meter"){
        const result = input * 1e-9;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "nanoMeter" && optionTo === "kiloMeter"){
        const result = input * 1e-12;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "nanoMeter" && optionTo === "centiMeter"){
        const result = input * 1e-7;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "nanoMeter" && optionTo === "milliMeter"){
        const result = input * 1e-6;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "nanoMeter" && optionTo === "microMeter"){
        const result = input * 0.001;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "nanoMeter" && optionTo === "nanoMeter"){
        const result = input * 1;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "nanoMeter" && optionTo === "mile"){
        const result = input * 6.2137e-13;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "nanoMeter" && optionTo === "yard"){
        const result = input * 1.0936e-9;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "nanoMeter" && optionTo === "foot"){
        const result = input * 3.2808e-9;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "nanoMeter" && optionTo === "inch"){
        const result = input * 3.937e-8;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "nanoMeter" && optionTo === "nauticalMile"){
        const result = input * 5.3996e-13;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    }
    
    // Miles
    else if (optionFrom === "mile" && optionTo === "meter"){
        const result = input * 1609.34;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "mile" && optionTo === "kiloMeter"){
        const result = input * 1.60934;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "mile" && optionTo === "centiMeter"){
        const result = input * 160934;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "mile" && optionTo === "milliMeter"){
        const result = input * 1.609e+6;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "mile" && optionTo === "microMeter"){
        const result = input * 1.609e+9;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "mile" && optionTo === "nanoMeter"){
        const result = input * 1.609e+12;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "mile" && optionTo === "mile"){
        const result = input * 1;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "mile" && optionTo === "yard"){
        const result = input * 1760;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "mile" && optionTo === "foot"){
        const result = input * 5280;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "mile" && optionTo === "inch"){
        const result = input * 63360;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "mile" && optionTo === "nauticalMile"){
        const result = input * 0.868976;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    }
    
    // Yard
    else if (optionFrom === "yard" && optionTo === "meter"){
        const result = input * 0.9144;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "yard" && optionTo === "kiloMeter"){
        const result = input * 0.0009144;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "yard" && optionTo === "centiMeter"){
        const result = input * 91.44;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "yard" && optionTo === "milliMeter"){
        const result = input * 914.4;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "yard" && optionTo === "microMeter"){
        const result = input * 914400;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "yard" && optionTo === "nanoMeter"){
        const result = input * 9.144e+8;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "yard" && optionTo === "mile"){
        const result = input * 0.000568182;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "yard" && optionTo === "yard"){
        const result = input * 1;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "yard" && optionTo === "foot"){
        const result = input * 3;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "yard" && optionTo === "inch"){
        const result = input * 36;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "yard" && optionTo === "nauticalMile"){
        const result = input * 0.000493737;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    }
    
    // Foot
    else if (optionFrom === "foot" && optionTo === "meter"){
        const result = input * 0.3048;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "foot" && optionTo === "kiloMeter"){
        const result = input * 0.0003048;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "foot" && optionTo === "centiMeter"){
        const result = input * 30.48;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "foot" && optionTo === "milliMeter"){
        const result = input * 304.8;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "foot" && optionTo === "microMeter"){
        const result = input * 304800;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "foot" && optionTo === "nanoMeter"){
        const result = input * 3.048e+8;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "foot" && optionTo === "mile"){
        const result = input * 0.000189349;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "foot" && optionTo === "yard"){
        const result = input * 0.333333;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "foot" && optionTo === "foot"){
        const result = input * 1;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "foot" && optionTo === "inch"){
        const result = input * 12;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "foot" && optionTo === "nauticalMile"){
        const result = input * 0.000164579;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    }
    
    //Inch
    else if (optionFrom === "inch" && optionTo === "meter"){
        const result = input * 0.0254;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "inch" && optionTo === "kiloMeter"){
        const result = input * 2.54e-5;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "inch" && optionTo === "centiMeter"){
        const result = input * 2.54;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "inch" && optionTo === "milliMeter"){
        const result = input * 25.4;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "inch" && optionTo === "microMeter"){
        const result = input * 25400;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "inch" && optionTo === "nanoMeter"){
        const result = input * 2.54e+7;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "inch" && optionTo === "mile"){
        const result = input * 1.5783e-5;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "inch" && optionTo === "yard"){
        const result = input * 0.0277778;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "inch" && optionTo === "foot"){
        const result = input * 0.0833333;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "inch" && optionTo === "inch"){
        const result = input * 1;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "inch" && optionTo === "nauticalMile"){
        const result = input * 1.3715e-5;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    }
    
    //Nautical Miles
    else if (optionFrom === "nauticalMile" && optionTo === "meter"){
        const result = input * 1852;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "nauticalMile" && optionTo === "kiloMeter"){
        const result = input * 1.852;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "nauticalMile" && optionTo === "centiMeter"){
        const result = input * 185200;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "nauticalMile" && optionTo === "milliMeter"){
        const result = input * 1.852e+6;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "nauticalMile" && optionTo === "microMeter"){
        const result = input * 1.852e+9;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "nauticalMile" && optionTo === "nanoMeter"){
        const result = input * 1.852e+12;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "nauticalMile" && optionTo === "mile"){
        const result = input * 1.15078;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "nauticalMile" && optionTo === "yard"){
        const result = input * 2025.37;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "nauticalMile" && optionTo === "foot"){
        const result = input * 6076.12;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "nauticalMile" && optionTo === "inch"){
        const result = input * 72913.4;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    } else if (optionFrom === "nauticalMile" && optionTo === "nauticalMile"){
        const result = input * 1;
         para.innerText = formatConversionResult(input, optionFrom, result, optionTo);
    }

}

// Hide Error Message
const errorMessage = document.getElementById("errorMessage");
const fromElements = document.querySelectorAll(".from");
const toElements = document.querySelectorAll(".to");

const hideErrorMessage = () => {
    errorMessage.style.display = "none";
}

input.addEventListener("input", hideErrorMessage);
units.addEventListener("change", hideErrorMessage);
fromElements.forEach((fromElement) => {
    fromElement.addEventListener("change", hideErrorMessage);
});
toElements.forEach((toElement) => {
    toElement.addEventListener("change", hideErrorMessage);
})

btn.addEventListener("click", function() {
    // const errorMessage = document.getElementById("errorMessage");
    const units = document.getElementById("units");
    // const From = document.querySelector(".from");
    // const To = document.querySelector(".to");

    // Error Message
    if (input.value === "") {
        errorMessage.innerText = "Please enter a value";
        errorMessage.style.display = "inline-block";
    }
    if (units.value === "select" || Array.from(fromElements).some(from => from.value === "select") || Array.from(toElements).some(to => to.value === "select")) {
        errorMessage.innerText = "Please select unit";
        errorMessage.style.display = "inline-block";
    }

    // If all conditions are met, proceed with the conversion logic
    if (units.value === "length") {
        lengthConvertor();
        errorMessage.style.display = "none";
    } else if (units.value === "mass") {
        massConvertor();
        errorMessage.style.display = "none";
    } else if (units.value === "pressure") {
        pressureConvertor();
        errorMessage.style.display = "none";
    } else if (units.value === "speed") {
        speedConvertor();
        errorMessage.style.display = "none";
    }
});

