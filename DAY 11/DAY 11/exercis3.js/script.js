 function eliminarLetra(texto, letra) {
  return texto.split(letra).join("");
}

document.getElementById("botonEliminar").addEventListener("click", function() {
  const textoIngresado = document.getElementById("texto").value;
  const letraIngresada = document.getElementById("letra").value;


  const nuevoTexto = eliminarLetra(textoIngresado, letraIngresada);
  document.getElementById("resultado").innerText = nuevoTexto;
})