console.log("hallo");

let zahlen = [1, 2, 3, 4, 5];

let doppelteZahlen: number[] = zahlen.map(num => num * 2);

console.log(doppelteZahlen);


let wörter = ["eins",  "zwei", "dreisig"];

let gefilterteWörter: string[] = wörter.filter(wort => wort.length > 5)

console.log(gefilterteWörter)


let numbers = [4, 8, 2, 16];

let summe: number = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
    );
console.log(summe)


let zahlenen = [2, 60, 12, 3];

let grosseZahl = zahlenen.some(zahl => zahl > 10);
console.log(grosseZahl)














