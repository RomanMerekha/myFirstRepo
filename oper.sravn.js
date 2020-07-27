console.log(2 > 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

// сравнения строк

console.log( 'Я' > 'А' ); // true
console.log( 'Кот' > 'Код' ); // true
console.log( 'Сонный' > 'Сон' ); // true

// сравнения разных типов

console.log( '2' > 1 ); // true, строка '2' становится числом 2
console.log( '01' == 1 ); // true, строка '01' становится числом 1

// строгое сравнение. Оператор строгого равенства === проверяет равенство без приведения типов

console.log( 0 === false ); // false, так как сравниваются разные типы

// сравнения с null и undefined

console.log( null === undefined ); // false. При строгом равенстве ===
console.log( null == undefined ); // true. При нестрогом равенстве ==

//Значение undefined несравнимо с другими значениями:

console.log( undefined > 0 ); // false (1)
console.log( undefined < 0 ); // false (2)
console.log( undefined == 0 ); // false (3)