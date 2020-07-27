if (year = 2020) {
    console.log("Правильно!");
    console.log("Ты такой умный");
}

// Дополнительный блок else

let year1 = 1997;
if (year1 == 197) {
console.log("krasava");
} else {
    console.log("hui ti");
}

// Несколько условий "else if"

let year3 = 2014;
if (year3 < 2015) {
  console.log( 'Это слишком рано...' );
} else if (year3 > 2015) {
  console.log( 'Это поздновато' );
} else {
  console.log( 'Верно!' );
}

// Тернарный оператор "?"

let year2 = 1997;
year2 = (year2 != 1997) ? "Daa" : "Nit";
console.log(year2);

// Чисто для сравнения
// Вариант 1

let age = 10;
if (age < 3) {
    console.log('Здравствуй, малыш!');
  } else if (age < 18) {
    console.log('Привет!');
  } else if (age < 100) {
    console.log('Здравствуйте!');
  } else {
    console.log('Какой необычный возраст!');
  }

  // Вариант 2 - смотрится поприятнее 

  let agee = 17;

let message = (agee < 3) ? 'Малявка' :
  (agee < 18) ? 'Вассап' :
  (agee < 100) ? 'Здравствуйте!' :
  'Какой необычный возраст!';

console.log( message );