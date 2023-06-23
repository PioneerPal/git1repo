function EkezetesBetukSzama(vizsgaltSzoveg) {
    var ekezetesBetuk = ["á", "é", "í", "ó", "ö", "ő", "ú", "ü", "ű", "Á", "É", "Í", "Ó", "Ö", "Ő", "Ú", "Ü", "Ű"];
    var ekezetesBetukSzama = 0;
    for (var i = 0; i < vizsgaltSzoveg.length; i++) {
        for (var j = 0; j < ekezetesBetuk.length; j++) {
            if (vizsgaltSzoveg[i] == ekezetesBetuk[j]) {
                ekezetesBetukSzama++;
            }
        }
    }
    return ekezetesBetukSzama;
}
function ElsoNszamSzorzat(mennyiseg) {
    var szorzat = 1;
    for (var i = 1; i <= mennyiseg; i++) {
        szorzat = szorzat * i;
    }
    return szorzat;
}
function ParosakOsszege(vizsgaltTomb) {
    var parosSzamok = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i] % 2 == 0) {
            parosSzamok += vizsgaltTomb[i];
        }
    }
    return parosSzamok;
}
