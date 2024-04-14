const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeENota(aluno){
    if (lista[0].includes(aluno)) {
        const indice = lista[0].indexOf(aluno);
        const MediaAluno = lista[1][indice];
        console.log(`O aluno(a) ${aluno} tem a média ${MediaAluno}`);
    } else {
        console.log(`O aluno informado não está na lista`);
    }
}

exibeNomeENota('Juliana');