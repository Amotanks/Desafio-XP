const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o nome do Herói: ', (nome) => {
  rl.question('Digite o XP do Herói: ', (xp) => {
    const nivel = calcularNivel(xp);
    console.log(`O Herói de ${nome} está no nível de ${nivel}!`);
    rl.close();
  });
});

function calcularNivel(xp) {
  if (xp < 1000) {
    return 'Ferro';
  } else if (xp >= 1001 && xp <= 2000) {
    return 'Bronze';
  } else if (xp >= 2001 && xp <= 5000) {
    return 'Prata';
  } else if (xp >= 6001 && xp <= 7000) {
    return 'Ouro';
  } else if (xp >= 7001 && xp <= 8000) {
    return 'Platina';
  } else if (xp >= 8001 && xp <= 9000) {
    return 'Ascendente';
  } else if (xp >= 9001 && xp <= 10000) {
    return 'Imortal';
  } else {
    return 'Radiante';
  }
}