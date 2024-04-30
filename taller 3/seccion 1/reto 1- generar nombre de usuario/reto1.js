let nameUser;
const users = {}

while (true) {
    nameUser = (prompt('Por favor ingrese su nombre y un apelldio'))
    if (!isNaN(nameUser)) {
        alert('No se aceptan numeros , ingrese un valor alfabetico')
    }else {
        break
    }
}
nameUser = nameUser.toLowerCase()
console.log(nameUser)
nameUserArray = nameUser.split(" ")
console.log(nameUserArray)

// Generacion nombre de usuario
shortName = nameUserArray[0]
shortName = shortName.slice(0, 3)
shortLastName = nameUserArray[1]
shortLastName = shortLastName.slice(0, 3)
shortNameComplete = shortName  + shortLastName
console.log(shortNameComplete)

let dominio = '@myDomanin.com'
let email = shortNameComplete + dominio
console.log(email)

users['name'] = shortNameComplete
users['email'] = email
console.log(users)

// verifica si nombre existe en el objeto

let validateName = Object.values(users)
console.log(validateName.includes('alevel'))
if (validateName) {
    users['name'] = shortNameComplete + 1
    users['email'] = shortNameComplete + 1 + dominio
    // shortNameComplete = shortNameComplete + 1
    // email = shortNameComplete + 1 + dominio
} else {
    console.log('el nombre no se repite')
}

console.log(users)



// nameUserArray.forEach(element => {
//     nameShort = element.slice(0, 3)
//     console.log(nameShort)
// });

