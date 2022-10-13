let uudised = [
    {
        pildiUrl: 'Enefit.jpg',
        pealkiri: 'Enefit Green ei saa rajada Purtse tuuleparki soovitud tuulikuid',
        kirjeldus: 'Viru Maakohus võttis 20. septembril 2022 menetlusse Eesti Ühistuenergia OÜ hagi Enefit Green ASi tütarettevõtja Enefit Wind Purtse AS vastu. Hageja taotleb, et Purtse tuuleparki ei püstitataks võimsamaid kui 3 MW tuulikuid.',
        viideUudisele: 'Esimene uudis.html',
    },
    {
        pildiUrl: 'paat.jpg',
        pealkiri: 'Neljapaat näitas vahesõidus võimu ja pääses MMil kindlalt poolfinaali',
        kirjeldus: 'Eesti paarisaeruline neljapaat (Mikhail Kushteyn, Allar Raja, Tõnu Endrekson, Johann Poolak) näitas Tšehhis Račices toimuval MMil täna rammu, võites oma vahesõidu kindlalt ja pääsedes nõnda poolfinaali ehk 12 parema sekka.',
        viideUudisele: 'Teine uudis.html',
    },
    {
        pildiUrl: 'Finnair.jpg',
        pealkiri: 'Finnair lõpetab Tartust lendamise, linn kaalub vedaja leidmist riigihanke korras',
        kirjeldus: 'Soome lennufirma Finnair lõpetab Tartust lendamise, esialgse teate kohaselt talvehooajaks. Kuivõrd kindlust lendude taastamise asjus pole, plaanib linnavalitsus kuulutada riigihanke, et üldhuviteenusena leida Riia, Helsingi või Stockholmi lennuliini teenindaja.',
        viideUudisele: 'Kolmas uudis.html',
    }
];

let uudisedElement = document.querySelector('.uudised');
for (let i = 0; i < uudised.length; i++) {
    let uudisElement = document.createElement('div');
    uudisElement.classList = ['uudis'];

    let pildiElement = document.createElement('img');
    pildiElement.src = uudised[i].pildiUrl;
    uudisElement.appendChild(pildiElement);

    let pealkiriElement = document.createElement('h2');
    pealkiriElement.classList = ['pealkiri'];
    pealkiriElement.innerHTML = uudised[i].pealkiri;
    uudisElement.appendChild(pealkiriElement);

    let kirjeldusElement = document.createElement('div');
    kirjeldusElement.innerHTML = uudised[i].kirjeldus;
    uudisElement.appendChild(kirjeldusElement);

    let viideElement = document.createElement('a');
    viideElement.href = uudised[i].viideUudisele;
    viideElement.innerHTML = 'Loe edasi';
    uudisElement.appendChild(viideElement);

    uudisedElement.appendChild(uudisElement);
}