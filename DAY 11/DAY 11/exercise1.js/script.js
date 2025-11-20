//create a function that given an string as a parameter returns how many vowels the string had.

function countVowels(string) {
 
  const vowels = "aeiouAEIOUáéíóúÁÉÍÓÚ";
  let count = 0;

 

for (let indice = 0; indice < string.length; indice++) {
  
  const counter = string[indice];
  
  if (vowels.includes(counter)) {
    count = count + 1;
  }
}

return count;
}



document.getElementById("botonContar").addEventListener("click", function() {

  const textoIngresado = document.getElementById("texto").value;


  const cantidad = countVowels(textoIngresado);

 
  document.getElementById("resultado").innerText = cantidad;
});