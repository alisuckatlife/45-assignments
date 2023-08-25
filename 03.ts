let n1='muhammad ali asad';
console.log(n1.toUpperCase());

console.log(n1.toLowerCase());

const sentence = "this is a sample sentence";
const words = sentence.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1).toLowerCase();
}

const titleCaseSentence = words.join(" ");
console.log(titleCaseSentence);
