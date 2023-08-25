"use strict";
let describe_city = (city, country = 'Pakistan') => `${city} is in ${country}`;
console.log(describe_city('Karachi'));
console.log(describe_city('Islamabad'));
console.log(describe_city('Tokya', 'Japan'));
