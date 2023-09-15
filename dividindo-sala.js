const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const sala1 = alunos.slice(0, alunos.length / 2); //colocando o indice 10 no slice ele pega até o indice 9 no array
const sala2 = alunos.slice(alunos.length / 2); //quando não colocamos o segundo parametro, o java entende que queremos até o último

console.log(sala1);
console.log(sala2);