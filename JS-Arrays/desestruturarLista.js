const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeENota(aluno){
    if (lista[0].includes(aluno)) {
        const [alunos, medias] = lista;
        const indice = alunos.indexOf(aluno);
        const MediaAluno = medias[indice];
        console.log(`O aluno(a) ${aluno} tem a média ${MediaAluno}`);
    } else {
        console.log(`O aluno informado não está na lista`);
    }
}

exibeNomeENota('Caio');