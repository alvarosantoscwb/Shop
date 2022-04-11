export function ADICIONAR_PRODUTO_CARRINHO(state, payload) {
    // criar um objeto para ser colocado no carrinho
    let cartItem = {}
    // adicionar o objeto no carrinho
}

export function DIMINUIR_PRODUTO_CARRINHO(state, payload) {
    // procurar o produto no carrinho
    payload.cartItem
    // se encontrar, diminuir a quantidade
    payload.cartItem.length,
        commit(DIMINUIR_PRODUTO_CARRINHO)
}

export function INCREMENTAR_PRODUTO_CARRINHO(state, payload) {
    // procurar o produto no carrinho
    payload.cartItem.length
    // se encontrar, aumentar a quantidade
    state.incrementar++
}

export function REMOVER_PRODUTO_CARRINHO(state, payload) {
    // procurar o produto no carrinho

    // se encontrar, remover do carrinho
}