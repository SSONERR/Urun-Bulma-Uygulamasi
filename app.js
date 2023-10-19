//Ürün bulma uygulaması
let yeniSatir = "\n"

let ürün1 = {
    isim: "SANTACRUZ V10",
    katagori: "DAĞ BİSİKLETİ",
    fiyat: "125.000"
}
let ürün2 = {
    isim: "SANTACRUZ NOMAD",
    katagori: "DAĞ BİSİKLETİ",
    fiyat: "225.000"
}
let ürün3 = {
    isim: "SANTACRUZ BULLIT",
    katagori: "DAĞ BİSİKLETİ",
    fiyat: "150.000"
}
let ürün4 = {
    isim: "TREK RAIL 9.5",
    katagori: "DAĞ BİSİKLETİ",
    fiyat: "115.000"
}
let ürün5 = {
    isim: "TREK MARLİN",
    katagori: "DAĞ BİSİKLETİ",
    fiyat: "69.000"
}
let ürün6 = {
    isim: "TREK X5",
    katagori: "DAĞ BİSİKLETİ",
    fiyat: "350.000"
}
let ürün7 = {
    isim: "SALCANO ASSOS",
    katagori: "DAĞ BİSİKLETİ",
    fiyat: "25.000"
}

let ürünler = [ürün1, ürün2, ürün3, ürün4, ürün5, ürün6, ürün7]
let filtreliÜrünler = []
let aranan = prompt("Lütfen aramak istediğiniz kelimeyi giriniz : ")

doldur(ürünler)
yazdır(filtreliÜrünler)





function doldur(ürünler) {
    ürünler.forEach(function (ürün) {
        if (ürün.isim.toUpperCase().includes(aranan.toUpperCase())) {
            filtreliÜrünler.push(ürün)
        }
    })
}


function yazdır(ürünler) {
    
    ürünler.forEach(function (ürün) {
        console.log("---------------------------------")
        console.log("|" + ürün.isim + "|" + ürün.fiyat + " TL" + "|" + ürün.katagori + "|")
        console.log("---------------------------------")
        
    })
    alert("Bulunan ürünler console üzerine yazdırıldı !")
}