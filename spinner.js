function cdClear() {
    var wtarea = document.getElementById('codes');
    wtarea.value = '';
    wtarea.focus();
    document.getElementById('convert').disabled = false;
}
function cdConvert() {
 var ctarea = document.getElementById('codes'),
        cv = ctarea.value,
    cv = cv.replace(/\t/g, "    ");
    cv = cv.replace(/kamu/g, "anda");
    cv = cv.replace(/anda/g, "kamu");
    cv = cv.replace(/berakibat/g, "berdampak");
    cv = cv.replace(/berdampak/g, "berakibat");
    cv = cv.replace(/menyebabkan/g, "mengakibatkan");
    cv = cv.replace(/mengakibatkan/g, "menyebabkan");
    cv = cv.replace(/memakai/g, "mengenakan");
    cv = cv.replace(/mengenakan/g, "memakai");
    cv = cv.replace(/selain/g, "tak hanya");
    cv = cv.replace(/sangat/g, "amat");
    cv = cv.replace(/memadukan/g, "menggabungkan");
    cv = cv.replace(/menggabungkan/g, "memadukan");
    cv = cv.replace(/dengan/g, "bersama");
    cv = cv.replace(/selalu/g, "tetap");
    cv = cv.replace(/memadukan/g, "menggabungkan");
    cv = cv.replace(/memilih/g, "menentukan");
    cv = cv.replace(/menentukan/g, "memilih");
    cv = cv.replace(/memadukan/g, "menggabungkan");
    cv = cv.replace(/mungkin/g, "barang kali");
    cv = cv.replace(/seperti/g, "layaknya");
    cv = cv.replace(/agar dapat/g, "sehingga bisa");
    cv = cv.replace(/langkah-langkah/g, "beberapa langkah");
    cv = cv.replace(/bagi/g, "terhadap");
    cv = cv.replace(/untuk/g, "bagi");
    cv = cv.replace(/perkembangan/g, "rentetan");
    ctarea.value = cv;
    ctarea.focus();
    ctarea.select();};