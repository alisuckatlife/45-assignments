"use strict";
let list1 = ['Essa', 'Adam', 'Umair'];
let msg2 = `I would like to invite you to dinner.`;
// let removal='Essa'
// let newG='Ali';
// let remove=list1.indexOf(removal);
// if(remove!==-1){
//     list1.splice(remove,1,newG);
// }
for (let x of list1) {
    console.log('Dear', x, msg2);
}
console.log(`\n  ${list1[0]} could not make it to dinner \t \n`);
list1[0] = 'Ali';
for (let x of list1) {
    console.log('Dear', x, msg2);
}
// console.log(`\t \n ${removal} Could not make it to the dinner.\n \t`);
