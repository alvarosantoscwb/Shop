export function carrinhoDetalhado(state) {
  // passar por cada item no carrinho (state.carrinho) e buscar os dados no array de itens (state.itens)
  state.carrinho.filter(dados => dados.id === state.itens)
  // array de objetos detalhados para cada item do carrinho
  return state.carrinho
}
export function quantidadeItensCarrinho(state) {
  return state.carrinho.length
}