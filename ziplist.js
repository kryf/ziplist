const testListOne = ['a', 'b', 'c'];
const testListTwo = [1, 2, 3];

function zipList(list1, list2){
  let newList = [];
  for(let i of list1){
    newList.push(list1[i], list2[i]);
   // newList.push(list2[i]);
  }
  return newList;
}

console.log(zipList(testListOne, testListTwo));

function zipListTheSimpleWay(list1, list2){
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(testListOne, testListTwo));