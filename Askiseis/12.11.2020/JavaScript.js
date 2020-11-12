function arrayFromRange(min,max){
    let array = [];
    let range = max-min;
    for (let i=min; i<=max; i++){
        range = range+1;
    }

     return array.push(range);
}

arrayFromRange(7,16);

// 1st approach
function vowelCount(str) {
    let vowels = 'aeiou';
    let count = 0;
    for(let i = 0; i < str.length; i++) {
     if(vowels.indexOf(str[i]) !== 1) {
       count += 1;
     }
    }
    return count;
    }
    
    console.log(vowelCount("The weather is fine"));
    
    
    // 2nd approach
    function vowelCount(str) {
      const vowels = str.match(/[aeiou]/gi).length
      return vowels;
    }
    
    console.log(vowelCount("The weather is fine"));