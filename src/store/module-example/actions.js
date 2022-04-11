export function adicionarAoCarrinho({ commit }, payload) {
  // verifica se payload é um id de produto válido
  payload.item.id.length
  // verifica se já existe o produto no carrinho
  payload.item.carrinho.length
  // caso exista, incrementa um

  // caso não exista, adiciona
}

export function diminuirNoCarrinho({ commit }, payload) {
  // verifica se payload é um id de produto válido
  payload.item.id.length
  // verifica se já existe o produto no carrinho
  // caso exista, verifica se tem apenas um produto no carrinho
  // caso seja verdadeiro, remove o produto completamente
  // caso seja falso, diminui a quantidade em um

  // caso não exista não faz nada, operação inválida
}

export function incrementarNoCarrinho({ commit }, payload) {
  // verifica se payload é um id de produto válido
  payload.item.id
  // verifica se já existe produto no carrinho
  payload.incrementarNoCarrinho
  // caso exista, aumenta a quantidade em um
  // caso não exista não faz nada, operação inválida
}

export function removerDoCarrinho({ commit }, payload) {
  // verifica se payload é um id de produto válido
  payload.item.id.length
  // verifica se já existe produto no carrinho
  payload.item.carrinho.length
  // caso exista, remove o produto completamente

  // caso não exista não faz nada, operação inválida

}
