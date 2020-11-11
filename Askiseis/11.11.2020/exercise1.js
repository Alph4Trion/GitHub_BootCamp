function map (f,a){
    var result = [];
    var i;
    for (i=0; i!=a.length; i++)
    result[i] = f(a[i]);
        return result;
}

var f = function(x){
    return x*x*x;
}

var numbers =[0,1,2,5,10];
var cube = map(f,numbers);
console.log(cube);



function codeHomework(subject, callback) {​​​​​
    alert(`Starting my ${​​​​​subject}​​​​​ coding homework.`);
      callback();
    }​​​​​
    function alertFinished(){​​​​​
    alert('Finished my coding homework');
    }​​​​​
    codeHomework('Javascript', alertFinished);

