
//declared variables
let today = new Date();
let past = new Date('December, 17, 1995');

//declared function for returning the difference of months days and years
function calculateDifference() {
    let inMonths = Math.abs((today.getMonth()+1) - past.getMonth()+1)
        console.log(`The difference in months is ${inMonths} months`);
    let inDays = Math.abs((today.getDate()) - (past.getDate()));
        console.log(`The difference in days is ${inDays} days`);    
    let inYears = today.getFullYear() - past.getFullYear();
        console.log(`The difference in years is ${inYears} years`);
}

//function call
calculateDifference();