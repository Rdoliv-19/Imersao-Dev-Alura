function adicionarFilme(){

let filmeFavorito = document.querySelector('#filme').value
let nomeFilme = document.querySelector('#nomeFilme').value

if(filmeFavorito.endsWith(".jpg")){
    listarFilmesNaTela(filmeFavorito)
    escreveNomeDoFilme(nomeFilme)
} else
    console.error("Endereço inválido");
document.querySelector('#filme').value = "";

}

function listarFilmesNaTela(filme, array){
    let capturaFilme = "<img src=" + filme + ">"
    let listaFilmes = document.querySelector('#listaFilmes')
    
    listaFilmes.innerHTML = listaFilmes.innerHTML + capturaFilme;
}

function escreveNomeDoFilme(nomeFilme){
    let escreveNome = document.querySelector('#escreve-nome')
    escreveNome.innerHTML = escreveNome.innerHTML + escreveNome;
}

//botao para remover
//Colocar o nome
//Guardar da lista os adicionados com push

//conversor de dolar para real - dividir funções - para real - euro colocar radio Buton