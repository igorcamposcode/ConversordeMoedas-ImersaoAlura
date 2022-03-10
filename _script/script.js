function converter(){
    var valorElemento = document.getElementById("valor"); 
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);

    var valorEmReal = valorEmDolarNumerico * 5.03;

    console.log(valorEmReal);
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "o seu valor é R$: " + valorEmReal.toFixed(2)
    
    elementoValorConvertido.innerHTML = valorConvertido
}


function converter2(){
    var valorElemento = document.getElementById("valor2");
    var valor2 =valorElemento.value;
    var valorEmLibraNumerico = parseFloat(valor2); 

    var valorEmReal = valorEmLibraNumerico * 6.57;

    console.log(valorEmReal);
    var elementoValorConvertido2 = document.getElementById("valorConvertido2");
    var valorConvertido2 = "o seu valor é R$: " + valorEmReal.toFixed(2)

    elementoValorConvertido2.innerHTML = valorConvertido2
}