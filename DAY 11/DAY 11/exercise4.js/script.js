function truncar(texto) {
    if (texto.length >30) {
    return texto.substr(0, 30) + "...";

    }

    return texto;
}

document.getElementById('truncar').addEventListener('click', function(){
    const textoIngresado = document.getElementById('texto').value;
    const textoTruncado = truncar(textoIngresado);
    document.getElementById('resultado').innerText= textoTruncado;
    
});