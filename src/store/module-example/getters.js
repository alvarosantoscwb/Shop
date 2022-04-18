export function carrinhoDetalhado(state) {
  // passar por cada item no carrinho (state.carrinho) e buscar os dados no array de itens (state.itens)
  let carrinhoDetalhado = []
  for (let itemCarrinho of state.carrinho) {
    let itemEncontrado = state.itens.find(item => item.id == itemCarrinho.id)
    // array de objetos detalhados para cada item do carrinho
    if (itemEncontrado) {
      carrinhoDetalhado.push({
        id: itemEncontrado.id,
        img: itemEncontrado.img,
        nome: itemEncontrado.nome,
        qtde: itemCarrinho.qtde,
      })
    }
  }
  return carrinhoDetalhado
}
export function quantidadeItensCarrinho(state) {
  return state.carrinho.length
}