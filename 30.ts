let userNames=['admin','Ali','Ahmed','Umair','Essa'];
for( let greet of userNames){
    if(greet=='admin'){
        console.log(`Hello ${greet}, would you like to see a status report ?`)
    }
    else
    console.log(`Hello ${greet}, Thank you for logging in again.` )
}