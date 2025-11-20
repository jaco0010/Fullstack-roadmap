//// create a function that check if a string is a palindrome
 function Palindromo(texto) {
      texto = texto.toLowerCase();
      const invertido = texto.split("").reverse().join("");
      return texto === invertido;
    }

    document.getElementById("botonVerificar").addEventListener("click", function() {
      const textoIngresado = document.getElementById("texto").value;

      if (Palindromo(textoIngresado)) {
        document.getElementById("resultado").innerText = "es palindromo";
      } else {
        document.getElementById("resultado").innerText = "no es palindromo";
      }
    });