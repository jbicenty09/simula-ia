const chat = document.getElementById("chat");
const input = document.getElementById("pregunta");
const boton = document.getElementById("enviar");

mostrarBienvenida();

function mostrarBienvenida() {
    agregarIA(`
        <h2>👋 Bienvenido a SIMULA IA</h2>

        Soy tu asesor financiero inteligente.

        <br><br>

        Puedo ayudarte con:

        <ul>
            <li>💰 Créditos</li>
            <li>📈 Tasas de interés</li>
            <li>🏦 Hipotecas</li>
            <li>📊 Conversión de tasas</li>
            <li>💳 Capacidad de endeudamiento</li>
        </ul>

        <br>

        Escribe una pregunta para comenzar.
    `);
}

function agregarUsuario(texto){

    chat.innerHTML += `
    <div class="usuario">
        <div class="burbuja">
            ${texto}
        </div>
    </div>
    `;

}

function agregarIA(texto){

    chat.innerHTML += `
    <div class="ia">
        <div class="burbuja">
            ${texto}
        </div>
    </div>
    `;

    bajar();

}

function bajar(){

    chat.scrollTop = chat.scrollHeight;

}

function responder(pregunta){

    pregunta = pregunta.toLowerCase();

    if(pregunta.includes("crédito") || pregunta.includes("credito")){

        return `💰
        Un crédito es un préstamo de dinero que una entidad financiera entrega para ser pagado en cuotas.

        Muy pronto podré calcular la cuota exacta para ti.`;

    }

    if(pregunta.includes("hipoteca")){

        return `🏠
        Un crédito hipotecario sirve para comprar vivienda.

        Más adelante podrás simular cuotas según plazo, tasa y monto.`;

    }

    if(pregunta.includes("ea")){

        return `📈
        La tasa EA significa Efectiva Anual.

        Muy pronto podrás convertir automáticamente EA, NMV, EM y otras tasas.`;

    }

    if(pregunta.includes("hola")){

        return `👋 Hola.

        Soy SIMULA IA.

        ¿En qué puedo ayudarte?`;

    }

    return `🤖
    Todavía estoy aprendiendo.

    En las próximas versiones responderé utilizando Inteligencia Artificial y todos los simuladores de SIMULA-YA.`;

}

function enviarMensaje(){

    let texto = input.value.trim();

    if(texto==="") return;

    agregarUsuario(texto);

    input.value="";

    bajar();

    chat.innerHTML += `
    <div class="ia" id="escribiendo">
        <div class="burbuja">
            ⏳ SIMULA IA está escribiendo...
        </div>
    </div>
    `;

    bajar();

    setTimeout(()=>{

        const escribiendo=document.getElementById("escribiendo");

        if(escribiendo){

            escribiendo.remove();

        }

        agregarIA(responder(texto));

    },900);

}

boton.addEventListener("click", enviarMensaje);

input.addEventListener("keydown",(e)=>{

    if(e.key==="Enter"){

        e.preventDefault();

        enviarMensaje();

    }

});
