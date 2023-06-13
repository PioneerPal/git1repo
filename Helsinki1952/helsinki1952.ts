var eredmenyek:string[] = [
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

interface helsinki{
    helyezes:number;
    sportolokSzama:number;
    sportagNeve:string;
    versenyszamNeve:string;
}


function ObjektumFeltolto(feltoltendoElem:string[]):helsinki[]{
    var beolvasottAdatok:helsinki[]=[];
    for(let i:number=0; i<feltoltendoElem.length; i++){
        let daraboltSor:string[]=feltoltendoElem[i].split(" ");
        let objektum:helsinki={
            helyezes:Number(daraboltSor[0]),
            sportolokSzama:Number(daraboltSor[1]),
            sportagNeve:String(daraboltSor[2]),
            versenyszamNeve:String(daraboltSor[3])
            };
        beolvasottAdatok.push(objektum) ;   
    }
    return beolvasottAdatok;
   
}

var helsinkiAdatok:helsinki[]=ObjektumFeltolto(eredmenyek);

/*function Adatkiiro(adatok:helsinki[]):void{
    for(let i:number=0;i<adatok.length;i++){
        console.log(adatok[i].helyezes+":"+adatok[i].sportolokSzama+":"+adatok[i].sportagNeve+":"+adatok[i].versenyszamNeve);
    }
}
Adatkiiro(helsinkiAdatok);*/


//3.Feladat. pont szerző helyezések száma.

function PontszerzoHelyezesekSzama(adatok:helsinki[]):void{
    console.log("Ponszerző helyezések száma: "+adatok.length);
}

PontszerzoHelyezesekSzama(helsinkiAdatok);


//4.Feladat. megszerzett érmek statisztika.

function MegszerzettEremekStatisztika(adatok:helsinki[]):void{
    let arany:number=0;
    let ezust:number=0;
    let bronz:number=0;
    for(let i:number=0; i<adatok.length; i++){
        if(adatok[i].helyezes==1){
            arany++;
        }
        else if(adatok[i].helyezes==2){
            ezust++;
        }
        else if(adatok[i].helyezes==3){
            bronz++;
        }
    
    }
    let osszes:number=arany+ezust+bronz;
    console.log("Arany: "+arany+"\nEzüst: "+ezust+"\nBronz: "+bronz+"\nÖsszesen: "+osszes);

}
 MegszerzettEremekStatisztika(helsinkiAdatok);

 //5.Feladat. 

 function OlimpiaoPontokSzama(adatok:helsinki[]):void{
    let osszPontszam:number=0;
    
    for(let i:number=0; i<adatok.length; i++){
        if(adatok[i].helyezes==1){
            osszPontszam+=7;
        }
        else if(adatok[i].helyezes==2){
            osszPontszam+=5;
        }
        else if(adatok[i].helyezes==3){
            osszPontszam+=4;
        }
        else if(adatok[i].helyezes==4){
            osszPontszam+=3;
        }
        else if(adatok[i].helyezes==5){
            osszPontszam+=2;
        }
        else if(adatok[i].helyezes==6){
            osszPontszam+=1;
        }
    }
 

    console.log("Olimpiai pontok száma: "+osszPontszam);
    
 }

 OlimpiaoPontokSzama(helsinkiAdatok);

 //6.Feladat.

 function TornavagyUszasSzerzettTobbErmek(adatok:helsinki[]):void{
    let uszas:number=0;
    let torna:number=0;
    for(let i:number=0; i<adatok.length; i++){
        if(adatok[i].sportagNeve=="uszas"){
            uszas++;
        }
        else if(adatok[i].sportagNeve=="torna"){
            torna++;
        }
    }
    if(uszas==torna){
        console.log("Egyenlő érmet szereztek tornából és úszásból")
    }
    else if(uszas>torna){
        console.log("Úszás sportágában szereztek több érmet") 
    }
    else{
        console.log("Torna sportágában szereztek több érmet") 
    }
        
}


TornavagyUszasSzerzettTobbErmek(helsinkiAdatok);

//7.Feladat. (hát elég teszkóslett)

function LegtobbSportolo(adatok:helsinki[]):void{
    let maxSportolok:number=adatok[0].sportolokSzama;
    let helyezesek:number=0;
    let sportaguk:string="";
    let versenyszamuk:string="";

    for(let i:number=0; i<adatok.length; i++){
        if(adatok[i].sportolokSzama>maxSportolok){
            maxSportolok=adatok[i].sportolokSzama;
            helyezesek=adatok[i].helyezes;
            sportaguk=adatok[i].sportagNeve;
            versenyszamuk=adatok[i].versenyszamNeve;
         }
    }
    console.log("Helyezés: "+helyezesek+"\nSportág: "+sportaguk+"\nVersenyszám: "+versenyszamuk+"\nSportolók száma: "+maxSportolok);

}

LegtobbSportolo(helsinkiAdatok);

