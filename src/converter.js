function converter(){
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    
    var valorEmDolarNumerico = parseFloat(valor);
    console.log(valorElemento);
    
    var valorEmReal = valorEmDolarNumerico * 5;
    console.log(valorEmReal);
    
    var elementoValorConvertido = document.getElementById("valorConvertido")
    var valorConvertido = "O resultado em real é R$ " + valorEmReal;
    elementoValorConvertido.innverHTML = valorConvertido;
  }