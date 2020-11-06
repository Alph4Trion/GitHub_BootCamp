let months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

let date = new Date();
let monthNumber = date.getMonth();
let monthName = months[monthNumber];
console.log(monthName);
