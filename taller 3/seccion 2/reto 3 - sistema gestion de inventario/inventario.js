
const inventoryProducts = []
let id = 0
flag = true


while (flag) {
    
    inputUserMenu = prompt(`-----Sistema de inventario-----
    1. Crear producto
    2. Duplicar producto
    3. Visualizar y buscar producto
    4. Actualiar producto
    5. Eliminar producto
    6. Verficar existencia de producto en inventario
    7. Vender producto
    8.Comprar producto
    9.Calcular total inventario
    10.Ordenar productos
    11.Identificar producto con malas palabras
    12Reporte General
    13. Salir`)


switch (inputUserMenu) {
    case '1':
        const inputNameProduct = prompt(`Ingrese el nombre del producto`)
        const inputPrice = prompt(`Ingrese el precio del producto`)
        const inputQuantity = prompt(`Ingrese la cantidad de producto`)
        const inputDescription = prompt(`Ingrese la descrispcion del producto`)
        let product =Object.assign({},{
            id: ++id,
            name: inputNameProduct,
            price: inputPrice,
            quantity: inputQuantity,
            description:inputDescription
        })
        inventoryProducts.push(product)
        alert(`---Porducto creado exitosamente----`)
        break
    case '2':
        let showResult;
        let inputUserDulicate;
        for (let product in inventoryProducts) {
            showResult += (`Id: ${inventoryProducts[product].id}
          Nombre: ${inventoryProducts[product].name}
          Precio: ${inventoryProducts[product].price}
          Cantidad: ${inventoryProducts[product].quantity}
          Descripcion: ${inventoryProducts[product].description}\n`)
        }
        alert(showResult)
        inputUserDulicate = prompt('Ingrese el numero de Id para modificar')
        const productDuplicate = inventoryProducts[inputUserDulicate - 1]
        console.log('aqui va la dupla')
        console.log(productDuplicate)
        let macth = 0
        for (product in inventoryProducts) {
            if (product.name.startsWith(productDuplicate.name)) {
                exist++;
           }
        }
        const duplicatedProduct = Object.assign({}, {
            id: ++id,
            name: macth ? productDuplicate.name + 'copy' + exist : productDuplicate.name + 'copy',
            price: productDuplicate.price,
            quantity: productDuplicate.quantity,
            description: productDuplicate.description
        })
        inventoryProducts.push(duplicatedProduct)
        break
    case '3':
        const inputUserSearch = prompt(`Ingresa una opcion:
        1. Busar por nombre
        2. Buscar por precio`)

        while (true) {
            let showProductName;
            let showProductPrice;
            if (inputUserSearch == '1') {
                //BUSCAR EN COLECCION DE OBJETOS POR NOMBRE
                const inputSearchProductName = prompt('Ingrese el nombre del producto')
                showProductName = inventoryProducts.filter(product => product.name == inputSearchProductName)
                showProductName.forEach(product => {
                    alert(`Nombre: ${product.name}
                    Precio: ${product.price}
                    Cantidad: ${product.quantity}
                    Descripcion: ${product.description}`)
                })
                break
            } else if (inputUserSearch == '2') {
                let inputPriceMin;
                let inputPriceMax;
                inputPriceMin = prompt('Ingrese precio Min')
                inputPriceMax = prompt('Ingrese precio maximo')
                showProductPrice = inventoryProducts.filter(price => 
                    price.price <= inputPriceMax && price.price >= inputPriceMin
                )
                showProductPrice.forEach(product => {
                    (`Nombre: ${product.name} Precio: ${product.price} Cantidad: ${product.quantity} Descripcion: ${product.description}`)
                })
                break
            } else {
                alert('Ingresa u valor valido')
            }
        }
    case '4':
        inventoryProducts.forEach(product => {
            console.log(`Nombre: ${product.name} Precio: ${product.price} Cantidad: ${product.quantity} Descripcion: ${product.description}`)
        })
        const inputUpdateId = prompt(`Ingrese el numero del ID para modificar`)
        const idUpdate = inventoryProducts.filter(id => id.id == inputUpdateId)
        console.log('id encontrado',idUpdate)
        const updateName = prompt('Ingrese el nombre a modificar o enter si no lo va a cambiar')
        if (updateName) {
            inventoryProducts[inputUpdateId -1].name = updateName
        }
        const updatePrice = prompt('Ingrese el precio a modificar o enter si no va a cambiar')
        if (updatePrice) {
            inventoryProducts[inputUpdateId -1].price = updatePrice
        }
        const updateQuantity = prompt('Ingrese la cantidad o enter si no va cambiar')
        if (updateQuantity) {
            inventoryProducts[inputUpdateId -1].quantity = updateQuantity
        }
        const updateDescription = prompt('Ingrese la descripcion para modificar o enter si no va cambiar')
        if (updateDescription) {
            inventoryProducts[inputUpdateId -1].description = updateDescription
        }
        break
    case '5':
        
        
    case '13':
        flag = false
    }
}
console.log(inventoryProducts)