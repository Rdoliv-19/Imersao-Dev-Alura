function Converter(){
   let valor = Number(document.querySelector('#valor').value);
   let resultado = document.querySelector('#valorConvertido');

   let calculo = valor * 1.8 + 32;

   resultado.innerHTML = (`O valor em Fahrenheit é de ${calculo}`)
}