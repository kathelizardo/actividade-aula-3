let nome=prompt('Digite seu nome') 
let sobrenome= prompt('Digite seu sobrenome') 
let idade= Number(prompt('Digite sua idade'))
let nacionalidade=prompt( 'Nacionalidade') 
let ciudade= prompt('Ciudade de Residência')

console.log('Nome:' + nome + (' ')+ sobrenome )
console.log('Idade:' + idade + (' ') + 'anos')
console.log('Nacionalidade:' + nacionalidade)
console.log('Recidencia:' + ciudade)
console.log ('Seu registro foi bem sucedido')
console.log ('Bem-vindo')

var dados = {
    nome,
    sobrenome,
    nacionalidade,
    ciudade,
}

console.table(dados)


// console.table({ cor:'azul',
//                 magica:'leviosa'})