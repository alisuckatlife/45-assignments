"use strict";
let make_shirt1 = (size = 'Large', text = 'I love typescript') => `Your shirt of size ${size} and with text ${text} will be ready soon`;
console.log(make_shirt1());
console.log(make_shirt1('Medium'));
console.log(make_shirt1('Small', 'I love Computer Science'));
