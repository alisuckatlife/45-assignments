"use strict";
let list2 = ['Essa', 'Adam', 'Umair'];
let msg3 = `I would like to invite you to dinner.`;
// let removal='Essa'
// let newG='Ali';
// let remove=list1.indexOf(removal);
// if(remove!==-1){
//     list1.splice(remove,1,newG);
// }
for (let x of list2) {
    console.log('Dear', x, msg3);
}
console.log(`\n  ${list2[0]} could not make it to dinner \t \n`);
list2[0] = 'Ali';
for (let x of list2) {
    console.log('Dear', x, msg3);
}
console.log(`\t\nI found a bigger table.\t\n`);
list2.unshift('Ahmed'); //Added to the beggining 
list2.splice(Math.floor(list2.length / 2), 0, 'Mussa');
for (let x of list2) {
    console.log('Dear', x, msg3);
}
