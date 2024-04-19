//Menu Section
document.querySelector("#open-nav-menu").addEventListener("click", function(){
    console.log("clicked");
    document.querySelector("header nav .wrapper").classList.add("nav-open");
});

document.querySelector("#close-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
});


//Convertion of Temperature.
function celsiusToFahr(temperature){
let fahr = (temperature * 9/5) + 32;
return fahr;
}


//Greeting Section

let currentHour = new Date().getHours();
let greetingText;
if(currentHour < 12 ){
    greetingText = "Good morning!";
}else if(currentHour >= 12 && currentHour <= 17){
    greetingText = "Good afternoon!";
}else{
    greetingText = "Good evening!";
}


const logoText = "Olympio Sumbilon Jr";
const weatherCondition = "sunny";
const userLocation = "Philippines";
let temperature = 30;
let celsiusText = `The weather is <strong> ' ${weatherCondition} ' </strong> in ${userLocation} and it's ${temperature.toFixed(1)}°C outside.`;
let fahrText = `The weather is <strong> ' ${weatherCondition} ' </strong> in ${userLocation} and it's ${temperature.toFixed(1)}°F outside.`;

document.querySelector(".logo-text").innerHTML = logoText;
document.querySelector("#greeting").innerHTML = greetingText;
document.querySelector("p#weather").innerHTML = celsiusText;

document.querySelector(".weather-group").addEventListener("click", function(e){
//celsius
//fahr
if(e.target.id == "celsius"){
document.querySelector("p#weather").innerHTML = celsiusText;
} else if(e.target.id == "fahr"){
document.querySelector("p#weather").innerHTML = fahrText;
}
//console.log(e.target.id);
});

//clock
// setInterval(function(){
//     let localTime = new Date();
//     document.querySelector("span[data-time=hours]").textContent = localTime.getHours().toString().padStart(2,"0");
//     document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes().toString().padStart(2,"0");
//     document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds().toString().padStart(2,"0");
// },1000);


setInterval(function(){
let localTime = new Date();

let hours = localTime.getHours();
let minutes = localTime.getMinutes();
let seconds = localTime.getSeconds();

// Convert hours to 12-hour format
let period = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12 || 12; // Ensure that 12 AM is displayed correctly

// Add leading zeros to minutes and seconds if needed
minutes = minutes < 10 ? '0' + minutes : minutes;
seconds = seconds < 10 ? '0' + seconds : seconds;

// Construct the time string with AM/PM
let timeString = `${hours}:${minutes}:${seconds} ${period}`;

// Set the text content of the span elements with the formatted time
document.querySelector("span[data-time=hours]").textContent = hours.toString().padStart(2,"0");
document.querySelector("span[data-time=minutes]").textContent = minutes;
document.querySelector("span[data-time=seconds]").textContent = `${seconds} ${period}`;

},1000);

//Gallery Section using object

const galleryImages = [
{
    src:"./assets/gallery/image1.jpg",
    alt:"Thumbnail Image 1",

    /*You don't need to include qoutition in properties, but you need to include 
      qoutations in the values */
},
{
    src:"./assets/gallery/image2.jpg",
    alt:"Thumbnail Image 2",

},
{
    src:"./assets/gallery/image3.jpg",
    alt:"Thumbnail Image 3",
}
/*What is the advantage using this ? -> we dont have to touch html and JS, all we need is to include the
images in the array of object */
];

// /* for (let i in galleryImages){
//     console.log(galleryImages[i]);
// } */
let mainImage = document.querySelector("#gallery > img");
let thumbnails = document.querySelector("#gallery .thumbnails");

mainImage.src = galleryImages[0].src;
mainImage.alt = galleryImages[0].alt;
//<img src="./assets/gallery/image1.jpg" 
//alt="Thumbnail Image 1" 
//data-array-index="0" data-selected="true">

//creating thumbnails
galleryImages.forEach(function(image, index){
let thumb = document.createElement("img");
thumb.src = image.src;
thumb.alt = image.alt;
thumb.dataset.arrayIndex = index;
thumb.dataset.selected = index === 0 ? true : false; // Ternary Condition
thumbnails.appendChild(thumb);

thumb.addEventListener("click", function(e){
        let selectedIndex = e.target.dataset.arrayIndex;
        let selectedImage = galleryImages[selectedIndex];
        mainImage.src = selectedImage.src;
        mainImage.alt = selectedImage.alt;

        thumbnails.querySelectorAll("img").forEach(function(img){
            img.dataset.selected = false;
        });
        e.target.selected.true;
});

}); 

//getting  classes and id of the HTML element.


