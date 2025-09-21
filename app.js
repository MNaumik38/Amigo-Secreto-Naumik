// Array para almacenar los nombres
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("⚠️ Por favor, ingresa un nombre válido.");
        return;
    }

    amigos.push(nombre);
    mostrarLista();

    input.value = "";
    input.focus();
}

// Función para mostrar la lista de amigos
function mostrarLista() {
    let listaHtml = document.getElementById("listaAmigos");
    listaHtml.innerHTML = ""; // Limpiar lista antes de agregar

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaHtml.appendChild(li);
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("⚠️ La lista está vacía. Agrega al menos un nombre.");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let ganador = amigos[indice];

    let resultadoHtml = document.getElementById("resultado");
    resultadoHtml.innerHTML = ""; // limpiar resultados previos

    let li = document.createElement("li");
    li.textContent = "🎉 El amigo secreto es: " + ganador + " 🎉";
    resultadoHtml.appendChild(li);
}
