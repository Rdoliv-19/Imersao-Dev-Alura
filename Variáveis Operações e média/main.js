function mostraNaTela() {
    let resultado = document.querySelector('.resultado');
    let aprovadoReprovado = document.querySelector('.aprovado-reprovado');
    let nome = document.querySelector('.captura-nome').value

    let notaprimeiroBimestre = Number(document.querySelector('.primeiraNota').value);
    let notaSegundoBimestre = Number(document.querySelector('.segundaNota').value);
    let notaTerceiroBimestre = Number(document.querySelector('.terceiraNota').value);
    let notaQuartoBimestre = Number(document.querySelector('.quartaNota').value);

    let notaFinal = (notaprimeiroBimestre + notaSegundoBimestre +
        notaTerceiroBimestre + notaQuartoBimestre) / 4;
    
    notaFinal = Number(notaFinal).toFixed(1)

     resultado.innerHTML = (`Bem vindo ${nome} sua média foi de ${notaFinal}`)

   if (notaFinal >= 7) {
        aprovadoReprovado.innerHTML = ('Parabéns você foi aprovado');
    } else {
        aprovadoReprovado.innerHTML = ('Não foi aprovado');
    }
}
