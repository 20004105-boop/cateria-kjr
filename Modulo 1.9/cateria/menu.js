
let pedido = [];
let total = 0;

function agregar(nombre, precio) {

    pedido.push({
        nombre: nombre,
        precio: precio
    });

    mostrar();
}

function mostrar() {

    let lista = document.getElementById("lista");

    lista.innerHTML = "";

    total = 0;

    pedido.forEach(function(producto, indice) {

        total += producto.precio;

        lista.innerHTML += `
            <p>
                ${producto.nombre} - $${producto.precio.toFixed(2)}

                <button onclick="eliminar(${indice})">
                    Quitar
                </button>
            </p>
        `;
    });

    if (pedido.length === 0) {
        lista.innerHTML = "<p>No hay productos agregados.</p>";
    }

    document.getElementById("total").innerText =
        "Total: $" + total.toFixed(2);
}

function eliminar(indice) {

    pedido.splice(indice, 1);

    mostrar();
}

function vaciar() {

    pedido = [];

    mostrar();
}
