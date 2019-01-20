function Persegi() {
    const s = window.prompt("Masukan Sisi");
    hasil = s*s;
    result.innerHTML = "Luas Persegi = "+hasil+" CM";
}
function Persegipanjang(){
    const p = window.prompt("Masukan Panjang");
    const l = window.prompt("Masukan Lebar");
    hasil = p*l;
    result.innerHTML = "Luas PersegiPanjang = "+hasil+" CM";
}
function segitiga(){
    const a = window.prompt("Masukan Alas");
    const t = window.prompt("Masukan Tinggi");
    hasil = (a*t)/2;
    result.innerHTML = "Luas Segitiga = "+hasil+" CM";
}
function jajargenjang(){
    const a = window.prompt("Masukan Alas");
    const t = window.prompt("Masukan Tinggi");
    hasil = a*t;
    result.innerHTML = "Luas Jajargenjang = "+hasil+" CM";
}
function layang(){
    const d1 = window.prompt("Masukan Diagonal 1");
    const d2 = window.prompt("Masukan Diagonal 2");
    hasil = (d1*d2)/2;
    result.innerHTML = "Luas Layang-layang = "+hasil+" CM";
}
function ketupat(){
    const d1 = window.prompt("Masukan Diagonal 1");
    const d2 = window.prompt("Masukan Diagonal 2");
    hasil = (d1*d2)/2;
    result.innerHTML = "Luas Belah Ketupat = "+hasil+" CM";
}

function lingkaran(){
    const r = window.prompt("Masukan Jari-jari");
    hasil = (r*r)*(22/7);
    result.innerHTML = "Luas Lingkaran = "+hasil+" CM";
}
function reset(){
    result.innerHTML = "";
}