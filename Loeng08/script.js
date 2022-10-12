let nuppElement = document.getElementById('nupp');
let nimiElement = document.getElementById('nimi');
let hinnangElement = document.getElementById('hinnang');

nuppElement.addEventListener ('click', hindaNime);

function hindaNime() {
    hinnangElement.style.display = 'block';
    let nimePikkus = nimiElement.value.length;

    if (nimePikkus == 0) {
        hinnangElement.innerHTML = "Palun sisesta enda nimi";
   
    } if (nimePikkus < 6) {
        hinnangElement.innerHTML = "Küll sul on ilus lühike nimi";

    } if (nimePikkus >= 6) {
        hinnangElement.innerHTML = "Küll sul on suurepärane pikk nimi";
    }
}