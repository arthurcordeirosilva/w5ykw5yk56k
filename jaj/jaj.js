export function criarPilha(tamanhoPilha = 4){
    return[...new Array(tamanhoPilha) ]

}
export function inserirItem(pilha, item){


    const spacePosition = pilha.indexOf(undefined)
    if(spacePosition === -1){
        console.log('nao tem espaço')
        return
    }
    pilha[spacePosition] = item
}

 export function retirarItem(pilha){
const primeiro = pilha.indexOf(undefined)
    if(pilha[0] === undefined){
    console.log('jaj')
    return
 }
    for (let i = 1; i < pilha.length; i++) {
        pilha[i] = pilha[i - 1]
        return
    }
    console.error('pilha vazia')
    }