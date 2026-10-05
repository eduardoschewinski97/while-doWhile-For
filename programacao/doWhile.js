const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

async function main() {
  const rl = readline.createInterface({ input, output });
  let continuar;

  do {
    const num1 = Number(await rl.question(`Digite o primeiro número: `));
    const num2 = Number(await rl.question(`Digite o segundo número: `));

    const soma = num1 + num2;
    console.log(`A soma dos números é: ${soma}`); 

    const subtracao = num1 - num2;
    console.log(`A subtração dos números é: ${subtracao}`);

    const multiplicacao = num1 * num2;
    console.log(`A multiplicação dos números é: ${multiplicacao}`);

    const divisao = num2 == 0 ? num1 / num2 : 'Não é possível dividir por zero';
    console.log(`A divisão dos números é: ${divisao}`);

    continuar = Number(await rl.question(`\nDeseja realizar outra operação? (Sim - 1, Não - 2): `));
    
    if (continuar === 1) {
      console.log(`\nVamos realizar outra operação!\n`);
    }

  } while (continuar === 1);

  console.log(`\nObrigado por utilizar o programa!`);

  rl.close();
}

main();
