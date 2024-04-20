alert('validando contraseñas seguras')
const regexNumber = /^[0-9]+$/
const regexWord =  /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/
const regexCaracter = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm

while (true) {
    let password;
    password = prompt('Ingrese una contraseña ')
    if (password.length > 8 && password.match(regexCaracter)){
        alert('contraseña segura')
        break
    } else {
        alert('datos invalidos')
    }
} 


//  && password.search(regexNumber) && password.search(regexWord) && password.search(regexCaracter)){