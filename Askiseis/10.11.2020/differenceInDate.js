const arr = [2, 30, "pizza", "2",2,30];
 
function uniqueArr(){
    return new Set(arr);
}

console.log(uniqueArr());