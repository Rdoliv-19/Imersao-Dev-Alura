let carros = {Marca:"Volkswagen", Ano:2022, Modelo:2023, Estoque:1}

carros.Estoque = atualizaEstoque(carros)
carros.Ano = atualizaAno(carros)
carros.Marca = novaMarca(carros)

function atualizaEstoque(novoEstoque){
    let aumentaEstoque = novoEstoque.Estoque + 5
    return aumentaEstoque
}

function atualizaAno(novoAno){
    let carroNovoAno = novoAno.Ano - 2
    return carroNovoAno
}

function novaMarca(novaMarca){
    let nomeNovaMarca = novaMarca.Marca = "Fiat"
    return nomeNovaMarca
}

console.log(carros)

