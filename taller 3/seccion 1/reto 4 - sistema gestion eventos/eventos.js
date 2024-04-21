

/*Desarrollar un sistema en JavaScript para crear, actualizar, buscar y eliminar eventos. Cada evento estará representado como un objeto con varias propiedades, y todos los eventos se almacenarán en una colección (objeto o array).*/

/*Métodos de strings: split(), toLowerCase(), includes(), trim(), replace()
Métodos de objetos: Object.keys(), Object.values(), Object.entries(), Object.assign()*/


// alert('sistema de gestion de eventos')

/*Creación de Eventos:
Descripción: Permitir al usuario ingresar detalles de un evento, como nombre, fecha, y descripción, y almacenar estos detalles en un objeto.*/

let inputDateDay;
let inputDateMonth;
let inputDateYear;

let inputNameEvent = prompt('¿Cual es eñ nombre del evento')
let nameEvent = inputNameEvent.trim()
while (true) {
   
    inputDateDay = prompt(`¿Dia del evento ${inputNameEvent}: `)
    
    if (inputDateDay == Number && inputDateDay >= 1 || inputDateDay <= 31) {
        inputDateMonth = prompt('Mes: ')
        if (inputDateMonth == Number && inputDateMonth > 1 || inputDateMonth <= 12) {
            inputDateYear = prompt('Año: ')
            if (!isNaN.inputDateYear && inputDateYear.length == 4) {
                break
            }else {
                alert('Ingrese un valor numerico de 4 digitos')
            }
        }else {
            alert ('Ingrese un valor numero para mes del 1-12')
        }
    }else {
        alert('Ingresa un numero para Dia del  1-31')
    }
}

let  dateEvent;
dateEvent = inputDateDay.concat('/',inputDateMonth,'/',inputDateYear,)
alert(`La fecha del elemento es ${dateEvent}`)

let inputDescriptionEvent = prompt(`Ingrese la descripcion:
evento: ${inputNameEvent}
fecha: ${dateEvent}`)
const event1 = {
    id: 1,
    name: nameEvent,
    date: dateEvent,
    description: inputDescriptionEvent
}
let userConfirm;
    
while (true) {
    if(userConfirm= confirm(`Evento creado exitosamente
    ${Object.keys(event1)}: ${Object.values(event1)}
    Presione aceptar para agregar otro evento`)) {
        alert('se repite el patron')
    } else {
        break
    }
}


