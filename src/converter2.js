function Converter2() {
    var valorElemento2 = document.getElementById("valor2");
    
    var valor2 = valorElemento2.value;
  
    var valorEmEuroNumerico = parseFloat(valor);
  
    var valorEmReal = valorEmEuroNumerico * 5.03;
  
    var elementoValorConvertido2 = document.getElementById("valorConvertido2");
  
    var valorConvertido2 = "O resultado em real é R$ " + valorEmReal;
    elementoValorConvertido2.innerHTML = valorConvertido2;
  }