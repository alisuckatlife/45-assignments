let fav_places=['Skardu','Naran','Ayubia','Amsterdam','Madrid'];
console.log('Original Order: ',fav_places);

let sorted=[...fav_places].sort();
console.log('Alphabetical order : ',sorted);

console.log('Original Array : ',fav_places);


let reverseAlphabetical=[...sorted].reverse();
console.log('Reverse alphabetical : ',reverseAlphabetical);


console.log('Original Array : ',fav_places);


let reverse=[...fav_places].reverse();
//let reverse2=[...sorted].reverse();
console.log('Reversed array :',reverse);

console.log('Original Array : ',fav_places);

let reverse1x=[...reverse].reverse();
console.log("Back to original after reversing twice :",reverse1x);


fav_places.sort();
console.log('Sorted list : ',fav_places);

fav_places.reverse();
console.log('Reversed alphabetically : ',fav_places);



