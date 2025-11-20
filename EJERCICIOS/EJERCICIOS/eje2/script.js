 //cuenta caracteres, excluyendo espacios ¿Que no funciona?
 document.getElementById("btnContar").addEventListener("click", function() {
      const texto = document.getElementById("texto").value;
      const textoSinEspacios = texto.replace(/ /g, "");
      const longitud = textoSinEspacios.length;
      document.getElementById("conteo").textContent = longitud;
    });