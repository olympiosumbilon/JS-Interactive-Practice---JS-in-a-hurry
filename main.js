//Menu Section
document.querySelector("#open-nav-menu").addEventListener("click", function(){
            console.log("clicked");
            document.querySelector("header nav .wrapper").classList.add("nav-open");
});

document.querySelector("#close-nav-menu").addEventListener("click", function(){
            document.querySelector("header nav .wrapper").classList.remove("nav-open");
});

//Greeting Section

const logoText = "Olympio Sumbilon Jr";
const greetingText = "Happy naka?";
const weatherCondition = "sunny";
const userLocation = "Philippines";
let temperature = 78.8674;
let weatherText = `The weather is <strong> ' ${weatherCondition} ' </strong> in ${userLocation} and it's ${temperature.toFixed(1)}°C outside.`;

document.querySelector(".logo-text").innerHTML = logoText;
document.querySelector("#greeting").innerHTML = greetingText;
document.querySelector("p#weather").innerHTML = weatherText;
document.querySelector("p#weather").innerHTML = weatherText;
