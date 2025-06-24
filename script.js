document.getElementById("iznajmiDatum").min = new Date().toISOString().split("T")[0];
window.openRentalForm = function(dressName) {
    document.getElementById("dressName").value = dressName;
    document.getElementById("rentalModalLabel").innerText = "Iznajmljujete: " + dressName;

    const modal = new bootstrap.Modal(document.getElementById("rentalModal"));
    modal.show();
};
document.getElementById("rentalForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const ime = document.getElementById("iznajmiIme").value.trim();
    const email = document.getElementById("iznajmiEmail").value.trim();
    const datumInput = document.getElementById("iznajmiDatum");
    const datum = datumInput.value;
    const haljina = document.getElementById("dressName").value;

    const izabraniDatum = new Date(datum);
    const danas = new Date();
    izabraniDatum.setHours(0, 0, 0, 0);
    danas.setHours(0, 0, 0, 0);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!datum || izabraniDatum < danas) {
        alert("Molimo unesite ispravan datum iznajmljivanja (ne može biti u prošlosti).");
        return;
    }
    if (!emailRegex.test(email)) {
        alert("Molimo unesite validnu email adresu.");
        return;
    }
    window.alert("Uspešno ste iznajmili:"+haljina+ "\nza datum " +datum+"\nPotvrda će biti poslata na "+email+".");
    this.reset();
    bootstrap.Modal.getInstance(document.getElementById("rentalModal")).hide();
});
document.getElementById("rentalForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const ime = document.getElementById("iznajmiIme").value;
    const email = document.getElementById("iznajmiEmail").value;
    const datum = document.getElementById("iznajmiDatum").value;
    const placanje = document.getElementById("nacinPlacanja").value;
    const vracanje = document.getElementById("vracanje").value;
    const haljina = document.getElementById("dressName").value;

    alert(`Hvala, ${ime}!\n\nIznajmili ste: ${haljina}\nDatum: ${datum}\nPlaćanje: ${placanje}\nVraćanje: ${vracanje}`);
    this.reset();
    const modal = bootstrap.Modal.getInstance(document.getElementById('rentalModal'));
    modal.hide();
});
