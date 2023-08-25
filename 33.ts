let nums=[1,2,3,4,5,6,7,8,9];


for(let loop of nums){
    let end;
    if(loop==1){
        end='st'
    }
    else if (loop==2){
        end='nd'
    }
    else if(loop==3){
        end='rd';
    }
    else{
        end="th"
}
    console.log(`${loop}${end}`)
        
    }

