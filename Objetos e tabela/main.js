let rafa = {nome:"Rafa", Vitorias:2, Empates:1, Derroras:1, Pontos:0}
let paulo = {nome: "Paulo", Vitorias:1, Empates:1, Derrotas:2, Pontos:0}
let rodrigo = {nome: "Rodrigo", Vitorias:3, Empates:2, Derrotas:2, Pontos:0}

function calculaPontos(jogador){
    let pontos = jogador.Vitorias * 3 + jogador.Empates
    return pontos
}

rafa.pontos = calculaPontos(rafa)
paulo.pontos = calculaPontos(paulo)
rodrigo.pontos = calculaPontos(rodrigo)

let jogadores = [rafa, paulo, rodrigo]

function exibeJogadoresNaTela(jogadores){
    let elemento = ""
    for(let i= 0; i < jogadores.length; i++){
        elemento += "<tr><td>" + jogadores[i].nome + "</td>"
        elemento += "<td>" + jogadores[i].Vitorias +"</td>"
        elemento += "<td>" + jogadores[i].Empates + "</td>"
        elemento += "<td>" + jogadores[i].Derroras + "</td>"
        elemento += "<td>" + jogadores[i].pontos + "</td>"
        elemento += "<td> + <button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        elemento += "<td> + <button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        elemento += "<td> + <button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
    "</tr>"
    }
    
    let tabelaJogadores = document.querySelector('#tabelaJogadores')
    tabelaJogadores.innerHTML = elemento
}

exibeJogadoresNaTela(jogadores)

function adicionarVitoria(i){
    let jogador = jogadores[i]
    jogador.Vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores)
}

function adicionarEmpate(i){
    let jogador = jogadores[i]
    jogador.Empates++;
    jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores)
}

function adicionarDerrota(i){
    let jogador = jogadores[i];
    jogador.Derrotas++;
    exibeJogadoresNaTela(jogadores);
}




