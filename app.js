// @ts-nocheck

// handle memory eightGB
document.getElementById("eightGB").addEventListener("click", function (){
    updateMemoryProduct(100);
})
// handle memory sixteenGB
document.getElementById("sixteenGB").addEventListener("click", function (){
    updateMemoryProduct(200);
})

// function for handle memory product
function updateMemoryProduct(price){
    var memoryCost = document.getElementById("memory-cost");
    memoryCost.innerText = price;

    // get all the id where the memory cost should be updated
    const bestPrice = document.getElementById("best-price").innerText;
    const storageCost = document.getElementById("storage-cost").innerText;
    const deliveryCost = document.getElementById("delivery-cost").innerText;
    
    let totalPrice = document.getElementById("total-price");

    totalPrice.innerText = parseInt(bestPrice) + parseInt(storageCost) + parseInt(deliveryCost) + parseInt(memoryCost.innerText);
};

// function for handle ssd product
function updateStorageProduct(price){
    const storageCost = document.getElementById("storage-cost");
    storageCost.innerText = price;

    // get all values
    const bestPrice = document.getElementById("best-price").innerText;
    const memoryCost = document.getElementById("memory-cost").innerText;
    const deliveryCost = document.getElementById("delivery-cost").innerText;
    const totalPrice = document.getElementById("total-price");

    // set all values
    totalPrice.innerText = parseInt(bestPrice) + parseInt(memoryCost) + parseInt(storageCost.innerText) + parseInt(deliveryCost);
}

// handle storage ssd1
document.getElementById("ssd1").addEventListener("click", function (){
    updateStorageProduct(200);
})
// handle storage ssd2
document.getElementById("ssd2").addEventListener("click", function (){
    updateStorageProduct(400);
})
// handle storage ssd1
document.getElementById("ssd3").addEventListener("click", function (){
    updateStorageProduct(600);
})

// function for handle delivery
function updateDeliveryProduct(price){
    const deliveryCost = document.getElementById("delivery-cost");
    deliveryCost.innerText = price;

    // get all values
    const bestPrice = document.getElementById("best-price").innerText;
    const memoryCost = document.getElementById("memory-cost").innerText;
    const storageCost = document.getElementById("storage-cost").innerText;
    const totalPrice = document.getElementById("total-price");

    // set all the values
    totalPrice.innerText = parseInt(bestPrice) + parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCost.innerText);
}

// handle free delivery
document.getElementById("free-delivery").addEventListener("click", function (){
    updateDeliveryProduct(0);
})

// handle paid delivery
document.getElementById("paid-delivery").addEventListener("click", function (){
    updateDeliveryProduct(20);
});

// handle promo code
const fakeCode = "pHero";
document.getElementById("apply-btn").addEventListener("click", function (){
    const code = document.getElementById("promo-input").value;
    if (code === fakeCode){
        const totalPrice = document.getElementById("total-price");
        let totalPriceValue = parseFloat(totalPrice.innerText) ;

        const discount = (totalPriceValue*20) /100;
        // @ts-ignore
        totalPrice.innerText = totalPriceValue - discount;
        console.log(discount)
        // console.log("YOU get 20% cashback")
    }
    else{
        console.log("YOU never get it");
    }
})
