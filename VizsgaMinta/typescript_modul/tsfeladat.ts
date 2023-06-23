function  EkezetesBetukSzama(vizsgaltSzoveg:string):number{
    let  ekezetesBetuk:string[]=["á","é","í","ó","ö","ő","ú","ü","ű","Á","É","Í","Ó","Ö","Ő","Ú","Ü","Ű"];
    let ekezetesBetukSzama:number=0;
    for(let i:number=0; i<vizsgaltSzoveg.length; i++){
        for(let j:number=0; j<ekezetesBetuk.length; j++){
            if(vizsgaltSzoveg[i]==ekezetesBetuk[j]){
                ekezetesBetukSzama++;
            }
        }
    }
    return ekezetesBetukSzama;
}

function ElsoNszamSzorzat(mennyiseg:number):number{
    let  szorzat:number=1
    for(let i:number=1; i<=mennyiseg; i++ ){
        szorzat=szorzat*i;
     }
     return szorzat;
}

function ParosakOsszege(vizsgaltTomb:number[]):number{
    let parosSzamok:number=0;
    for(let i:number=0; i<vizsgaltTomb.length; i++){
        if(vizsgaltTomb[i]%2==0){
            parosSzamok+=vizsgaltTomb[i];
        }
    }
    return parosSzamok;
}