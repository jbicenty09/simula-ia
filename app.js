const chat = document.getElementById("chat");

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

document.getElementById("enviar").onclick=function(){

let texto=document.getElementById("pregunta").value;

document.getElementById("pregunta").addEventListener("keypress", function(e){

    if(e.key==="Enter"){

        document.getElementById("enviar").click();

    }

});  
  
if(texto=="") return;

chat.innerHTML+=`
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

document.getElementById("pregunta").value="";

chat.scrollTop=chat.scrollHeight;

}
