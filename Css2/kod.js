function saatMetin(){
    let saat = new Date();
    let adres = document.querySelector(".text");
    if(saat.getSeconds()<10){
        adres.innerHTML = 'Kodluyoruz ilk ödevini kutluyoruz. Saat: ' + saat.getHours() + ':' + saat.getMinutes() + ':0' + saat.getSeconds();
    }
    else if(saat.getSeconds()>10){
        adres.innerHTML = 'Kodluyoruz ilk ödevini kutluyoruz. Saat: ' + saat.getHours() + ':' + saat.getMinutes() + ':' + saat.getSeconds();
    }
}

document.addEventListener("DOMContentLoaded", setInterval(function() {
saatMetin();},1000));
