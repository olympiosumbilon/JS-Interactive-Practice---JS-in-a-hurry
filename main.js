//Menu Section
function menuHandler(){
//Menu Section
document.querySelector("#open-nav-menu").addEventListener("click", function(){
    console.log("clicked");
    document.querySelector("header nav .wrapper").classList.add("nav-open");
});

document.querySelector("#close-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
});

}
//Temperature Conversion Section.
function celsiusToFahr(temperature){
let fahr = (temperature * 9/5) + 32;
return fahr;
}
//Greeting Section
function greetingHandler(){
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
}
function clockHandler(){
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
}
//Gallery Section
function galleryHandler(){

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

}

const products = [
    {
      title: "AstroFiction",
      author: "John Doe",
      price: 49.9,
      image: "./assets/products/img6.png"
    },
    {
      title: "Space Odissey",
      author: "Marie Anne",
      price: 35,
      image: "./assets/products/img1.png"
    },
    {
      title: "Doomed City",
      author: "Jason Cobert",
      price: 0,
      image: "./assets/products/img2.png"
    },
    {
      title: "Black Dog",
      author: "John Doe",
      price: 85.35,
      image: "./assets/products/img3.png"
    },
    {
      title: "My Little Robot",
      author: "Pedro Paulo",
      price: 0,
      image: "./assets/products/img5.png"
    },
    {
      title: "Garden Girl",
      author: "Ankit Patel",
      price: 45,
      image: "./assets/products/img4.png"
    }
  ];

/* <div class="product-item">
    <img src="./assets/products/img1.png" alt="Space Odissey">
    <div class="product-details">
    <h3 class="product-title">Space Odissey</h3>
    <p class="product-author">Marie Anne</p>
    <p class="price-title">Price</p>
    <p class="product-price">$ 35.00</p>
    </div>
</div> */

//Populating Product Section
function populateProducts(productList){
    let productsSection = document.querySelector(".products-area");
    productsSection.textContent = "";
        //Run a loop to the product and creat an HTML for each Element ("product-item") for each of the 
        productList.forEach(function(product, index){
            //Create the HTML element for the individual product
            let productElm = document.createElement("div");
            productElm.classList.add("product-item");
    
            //Create the product image
            let productImage = document.createElement("img");
            productImage.src = product.image;
            productImage.alt = "Image for " + product.title;
    
            //Create the product details section
            let productDetails = document.createElement("div");
            productDetails.classList.add("product-details");
    
            //Create product title, author, pricetitle and price
            let productTitle = document.createElement("h3");
            productTitle.classList.add("product-title"); 
            productTitle.textContent = product.title;
            let productAuthor =document.createElement("p");
            productAuthor.classList.add("product-author");
            productAuthor.textContent = product.author;
    
            let priceTitle = document.createElement("p");
            priceTitle.classList.add("price-title");
            priceTitle.textContent = "Price";
    
            let productPrice = document.createElement("p");
            productPrice.classList.add("product-price");
            productPrice.textContent = product.price > 0 ?  "$" + product.price.toFixed(2) : "Free";
    
            //Append the product details
            productDetails.append(productTitle);
            productDetails.append(productAuthor);
            productDetails.append(priceTitle);
            productDetails.append(productPrice);
            
    
            // //Add all child HTML elements of the product
            productElm.append(productImage);
            productElm.append(productDetails);
    
            // //Add complete individual to the product section
            productsSection.append(productElm);
            
        });
}
function productsHandler(){

    //filter condition
    let freeProducts = products.filter(function(item){
        return !item.price || item.price <= 0;
    });
    let paidProducts = products.filter(function(item){
        return item.price >0;
    });
    populateProducts(products);

    //Product filtering
    document.querySelector(".products-filter label[for=all] span.product-amount").textContent = products.length;
    document.querySelector(".products-filter label[for=paid] span.product-amount").textContent = paidProducts.length;
    document.querySelector(".products-filter label[for=free] span.product-amount").textContent = freeProducts.length;

    let productFilter = document.querySelector(".products-filter");
    //click event for all,free,paid
    productFilter.addEventListener("click", function(e){
        if( e.target.id === "all"){
            populateProducts(products);
        }else if (e.target.id === "paid"){
            populateProducts(paidProducts);
        }else if(e.target.id === "free")
            populateProducts(freeProducts);
    });
}
function footerHandler(){
    let currentYear = new Date().getFullYear();
    document.querySelector("footer").textContent = `©️ ${currentYear} - All rigths reserved`;
    console.log(currentYear);
}

//Page Loader
menuHandler();
greetingHandler();
clockHandler();
galleryHandler();
productsHandler();
footerHandler();


