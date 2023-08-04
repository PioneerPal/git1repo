let nev:string="szoveg";
let csoport:number=
function DiakInfo(nev:string, csoport:number, tipus:boolean):string{
    if(tipus==true){
        return nev+"["+csoport+"] Junior Frontend";
    }
    return nev+"["+csoport+"] Webprogramozó";
}



function SzovegesErtekeles(jegy:number):[string,string]{
    if(jegy==5){
        return ["példás","példás"];
    }
    else if(jegy==4){
        return ["jó","jó"];
    }
    else if(jegy==3){
        return ["változó","változó"];
    }
    else if(jegy==2){
        return ["hanyag","hanyag"];
    }
    else ["hibás adat","hibás adat"];
}
  

function HarommalOszthatokSzama(vizsgaltTomb:number[]):number{
    let harommalOszhatokSzama:number=0;
    for(let i:number=0; i<vizsgaltTomb.length; i++){
        if(vizsgaltTomb[i]%3==0){
            harommalOszhatokSzama++;
        }
    }
    return harommalOszhatokSzama;
}

function NyerőszámSorsoló(nennyiseg:number , alsoHatar:number , felsoHatar:number):number[]{
    
}
