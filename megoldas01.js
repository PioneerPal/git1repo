//1. Feladat 
document.write("Králik Viktor <br>");
document.write("Ruander #Team 12<hr>");
document.write("html:90<br>");
document.write("css:90<br>");
document.write("javascript:50<hr>");

//2. Feladat
let szam=Number(prompt("add meg a hatványozni kívánt számot:"));
let hatvany=Number(prompt("add meg a kívánt hatvány  értékét:"));
let eredmeny=(szam**hatvany);
document.write(`A \" ${szam}<sup>${hatvany}</sup> \" -on eredménye: ${eredmeny}<hr>`);

//3. Feladat
let szam1=Number(prompt("add meg az alsó határt:"));
let szam2=Number(prompt("add meg a felső határt:"));

let randomSzam=Math.round(Math.random()*(szam2+szam1))+szam1

if (randomSzam%2==0){
document.write(`${randomSzam}if`);
}
else if(randomSzam!=szam2)
document.write(`${randomSzam+1}else if`);

else {
document.write(`${randomSzam11}else`);
}

//4. Feladat
let kor=Number(prompt(`adja meg az életkort 1év-től-120ig:`));

if(kor>0 && kor<6) {
    document.write(`${kor}év Kisgyermekkor`)
}
else if(kor>=6 && kor<12){
    document.write(`${kor}év Gyermekkor`)
}
else if(kor>=12&& kor<16){
    document.write(`${kor}év Serdülőkor`)
}
else if(kor>=16 && kor<20){
    document.write(`${kor}év Ifjúkor`)
}
else if(kor>=20 && kor<30){
    document.write(`${kor}év Fiatal felnőt kor`)
}
else if(kor>=30 && kor<60){
    document.write(`${kor}év Felnőtt kor`)
}
else if(kor>=60 && kor<=120){
    document.write(`${kor}év Aggkor`)
}
else {
    document.write(`${kor} hibás adat`)
}
document.write(`<hr>`)
//5. Feladat
let x1=Number(prompt(`Add meg az osztani kívánt számot:`))
let x2=Number(prompt(`Add meg mennyivel szeretnéd osztani a számot:`))

if (x1%x2==0){
    document.write(` a ${x2} osztja a ${x1}-t maradék nélkül <hr>`)
}
else {
    document.write(` a ${x2} nem osztja a ${x1}-t maradék nélkül <hr>`)
}
//6. Feladat
for(let i=1; i<=10; i=i+1){

    document.write(i*i+",")
  
}

