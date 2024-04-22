/* Crear un script que calcule estadísticas de calificaciones de un grupo de estudiantes. El script debe cumplir con las siguientes condiciones:

Solicita al usuario que ingrese las calificaciones de los estudiantes separadas por comas.
Convierte las calificaciones ingresadas a un array utilizando split().
Utiliza métodos de arrays como reduce(), map(), filter(), sort() para calcular las siguientes estadísticas:
Promedio de Calificaciones
Calificación Máxima
Calificación Mínima
Número de Aprobados (calificación mayor o igual a 70)
Número de Reprobados (calificación menor a 70)
Lista de Calificaciones Ordenadas de Mayor a Menor
Muestra las estadísticas de calificaciones al usuario.*/


function validate(nameStudent) {
    while (true) {
        if (!isNaN.nameStudent && nameStudent.length > 1 ) {
            alert('valor ingresado correctamente')
            return true
        } else {
            alert('el valor es un numero , ingrese letras')
        }
    }
}

while (true) {
    let inputNameStudent = prompt('Ingrese nombre del estudiante')
    if (validate(inputNameStudent)) {
        let inputStudenRating;
        inputStudenRating = prompt(`Ingrese las calificaciones del estudiante ${inputNameStudent} separadas por una ,`)
        let arrayRantingStudent;
        arrayRantingStudent = inputStudenRating.split(',').map(element => parseInt(element))
        console.log(arrayRantingStudent)
        let average;
        average = arrayRantingStudent.reduce((acc, element) => 
            acc + element) / arrayRantingStudent.length
        console.log('el promedio es: ', average)
        arrayRantingStudent.sort();
        numMax = arrayRantingStudent.slice(0,1)
        numMin= arrayRantingStudent.slice(-1)
        console.log(`el numero mayor es ${numMax}
        el numero menor es ${numMin}`)
        numAprobados = arrayRantingStudent
    } else {
        break
    }
}
     




