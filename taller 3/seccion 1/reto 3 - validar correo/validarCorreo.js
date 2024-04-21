while (true) {
    let inputUserEmail;
    inputUserEmail = prompt('Ingrese su correo electronico');
    if (inputUserEmail.includes('@') && inputUserEmail.endsWith('.com') && !inputUserEmail.includes(" ")) {
        alert('Correo electronico valido')
        break
    } else {
        alert('Correo invalido')
    }
}