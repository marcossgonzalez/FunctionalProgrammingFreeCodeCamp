//----------------------------------------------
function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line
  return anim.slice(beginSlice, endSlice);

  // Only change code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
//----------------------------------------------
function nonMutatingSplice(cities) {

  return cities.slice(cities, 3);
}
//----------------------------------------------
function nonMutatingConcat(original, attach) {
  // Only change code below this line
  return original.concat(attach);

  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);
//----------------------------------------------
function nonMutatingPush(original, newItem) {
  // Only change code below this line
  return original.concat(newItem);

  // Only change code above this line
}

const first2 = [1, 2, 3];
const second2 = [4, 5];
nonMutatingPush(first, second);
//----------------------------------------------
