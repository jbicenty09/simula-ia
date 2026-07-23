const chat = document.getElementById("chat");
const input = document.getElementById("pregunta");
const boton = document.getElementById("enviar");

chat.innerHTML = `
<div class="mensaje">

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
`;

function enviarMensaje(){

    let texto = input.value.trim();

    if(texto=="") return;

    chat.innerHTML += `
    <div class="mensaje">

    <b>Tú:</b>

    <br><br>

    ${texto}

    </div>

    <div class="mensaje">

    🤖 Estoy aprendiendo.

    Muy pronto responderé utilizando Inteligencia Artificial.

    </div>
    `;

    input.value="";

    chat.scrollTop = chat.scrollHeight;
}

boton.addEventListener("click", enviarMensaje);

input.addEventListener("keydown", function(e){

    if(e.key==="Enter"){

        e.preventDefault();

        enviarMensaje();

    }

});
