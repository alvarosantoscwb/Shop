export function adicionarAoCarrinho({ commit, state }, payload) {
  // verifica se payload é um id de produto válido
  if (!state.itens.find(item => item.id === payload)) return;
  // verifica se já existe o produto no carrinho
  const existingItens = state.carrinho.find(produto => produto.id === payload)
  // caso exista, incrementa um
  if (existingItens) {
    commit(INCREMENTAR_PRODUTO_CARRINHO, payload)
  } else {
    // caso não exista, adiciona
    commit(ADICIONAR_PRODUTO_CARRINHO, payload)
  }
}
export function diminuirNoCarrinho({ commit, state }, payload) {
  // verifica se payload é um id de produto válido
  if (!state.itens.find(item => item.id === payload)) return;
  // verifica se já existe o produto no carrinho
  const existingItens = state.carrinho.find(produto => produto.id === payload)
  // caso exista, verifica se tem apenas um produto no carrinho
  if (existingItens === 1) {
    // caso seja verdadeiro, remove o produto completamen
    commit(REMOVER_PRODUTO_CARRINHO)
  }
  // caso seja falso, diminui a quantidade em um
  if (existingItens > 1) {
    commit(DIMINUIR_PRODUTO_CARRINHO)
  } else {
    // caso não exista não faz nada, operação inválida
    return ""
  }
}
export function incrementarNoCarrinho({ commit, state }, payload) {
  // verifica se payload é um id de produto válido
  if (!state.itens.find(item => item.id === payload)) return;
  // verifica se já existe produto no carrinho
  const existingItens = state.carrinho.find(produto => produto.id === payload)
  // caso exista, aumenta a quantidade em um
  if (existingItens) {
    commit(INCREMENTAR_PRODUTO_CARRINHO)
  } else {
    // caso não exista não faz nada, operação inválida
    return ""
  }
}
export function removerDoCarrinho({ commit, state }, payload) {
  // verifica se payload é um id de produto válido
  if (!state.itens.find(item => item.id === payload)) return;
  // verifica se já existe produto no carrinho
  const existingItens = state.carrinho.find(produto => produto.id === payload)
  // caso exista, remove o produto completamente
  if (existingItens === 1) {
    commit(REMOVER_PRODUTO_CARRINHO)
  } else {
    // caso não exista não faz nada, operação inválida
    return ""
  }
}
