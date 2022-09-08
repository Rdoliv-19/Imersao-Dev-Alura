 function Converter(){
    let valor = Number(document.querySelector('#valor').value);
    let resultado = document.querySelector('#valorConvertido');

   let dolar = 5.25

   let calculo = valor * dolar

   resultado.innerHTML = (`O valor em dolar é ${calculo}`)
}

// Conversor de km para anos luz
// Conversor de Firenheit para celcius
// Mostra o valor em Bitcoin