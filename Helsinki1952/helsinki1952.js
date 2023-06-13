var eredmenyek = [
    "1 1 atletika kalapacsvetes",
    "1 1 uszas 400m_gyorsuszas",
    "1 1 birkozas kotott_fogas_legsuly",
    "1 1 torna talajtorna",
    "1 1 torna felemas_korlat",
    "1 1 vivas kardvivas_egyeni",
    "1 1 okolvivas nagyvaltosuly",
    "1 1 uszas 200m_melluszas",
    "1 1 birkozas kotott_fogas_valtosuly",
    "1 1 uszas 100m_gyorsuszas",
    "1 1 sportloveszet onmukodo_sportpisztoly",
    "1 15 labdarugas ferfi_csapat",
    "1 3 ottusa ferfi_csapat",
    "1 6 vivas kardvivas_csapat",
    "1 5 uszas 4x100m_gyorsuszo_valto",
    "1 13 vizilabda ferfi_csapat",
    "2 1 ottusa ottusa_egyeni",
    "2 1 vivas torvivas_egyeni",
    "2 1 vivas kardvivas_egyeni",
    "2 1 sportloveszet onmukodo_sportpisztoly",
    "2 1 uszas 400m_gyorsuszas",
    "2 1 uszas 200m_melluszas",
    "2 1 kajakkenu kenu_egyes_10000m",
    "2 1 kajakkenu kajak_egyes_1000m",
    "2 1 birkozas kotott_fogas_pehelysuly",
    "2 8 torna noi_osszetett_csapat",
    "3 1 sportloveszet sportpisztoly",
    "3 1 vivas kardvivas_egyeni",
    "3 1 atletika tavolugras",
    "3 1 birkozas szabad_fogas_kozepsuly",
    "3 1 torna felemas_korlat",
    "3 1 torna osszetett_egyeni",
    "3 1 torna gerenda",
    "3 1 torna talajtorna",
    "3 1 atletika kalapacsvetes",
    "3 1 atletika 50km_gyaloglas",
    "3 1 ottusa ottusa_egyeni",
    "3 1 uszas 100m_gyorsuszas",
    "3 4 atletika 4x100m_valtofutas",
    "3 2 kajakkenu kenu_kettes_10000m",
    "3 8 torna keziszer_csapat",
    "3 6 vivas torvivas_csapat",
    "4 1 torna gerenda",
    "4 1 uszas 200m_mell",
    "4 1 birkozas kotottfogas_felnehezsuly",
    "4 1 torna talaj",
    "4 1 birkozas kotottfogas_kozepsuly",
    "4 1 birkozas kotottfogas_konnyusuly",
    "5 1 okolvivas pehelysuly",
    "5 1 okolvivas konnyusuly",
    "5 1 uszas 100m_gyors",
    "5 1 atletika diszkoszvetes",
    "5 1 vivas parbajtor_egyeni",
    "5 2 kajak kenu kenu_kettes_1000m",
    "5 2 kerekparozas ketuleses_verseny",
    "5 4 uszas 4 200m_gyorsvalto",
    "5 5 vivas parbajtor_csapat",
    "6 1 birkozas kotottfogas_legsuly",
    "6 1 kajak kenu kajak_egyes_500m",
    "6 1 torna osszetett_egyeni",
    "6 1 kerekparozas repuloverseny",
    "6 1 uszas 400m_gyors",
    "6 1 torna felemaskorlat",
    "6 8 torna osszetett_csapat",
];
function ObjektumFeltolto(feltoltendoElem) {
    var beolvasottAdatok = [];
    for (var i = 0; i < feltoltendoElem.length; i++) {
        var daraboltSor = feltoltendoElem[i].split(" ");
        var objektum = {
            helyezes: Number(daraboltSor[0]),
            sportolokSzama: Number(daraboltSor[1]),
            sportagNeve: String(daraboltSor[2]),
            versenyszamNeve: String(daraboltSor[3])
        };
        beolvasottAdatok.push(objektum);
    }
    return beolvasottAdatok;
}
var helsinkiAdatok = ObjektumFeltolto(eredmenyek);
/*function Adatkiiro(adatok:helsinki[]):void{
    for(let i:number=0;i<adatok.length;i++){
        console.log(adatok[i].helyezes+":"+adatok[i].sportolokSzama+":"+adatok[i].sportagNeve+":"+adatok[i].versenyszamNeve);
    }
}
Adatkiiro(helsinkiAdatok);*/
//3.Feladat. pont szerző helyezések száma.
function PontszerzoHelyezesekSzama(adatok) {
    console.log("Ponszerző helyezések száma: " + adatok.length);
}
PontszerzoHelyezesekSzama(helsinkiAdatok);
//4.Feladat. megszerzett érmek statisztika.
function MegszerzettEremekStatisztika(adatok) {
    var arany = 0;
    var ezust = 0;
    var bronz = 0;
    for (var i = 0; i < adatok.length; i++) {
        if (adatok[i].helyezes == 1) {
            arany++;
        }
        else if (adatok[i].helyezes == 2) {
            ezust++;
        }
        else if (adatok[i].helyezes == 3) {
            bronz++;
        }
    }
    var osszes = arany + ezust + bronz;
    console.log("Arany: " + arany + "\nEzüst: " + ezust + "\nBronz: " + bronz + "\nÖsszesen: " + osszes);
}
MegszerzettEremekStatisztika(helsinkiAdatok);
//5.Feladat. 
function OlimpiaoPontokSzama(adatok) {
    var elsoHelyezes = 0;
    var msodikHelyezes = 0;
    var harmadikHelyezes = 0;
    var negyedikHelyezes = 0;
    var otodikHelyezes = 0;
    var hatodikHelyezes = 0;
    for (var i = 0; i < adatok.length; i++) {
        if (adatok[i].helyezes == 1) {
            elsoHelyezes += 7;
        }
        else if (adatok[i].helyezes == 2) {
            msodikHelyezes += 5;
        }
        else if (adatok[i].helyezes == 3) {
            harmadikHelyezes += 4;
        }
        else if (adatok[i].helyezes == 4) {
            negyedikHelyezes += 3;
        }
        else if (adatok[i].helyezes == 5) {
            otodikHelyezes += 2;
        }
        else if (adatok[i].helyezes == 6) {
            hatodikHelyezes += 1;
        }
    }
    var osszPontszam = elsoHelyezes + msodikHelyezes + harmadikHelyezes + negyedikHelyezes + otodikHelyezes + hatodikHelyezes;
    console.log("Olimpiai pontok száma: " + osszPontszam);
}
OlimpiaoPontokSzama(helsinkiAdatok);
//6.Feladat.
function TornavagyUszasSzerzettTobbErmek(adatok) {
    var uszas = 0;
    var torna = 0;
    for (var i = 0; i < adatok.length; i++) {
        if (adatok[i].sportagNeve == "uszas") {
            uszas++;
        }
        else if (adatok[i].sportagNeve == "torna") {
            torna++;
        }
    }
    if (uszas == torna) {
        console.log("Egyenlő érmet szereztek tornából és úszásból");
    }
    else if (uszas > torna) {
        console.log("Úszás sportágában szereztek több érmet");
    }
    else {
        console.log("Torna sportágában szereztek több érmet");
    }
}
TornavagyUszasSzerzettTobbErmek(helsinkiAdatok);
//7.Feladat. (hát elég teszkóslett)
function LegtobbSportolo(adatok) {
    var maxSportolok = adatok[0].sportolokSzama;
    var helyezesek = 0;
    var sportaguk = "";
    var versenyszamuk = "";
    for (var i = 0; i < adatok.length; i++) {
        if (adatok[i].sportolokSzama > maxSportolok) {
            maxSportolok = adatok[i].sportolokSzama;
            helyezesek = adatok[i].helyezes;
            sportaguk = adatok[i].sportagNeve;
            versenyszamuk = adatok[i].versenyszamNeve;
        }
    }
    console.log("Helyezés: " + helyezesek + "\nSportág: " + sportaguk + "\nVersenyszám: " + versenyszamuk + "\nSportolók száma: " + maxSportolok);
}
LegtobbSportolo(helsinkiAdatok);
