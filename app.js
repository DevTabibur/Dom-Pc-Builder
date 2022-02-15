// @ts-nocheck
/*
document.getElementById("sixteenGB").addEventListener("click", function (){
    const memoryCost = document.getElementById("memory-cost");
    const memoryCostValue = memoryCost.innerText;
    memoryCost.innerText = 200;
    // console.log(memoryCostValue);

    // get the whole cost 
    const bestPrice = document.getElementById("best-price").innerText;
    const storageCost = document.getElementById("storage-cost").innerText;
    const deliveryCost = document.getElementById("delivery-cost").innerText;
    // addition the values
    const totalPrice = parseFloat(bestPrice) + parseFloat(storageCost) + parseFloat(deliveryCost) + parseFloat(memoryCostValue);
    console.log(totalPrice);
})
*/

// handle memory eightGB
document.getElementById("eightGB").addEventListener("click", function (){
    var memoryCost = document.getElementById("memory-cost");
    memoryCost.innerText = 100;

    // get all the id where the memory cost should be updated
    const bestPrice = document.getElementById("best-price").innerText;
    const storageCost = document.getElementById("storage-cost").innerText;
    const deliveryCost = document.getElementById("delivery-cost").innerText;
    
    let totalPrice = document.getElementById("total-price");

    totalPrice.innerText = parseInt(bestPrice) + parseInt(storageCost) + parseInt(deliveryCost) + parseInt(memoryCost.innerText);
    // console.log(bestPrice, storageCost, deliveryCost)
})

// handle memory sixteenGB
document.getElementById("sixteenGB").addEventListener("click", function (){
    var memoryCost = document.getElementById("memory-cost");
    memoryCost.innerText = 200;

    // get all the id where the memory cost should be updated
    const bestPrice = document.getElementById("best-price").innerText;
    const storageCost = document.getElementById("storage-cost").innerText;
    const deliveryCost = document.getElementById("delivery-cost").innerText;
    
    let totalPrice = document.getElementById("total-price");

    totalPrice.innerText = parseInt(bestPrice) + parseInt(storageCost) + parseInt(deliveryCost) + parseInt(memoryCost.innerText);
    // console.log(bestPrice, storageCost, deliveryCost)
})

// handle storage ssd1
// document.getElementById("ssd1").addEventListener("click", function (){
//     const storageCost = document.getElementById("storage-cost");
//     storageCost.innerText = 200;

//     // get all the id where the memory cost should be updated
//     const bestPrice = document.getElementById("best-price").innerText;
//     const storageCost = document.getElementById("storage-cost").innerText;
//     const deliveryCost = document.getElementById("delivery-cost").innerText;
    
//     let totalPrice = document.getElementById("total-price");

//     totalPrice.innerText = parseInt(bestPrice) + parseInt(storageCost) + parseInt(deliveryCost) + parseInt(memoryCost.innerText);
// })



// handle storage ssd1
document.getElementById("ssd1").addEventListener("click", function (){
    const storageCost = document.getElementById("storage-cost");
    storageCost.innerText = 200;

    // get all values
    const bestPrice = document.getElementById("best-price").innerText;
    const memoryCost = document.getElementById("memory-cost").innerText;
    const deliveryCost = document.getElementById("delivery-cost").innerText;
    const totalPrice = document.getElementById("total-price");

    // set all values
    totalPrice.innerText = parseInt(bestPrice) + parseInt(memoryCost) + parseInt(storageCost.innerText) + parseInt(deliveryCost);

    // console.log(parseInt(bestPrice), parseInt(memoryCost) , parseInt(storageCost.innerText) , parseInt(deliveryCost));
})

// handle storage ssd2
document.getElementById("ssd2").addEventListener("click", function (){
    const storageCost = document.getElementById("storage-cost");
    storageCost.innerText = 400;

    // get all values
    const bestPrice = document.getElementById("best-price").innerText;
    const memoryCost = document.getElementById("memory-cost").innerText;
    const deliveryCost = document.getElementById("delivery-cost").innerText;
    const totalPrice = document.getElementById("total-price");

    // set all values
    totalPrice.innerText = parseInt(bestPrice) + parseInt(memoryCost) + parseInt(storageCost.innerText) + parseInt(deliveryCost);

    // console.log(parseInt(bestPrice), parseInt(memoryCost) , parseInt(storageCost.innerText) , parseInt(deliveryCost));
})

// handle storage ssd3
document.getElementById("ssd3").addEventListener("click", function (){
    const storageCost = document.getElementById("storage-cost");
    storageCost.innerText = 600;

    // get all values
    const bestPrice = document.getElementById("best-price").innerText;
    const memoryCost = document.getElementById("memory-cost").innerText;
    const deliveryCost = document.getElementById("delivery-cost").innerText;
    const totalPrice = document.getElementById("total-price");

    // set all values
    totalPrice.innerText = parseInt(bestPrice) + parseInt(memoryCost) + parseInt(storageCost.innerText) + parseInt(deliveryCost);

    // console.log(parseInt(bestPrice), parseInt(memoryCost) , parseInt(storageCost.innerText) , parseInt(deliveryCost));
})


// handle free delivery
document.getElementById("free-delivery").addEventListener("click", function (){
    const deliveryCost = document.getElementById("delivery-cost");
    deliveryCost.innerText = 0;

    // get all values
    const bestPrice = document.getElementById("best-price").innerText;
    const memoryCost = document.getElementById("memory-cost").innerText;
    const storageCost = document.getElementById("storage-cost").innerText;
    const totalPrice = document.getElementById("total-price");

    // set all the values
    totalPrice.innerText = parseInt(bestPrice) + parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCost.innerText);

    console.log(parseInt(bestPrice) , parseInt(memoryCost) , parseInt(storageCost) , parseInt(deliveryCost.innerText))

})

// handle paid delivery
document.getElementById("paid-delivery").addEventListener("click", function (){
    const deliveryCost = document.getElementById("delivery-cost");
    deliveryCost.innerText = 20;

    // get all values
    const bestPrice = document.getElementById("best-price").innerText;
    const memoryCost = document.getElementById("memory-cost").innerText;
    const storageCost = document.getElementById("storage-cost").innerText;
    const totalPrice = document.getElementById("total-price");

    // set all the values
    totalPrice.innerText = parseInt(bestPrice) + parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCost.innerText);

    console.log(parseInt(bestPrice) , parseInt(memoryCost) , parseInt(storageCost) , parseInt(deliveryCost.innerText))

});


// handle promo code
document.getElementById("apply-btn").addEventListener("click", function (){
    const code = document.getElementById("promo-input").value;

    const fakeCode = "pHero";
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