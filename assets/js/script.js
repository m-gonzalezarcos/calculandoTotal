// Paso 1 Agregar el evento al botón 
const boton = document.getElementById('btn')

boton.addEventListener('click', function(){
    // Paso 2 Rescatar las variables de los input
    const cantidad = document.getElementById('cantidad').value

    // paso 3 Rescatar los elementos a manipular
    const color = document.getElementById('color').value

    // Paso 4 Modificar los elementos

    const precioTotal = document.getElementById('precioTotal')
    //Método toLocateString transforma un número en string con separadores 
    precioTotal.innerHTML = (cantidad * 25000).toLocaleString()

    const cantidadTotal = document.getElementById('cantidadTotal')
    cantidadTotal.innerHTML = cantidad

    const colorCircle = document.getElementById('colorCircle')
    colorCircle.style.backgroundColor = color
    

    


})