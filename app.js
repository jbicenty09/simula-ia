const chat = document.getElementById("chat");
const input = document.getElementById("pregunta");
const boton = document.getElementById("enviar");

// Mensaje inicial
chat.innerHTML = `
<div class="ia">
    <div class="burbuja">
        <h2>👋 Bienvenido a SIMULA IA</h2>

        <br>

        Soy tu asesor financiero inteligente.

        <br><br>

        Próximamente podré ayudarte con:

        <ul>
            <li>💰 Créditos</li>
            <li>📈 Intereses</li>
            <li>🏦 Hipotecas</li>
            <li>📊 Conversión de tasas</li>
            <li>💳 Capacidad de endeudamiento</li>
        </ul>

        <br>

        Escribe una pregunta para comenzar.
    </div>
</div>
`;

// Función para enviar mensajes
function enviarMensaje() {

    let texto = input.value.trim();

    if (texto === "") return;

    // Mensaje del usuario
    chat.innerHTML += `
    <div class="usuario">
        <div class="burbuja">
            ${texto}
        </div>
    </div>
    `;

    input.value = "";

    chat.scrollTop = chat.scrollHeight;

    // Simula que la IA está escribiendo
    chat.innerHTML += `
    <div class="ia" id="escribiendo">
        <div class="burbuja">
            ⏳ SIMULA IA está escribiendo...
        </div>
    </div>
    `;

    chat.scrollTop = chat.scrollHeight;

    // Respuesta simulada
    setTimeout(() => {

        document.getElementById("escribiendo").remove();

        chat.innerHTML += `
        <div class="ia">
            <div class="burbuja">
                Gracias por tu pregunta.<br><br>

                Esta es una versión de prueba de SIMULA IA.

                Muy pronto responderé utilizando Inteligencia Artificial real y podré ayudarte con simulaciones financieras.
            </div>
        </div>
        `;

        chat.scrollTop = chat.scrollHeight;

    }, 1000);

}

// Botón enviar
boton.addEventListener("click", enviarMensaje);

// Enviar con Enter
input.addEventListener("keydown", function(e) {

    if (e.key === "Enter") {

        e.preventDefault();

        enviarMensaje();

    }

});

// Colocar el cursor automáticamente
input.focus();
