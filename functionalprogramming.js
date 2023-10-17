//----------------------------------------------
/*
A programação funcional trata-se de:

3 - Funções isoladas – não há dependência do estado do programa, que inclui variáveis globais 
que estão sujeitas a alterações.

2 - Funções puras – a mesma entrada sempre dá a mesma saída.

3 - Funções com efeitos colaterais limitados – quaisquer alterações ou mutações no estado do 
programa fora da função são cuidadosamente controladas.*/

// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';
//----------------------------------------------
/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4TeamFCC = getTea(40);
// Only change code above this line
//----------------------------------------------