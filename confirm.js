const params = new URLSearchParams(window.location.search);

const product = params.get("product");
const packageName = params.get("package");
const playerId = params.get("playerId");
const price = params.get("price");


document.getElementById("confirm-product").textContent =
    product || "-";

document.getElementById("confirm-package").textContent =
    packageName || "-";

document.getElementById("confirm-player-id").textContent =
    playerId || "-";

document.getElementById("confirm-price").textContent =
    price ? price + " ل.س" : "-";


function confirmOrder() {

    alert(
        "تم تأكيد الطلب بنجاح ✅\n\n" +
        "المنتج: " + product + "\n" +
        "الباقة: " + packageName + "\n" +
        "Player ID: " + playerId + "\n" +
        "السعر: " + price + " ل.س"
    );

}