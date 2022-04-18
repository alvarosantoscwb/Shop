export function ADICIONAR_PRODUTO_CARRINHO(state, payload) {
    // criar um objeto para ser colocado no carrinho
    let cartItem = {
        id: payload,
        qtde: 1,
    }
    // adicionar o objeto no carrinho
    state.carrinho.push(cartItem)

}
export function DIMINUIR_PRODUTO_CARRINHO(state, payload) {
    // procurar o produto no carrinho
    let existingItem = state.carrinho.find(produto => produto.id === payload)
    // se encontrar, diminuir a quantidade
    if (existingItem) {
        existingItem.qtde--
    }
}
export function INCREMENTAR_PRODUTO_CARRINHO(state, payload) {
    // procurar o produto no carrinho
    let existingItens = state.carrinho.find(produto => produto.id === payload)
    // se encontrar, aumentar a quantidade
    if (existingItens) {
        existingItens.qtde++
    }
}
export function REMOVER_PRODUTO_CARRINHO(state, payload) {
    // procurar o produto no carrinho
    let existingItens = state.carrinho.find(produto => produto.id === payload)
    // se encontrar, remover do carrinho
    if (existingItens) {
        state.carrinho.splice(payload.id)
    }
}