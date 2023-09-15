const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Léo"];

nomes.splice(1, 2, "Rodrigo"); //o parametro 2 significa quantos elementos excluiremos do array em sequencia apartir do primeiro parametro (1) (no caso ana e caio)

console.log(nomes);

animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠')
animaisDoAquario.splice(3,2,'🐟')

console.log(animaisDoAquario)