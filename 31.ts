let users=['Mussa','Abdullah','Ali'];
if(users.length===0){
    console.log('We need to find some users')
}
else{

let P_age1=7;

if(P_age1<2){
    console.log("You're a baby")
}
if (P_age1>=2 && P_age1<4) {
    console.log("You're a toddler")
    
} 
if(P_age1>=4 && P_age1<13){
    console.log("You're a kid")}
if(P_age1>=13 && P_age<20){
    console.log("You're a teenager")
}    

if(P_age1>=20 && P_age1<65){
    console.log("You're an adult")
}
if(P_age1>65){
    console.log("You're an elder person")
}
users.length=0;
console.log(users,'The users list is now empty.')
}