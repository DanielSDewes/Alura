const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// set armazena valores únicos, mas não tem acesso a outros métodos de array, por isso para acessar esse "novo array" com valores únicos é necessário usar o método spread [... array]
const nomesAtualizados = new Set(nomes);

const novaLista = [... new Set(nomes)];
console.log(novaLista);
