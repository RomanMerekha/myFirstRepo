// Логический оператор || (ИЛИ)
// Существуют всего четыре возможные логичиские комбинации:

console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false

// Число 1 будет воспринято, как true, a 0 - как false

if (1 || 0) {
    console.log('truthy!'); // вывдет "truthy!"
}

// Оператор || выводит первое попавшееся "истинное значение" 

let hour = 9;
if (hour < 10 || hour > 18) {
    console.log('Офис закрыт');
}

// Еще один пример:
let hours = 12;
let isWeekend = true;

if (hours < 10 || hours > 18 || isWeekend) {
  console.log( 'Офис закрыт. Так как выходной' ); // это выходной
}

// Оператор || , если все операнды ложные (false) - возращает последний из них

console.log(1 || 0); // возвращает 1
console.log(true || 'no matter what'); // возвращает true
console.log(null || 1); // возвращает 1 (первое истинное значение)
console.log(null || 0 || 1); // возвращает 1 (первое истиноое значение)
console.log(undefined || null || 0); // возвращает 0 (поскольку все ложно, возвращается последнее значение)

// Получаем первое истинное значение из списка переменных или выражений
// Если у нас есть ряд переменных, которые содержат данные "null", "undefined", то с помощью || можем найти истинное значение

let currenUser = null;
let defaultUser = "John";
let name123 = currenUser || defaultUser || "unnamed";
console.log(name123);

// И езще пару примерчиков

let b;
true || (b = 1);
console.log(b); // undefined, потому что (b = 1) не вычисляется

let z;
false || (z = 1);
console.log(z); // 1