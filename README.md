# listaJS

1- O que é o ES6?
ES6 é a abreviação para Ecma Script 6, que é a sexta versão de padronização do JavaScript. 

2 - Exemplifique algumas features introduzidas no ES6?
    Promisses, Async/Await, Arrow Function.

3 - Qual a diferença entre var, let e const?
Var pode ser utilizada em vários trechos do código, e não necessariamente em um bloco de comandos, ou apenas em uma classe. Já o let, é usado apenas em um bloco de instruções. Caso uma variável let, for chamada fora de seu bloco, apresentará erros. E o const, é usado para variáveis que não poderão ser reatribuídas. 

4- O que é destructuring e para quais propósitos pode ser utilizado?
O destructuring no JavaScript permite que valores de um array, possam ser abstraídos em variáveis diferentes. Por exemplo:
let [item, ...resto] = [1, 2, 3];
console.log(item); // 1
console.log(resto); // [2, 3]

5 - O que é o DOM?
DOM (Document Object Model) é uma interface utilizada pelo navegador para representar a página web. É interessante pois permite criar aplicações, arrastar, excluir elementos sem precisar atualizar a página.

6 - Quais problemas o JavaScript assíncrono soluciona?

7 - Para que servem os comandos async e await?
Os comandos async e await servem para indicar um trecho do código que deverá ser assíncrono. Para indicar que uma função é assíncrona usamos a palavra async, e a palavra await para cada processamento assíncrono da função, ou seja, onde for marcado com await deverá esperar a execução da função para ser executado também.

8 - Quais as vantagens de se usar Promises, ao invés de Callbacks?
O código de uma promise é mais simples de ler e entender do que de um callback. As promisses permitem que ao executar uma cadeia de tarefas assíncronas a próxima tarefa a ser realizada só pode ser feita até a outra ser concluída. Em um callback, as chamadas assíncronas de retorno vão se acumulando, e podem causar erros, além de ficar um código difícil de entender. 

9 - Uma requisição a um servidor é feita, caso o valor enviado para o servidor seja uma cadeia de caracteres, o mesmo devolve essa cadeia de caracteres em caixa-alta, caso contrário um erro é devolvido informando “the request value is not supported”. Implemente uma Promise que simule o caso descrito e implemente um teste para o caso de sucesso e de erro. Além disso, a simulação deve conter um atraso aleatório de 500 milissegundo a 2 segundos, simulando o atraso da comunicação com o servidor. Dica: pesquisar sobre a função setTimeout.

10 - Uma empresa de luz precisa de um software que monitore o estado das lâmpadas (acesa, apagada) instaladas nos postes de energia. Considerando que  esses postes possuem lâmpadas inteligentes que acendem durante a noite e mantêm-se apagadas durante o dia. Saber se estão de fato acesas ou apagadas seriam de grande valor pois assim seria possível identificar lâmpadas queimadas. Desta forma, implemente uma função que, a cada intervalo aleatório de tempo entre 2 e 4 segundos, troque o estado da lâmpada e retorne para um callback que deve exibir no console o estado atual da lâmpada. Dica: pesquisar sobre a função setInterval.

11 - Um professor de algoritmos está ensinando seus alunos a implementarem árvores binárias e cobra o seguinte exercício: “Implemente uma árvore binária cujo nó raiz seja um número qualquer. A árvore deve conter um método para criar 2 nós folha à direita e à esquerda do nó raiz, sendo ambos números quaisquer diferentes do valor do nó raiz e a estrutura deve automaticamente colocar o maior número informado à direita do nó raiz e o menor número informado à esquerda.” Implemente o exercício descrito acima usando as classes JavaScript. Deverá haver uma classe “Folha”, uma classe “No” e uma classe “Arvore”. A classe “Arvore” deve ser responsável por criar o nó raiz e deve conter o método que cria os nós folha baseados nos critérios do exercício descrito. Além disso, deve haver um modo de checar se o nó é um nó folha ou não e na execução da aplicação teste devem haver console.log’s informando o nó raiz e seus filhos e quais os tipos de cada nó (nó ou nó folha). Use conceitos de OO tais como herança.
