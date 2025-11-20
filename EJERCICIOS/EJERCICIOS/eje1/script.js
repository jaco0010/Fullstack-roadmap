 //Que pasa con el codigo? porque no funciona
 document.getElementById("btnVerificar").addEventListener("click", function() {
      const num = parseInt(document.getElementById("numero").value, 10);
      if (isNaN(num)) {
        document.getElementById("resultado").textContent = "Por favor ingresa un número válido.";
      } else if (num % 2 === 0) {
        document.getElementById("resultado").textContent = "Es un numero par";
      } else {
        document.getElementById("resultado").textContent = "Es un número impar";
      }
    });