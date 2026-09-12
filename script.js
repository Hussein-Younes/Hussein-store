function openProduct(game) {
    window.location.href = "product.html?game=" + game;
}


let selectedPackage = "";
let selectedPrice = 0;


const products = {

    pubg: {
        name: "PUBG Mobile",
        image: "image/pubg_mobile.jpg",

        packages: [
            { name: "60 UC", price: 130 },
            { name: "325 UC", price: 610 },
            { name: "660 UC", price: 1220 },
            { name: "1800 UC", price: 3050 }
        ]
    },


    freefire: {
        name: "Free Fire",
        image: "image/freefire_img.jpg",

        packages: [
            { name: "100 Diamond", price: 132 },
            { name: "230 Diamond", price: 265 },
            { name: "581 Diamond", price: 645 },
            { name: "1200 Diamond", price: 1285 }
        ]
    },


    jawaker: {
        name: "Jawaker",
        image: "image/jawaker.jpg",

        packages: [
            { name: "10000 Coins", price: 157 },
            { name: "15000 Coins", price: 235 },
            { name: "20000 Coins", price: 310 },
            { name: "50000 Coins", price: 766 }
        ]
    },


    bubu: {
        name: "Bubu Live",
        image: "image/poopo.jpg",

        packages: [
            { name: "15000 Coins", price: 218 },
            { name: "25000 Coins", price: 357 },
            { name: "40000 Coins", price: 566 },
            { name: "100000 Coins", price: 1420 }
        ]
    },


    taka: {
        name: "Taka",
        image: "image/taka.jpg",

        packages: [
            { name: "10000 Coins", price: 148 },
            { name: "20000 Coins", price: 286 },
            { name: "40000 Coins", price: 565 },
            { name: "100000 Coins", price: 1395 }
        ]
    }

};



const urlParams = new URLSearchParams(window.location.search);

const game = urlParams.get("game");

const product = products[game];



if (product) {

    document.getElementById("product-name").textContent = product.name;


    const image = document.getElementById("product-image");

    image.src = product.image;

    image.alt = product.name;


    const packagesContainer = document.getElementById("packages");

    packagesContainer.innerHTML = "";


    product.packages.forEach(function(pkg) {

        const button = document.createElement("button");

        button.className = "package";


        button.innerHTML = `
            <strong>${pkg.name}</strong>
            <span>${pkg.price} SYP</span>
        `;


        button.onclick = function() {

            selectPackage(
                button,
                pkg.name,
                pkg.price
            );

        };


        packagesContainer.appendChild(button);

    });

}



function selectPackage(button, packageName, price) {

    document.querySelectorAll(".package").forEach(function(packageButton) {

        packageButton.classList.remove("active");

    });


    button.classList.add("active");


    selectedPackage = packageName;

    selectedPrice = price;


    document.getElementById("selected-package").textContent = packageName;


    document.getElementById("selected-price").textContent =
        price + " SYP";

}



function submitOrder() {

    const playerId = document.getElementById("player-id").value.trim();

    if (selectedPackage === "") {
        alert("اختر الباقة أولاً");
        return;
    }

    if (playerId === "") {
        alert("أدخل Player ID");
        return;
    }

    const productName = product.name;

    const url =
        "confirm.html?" +
        "product=" + encodeURIComponent(productName) +
        "&package=" + encodeURIComponent(selectedPackage) +
        "&playerId=" + encodeURIComponent(playerId) +
        "&price=" + encodeURIComponent(selectedPrice);

    window.location.href = url;
}