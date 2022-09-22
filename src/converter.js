function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;

  var valorEmDolarNumerico = parseFloat(valor);
  console.log(valorElemento);

  var valorEmEuroNumerico = parseFloat(valor);
  console.log(valorElemento);

  var valorEmReal = valorEmDolarNumerico * 5.17;
  console.log(valorEmReal);

  var valorEmDolar = valorEmEuroNumerico * 5.03;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido2 = "O resultado em real é R$ " + valorEmDolar;
  elementoValorConvertido.innerHTML = valorConvertido2;
}
