let openModal = document.getElementById('openModal');
let modalBitcoin = document.getElementById('modal');
let closeModal = document.getElementById('close');


openModal.onclick = function(){
    modalBitcoin.style.visibility = "visible";
}

closeModal.onclick = function(){
    modalBitcoin.style.visibility ="hidden";
}

modalBitcoin.onclick = function(){
    modalBitcoin.style.visibility = "hidden";
}