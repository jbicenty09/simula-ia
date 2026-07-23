const chat = document.getElementById("chat");
const input = document.getElementById("pregunta");
const boton = document.getElementById("enviar");

// Mensaje inicial
chat.innerHTML = `
<div class="ia">
    <div class="burbuja">
        <h2>👋 Bienvenido a SIMULA IA</h2>

        <p>Soy tu asesor financiero inteligente.</p>

        <p>Puedo ayudarte con:</p>

        <ul>
            <li>💰 Créditos</li>
            <li>📈 Tasas de interés</li>
            <li>🏦 Hipotecas</li>
            <li>📊 Conversión de tasas</li>
            <li>💳 Capacidad de endeudamiento</li>
        </ul>

        <p>Escribe una pregunta para comenzar.</p>
    </div>
</div>
`;

function responder(pregunta){

    pregunta = pregunta.toLowerCase();

    if(pregunta.includes("hola")){

        return "👋 Hola. Soy SIMULA IA. ¿En qué puedo ayudarte?";

    }

    if(pregunta.includes("credito") || pregunta.includes("crédito")){

        return "💰 Puedo ayudarte a simular un crédito. Próximamente calcularé cuotas, intereses y amortizaciones.";

    }

    if(pregunta.includes("hipoteca")){

        return "🏠 Muy pronto podrás simular créditos hipotecarios indicando monto, plazo y tasa.";

    }

    if(pregunta.includes("tasa") || pregunta.includes("ea")){

        return "📈 La tasa EA significa Efectiva Anual. Más adelante podrás convertir entre EA, EM, NMV, NTV y otras tasas.";

    }

    if(pregunta.includes("interes") || pregunta.includes("interés")){

        return "📊 Podré calcular interés simple, compuesto y tablas de amortización.";

    }

    return "🤖 Todavía estoy aprendiendo. Muy pronto responderé utilizando Inteligencia Artificial.";
}

function enviarMensaje(){

    let texto = input.value.trim();

    if(texto==="") return;

    chat.innerHTML += `
    <div class="usuario">
        <div class="burbuja">
            ${texto}
        </div>
    </div>
    `;

    input.value="";

    chat.scrollTop=chat.scrollHeight;

    chat.innerHTML += `
    <div class="ia" id="escribiendo">
        <div class="burbuja">
            ⏳ SIMULA IA está escribiendo...
        </div>
    </div>
    `;

    chat.scrollTop=chat.scrollHeight;

    setTimeout(function(){

        const escribiendo=document.getElementById("escribiendo");

        if(escribiendo){
            escribiendo.remove();
        }

        chat.innerHTML += `
        <div class="ia">
            <div class="burbuja">
                ${responder(texto)}
            </div>
        </div>
        `;

        chat.scrollTop=chat.scrollHeight;

    },1000);

}

boton.addEventListener("click",enviarMensaje);

input.addEventListener("keydown",function(e){

    if(e.key==="Enter"){

        e.preventDefault();

        enviarMensaje();

    }

});

input.focus();
