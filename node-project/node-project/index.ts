import readline from 'readline';


var x:number; //deklarácia prveho cisla pre nasu kalkulacku
var y:number;//druhe cislo
var vysledok: number;//výsledok
var z: number;//tretie cislo pre pripad, ze by sa pouzivatel rozhodol pocitat dalej

function scitovanie (x:number,y:number) /*funkcie na scitovanie, odcitovanie, nasobenie a delenie*/
{
    vysledok= x+y;
}
function odcitovanie (x:number,y:number)
{
    vysledok= x-y;
}
function delenie (x:number,y:number)
{
    vysledok= x/y;
}
function nasobenie (x:number,y:number)
{
    vysledok= x*y;
}

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function otázky(){                      /*funkcia pre dalšie výpocty s pouzitim výsledku z predchadzajuceho pocitania ako prve cislo*/
rl.question("Zadaj dalsie cislo: ", (answer4)=>{
z=parseInt(answer4);
znamienka(vysledok,z)

})

}

function znamienka (x:number,y:number){            /* tu zistujeme ktoru funkciu treba zavolať podla znamienka ktore uzivatel napisal*/
    rl.question("Zadaj znamienko(+ - / *): ",(answer3)=>{
if(answer3== '+'){
    scitovanie(x,y);
    console.log ("výsledok je: "+x+ " + "+y +" = "+vysledok);
}
else if(answer3== '-'){
    odcitovanie(x,y)
    console.log ("výsledok je: "+x+ " - "+y +" = "+vysledok);
}
else if(answer3== '/'){
        delenie(x,y)
    console.log ("výsledok je: "+x+ " / "+y +" = "+vysledok);
}
else if(answer3== '*'){
    nasobenie(x,y)
    console.log ("výsledok je: "+ x+ " * "+y +" = "+vysledok);
}
rl.question("Chces pocitat dalej?(ano =A )",(answer5)=>{         /*zistujeme ci chce uzivatel pocitac dalej  */
    if (answer5== 'A'){
        otázky();
    }
    else()=>{
        rl.close();
    }

 } )
})
}
/*pýtame sa na prve a druhe cislo a potom spuštame funkciu ktorá zisti ake znamienko ma použiť */
rl.question("Zadaj prve cislo",(answer1)=>{
    x = parseInt(answer1);

rl.question("Zadaj druhe cislo",(answer2)=>{
    y = parseInt(answer2);
znamienka(x,y);
});
});