 function Converter(){
    let valor = Number(document.querySelector('#valor').value);
    let resultado = document.querySelector('#valorConvertido');

   let anosLuz = 0.00000000000010570

   let calculo = valor * anosLuz

   resultado.innerHTML = (`O valor em anos luz é ${calculo}`)
}

// Conversor de km para anos luz
// Conversor de Firenheit para celcius
// Mostra o valor em Bitcoin