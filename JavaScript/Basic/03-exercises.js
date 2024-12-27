// 1. Escribe un comentario en una línea

//HOLA

// 2. Escribe un comentario en varias líneas

/*
Esto es
un comentario
en varias
líneas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let nombre = "Fernando"
let edad = 16
let altura = 1.60
let isStudent = true
let indefinedValue
let nullValue = null
let mySymbol = Symbol("I don't know bro")
let bigInt = 12312312312312312n

// 4. Imprime por consola el valor de todas las variables

console.log(nombre)
console.log(edad)
console.log(altura)
console.log(isStudent)
console.log(indefinedValue)
console.log(nullValue)
console.log(mySymbol)
console.log(bigInt)

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof(nombre))
console.log(typeof(edad))
console.log(typeof(altura))
console.log(typeof(isStudent))
console.log(typeof(indefinedValue))
console.log(typeof(nullValue))
console.log(typeof(mySymbol))
console.log(typeof(bigInt))

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

nombre = "Francisco"
edad = 20
altura = 1.80
isStudent = false
mySymbol = Symbol("Isn't my symbol bro")
bigInt = 123543232432423n

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

nombre = 20
edad = "no sé"
altura = false
// isStudent "2do anio"
indefinedValue = "valorDefinido"
nullValue = "ya no es null"
mySymbol = 20
bigInt = 12.2

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const nombreOriginal = "Fernando"
const edadOriginal = 16
const alturaOriginal = 1.60
const isStudentOriginal = true
// const indefinedValueOriginal
const nullValueOriginal = null
const mySymbolOriginal = Symbol("I don't know bro")
const bigIntOrginal = 12312312312312312n

// 9. A continuación, modifica los valores de las constantes

/*
nombreOriginal = "Francisco"
edadOriginal = 20
alturaOriginal = 1.80
isStudentOriginal = false
nullValueOriginal = 20
mySymbolOriginal = "It's not my symbol"
bigIntOrginal = 123141241243423542352354n
*/

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse