/* Reto 1: Calculadora de Promedio de Calificaciones

Crear un script que calcule el promedio de calificaciones de un estudiante. El script debe cumplir con las siguientes condiciones:

Solicita al usuario que ingrese las calificaciones del estudiante separadas por comas.
Convierte las calificaciones ingresadas a un array utilizando split().
Utiliza reduce() para sumar todas las calificaciones y calcular el promedio.
Muestra el promedio de calificaciones al usuario.*/

let inputcalificaciones = prompt('Ingrese las califiaciones separadas por una coma (,)')
let calificaciones = inputcalificaciones.split(',')
console.log(calificaciones)
console.log(typeof calificaciones[0])


let convertirCalificacionesNumero = calificaciones.map(element => { return parseInt(element)
})

console.log(convertirCalificacionesNumero)

let sumaCalificaciones = convertirCalificacionesNumero.reduce((element, item) => {
    return element = element + item
})
console.log(sumaCalificaciones)
let totalValores = convertirCalificacionesNumero.length
let promedioCalificacion = sumaCalificaciones / totalValores 
console.log(promedioCalificacion)
alert(`el promedio de la calificacion ${promedioCalificacion}`)

