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
const getTea2 = (numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4TeamFCC = getTea2(40);
// Only change code above this line
//----------------------------------------------
// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);
//----------------------------------------------
// tabs is an array of titles of each site open within the window
const Window = function (tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {

  // Only change code below this line
  const tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab

  const tabsAfterIndex = this.tabs.slice(index + 1);
  // Get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

  // Only change code above this line

  return this;
};

// Let's create three browser windows
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);
//----------------------------------------------
// The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line
  const valueFixed = 1;
  return fixedValue + valueFixed;

  // Only change code above this line
}
//----------------------------------------------
// The global variable
let fixedValue2 = 4;

// Only change code below this line
function incrementer(arg) {
  arg = 1;
  return fixedValue2 + arg;

  // Only change code above this line
}
//----------------------------------------------
// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(list, bookName) {
  let copyBookList = [...list];
  copyBookList.push(bookName);
  console.log(copyBookList);
  return copyBookList;

  // Change code above this line
}

// Change code below this line
function remove(list, bookName) {
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {
    let copyBookRemove = [...list];
    //for (let i = 0; i<bookList.length;i++){
    //copyBookRemove.push(bookList[i]);
    //}
    copyBookRemove.splice(copyBookRemove.indexOf(bookName), 1);
    console.log(copyBookRemove);
    return copyBookRemove;
    // Change code above this line
  }
}

add(bookList, "A Brief History of Time");
remove(bookList, 'On The Electrodynamics of Moving Bodies');
remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
//----------------------------------------------