const boton = document.getElementById("mayus");
const inputTexto = document.getElementById("texto");
const salida = document.getElementById("resultado");

function capitalizarPalabras(string) {
  return string
    .split(" ")
    .map(palabra => {
      if (palabra === "") return palabra;
      return palabra.charAt(0).toUpperCase() + palabra.slice(1);
    })
    .join(" ");
}

mayus.addEventListener("click", function() {
  const texto = inputTexto.value;
  const resultado = capitalizarPalabras(texto);
  salida.textContent = resultado;
});



