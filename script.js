// 8 GB MEMORY INCLUDE

document.getElementById('ram8gigs').addEventListener('click', function () {
    const extraMemory = document.getElementById('extra-memory-cost');
    extraMemory.innerHTML = 0;
});

// 16 GB MEMORY INCLUDE

document.getElementById('ram16gigs').addEventListener('click', function () {
    const extraMemory = document.getElementById('extra-memory-cost');
    extraMemory.innerHTML = 180;
});

//Storage 256 gigs 
document.getElementById('storage256gigs').addEventListener('click', function () {
    const extraMemory = document.getElementById('extra-storage-cost');
    extraMemory.innerHTML = 0;
});

//Storage 512 gigs
document.getElementById('storage512gigs').addEventListener('click', function () {
    const extraMemory = document.getElementById('extra-storage-cost');
    extraMemory.innerHTML = 100;
});
//Storage 1 tb
document.getElementById('storage1tb').addEventListener('click', function () {
    const extraMemory = document.getElementById('extra-storage-cost');
    extraMemory.innerHTML = 180;
});

//Free Delivery
document.getElementById('free-delivery').addEventListener('click', function () {
    const extraMemory = document.getElementById('delivery-cost');
    extraMemory.innerHTML = 0;
});

//Paid Delivery
document.getElementById('paid-delivery').addEventListener('click', function () {
    const extraMemory = document.getElementById('delivery-cost');
    extraMemory.innerHTML = 20;
});

//Update Total
addEventListener('click', function () {

    const basePrice = parseInt(document.getElementById('base-price').innerHTML);

    const extraRam = parseInt(document.getElementById('extra-memory-cost').innerHTML);

    const extraStorage = parseInt(document.getElementById('extra-storage-cost').innerHTML);

    const deliveryCost = parseInt(document.getElementById('delivery-cost').innerHTML);

    // console.log(basePrice, extraRam, extraStorage, deliveryCost);

    const totalPrice = basePrice + extraRam + extraStorage + deliveryCost;

    // update total in inner HTML 

    document.getElementById('initial-total').innerHTML = totalPrice;

    //CHECK STEVEKAKU
    const promocode = 'stevekaku';
    const inputPromo = document.getElementById('promo-input').value;

    if (promocode == inputPromo) {
        document.getElementById('grand-total').innerHTML = totalPrice - (totalPrice * 0.2);
    }
    else {
        document.getElementById('grand-total').innerHTML = totalPrice;
    }

})