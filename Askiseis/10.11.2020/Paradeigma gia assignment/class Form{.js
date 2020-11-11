class Form{
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.getThings = function(){
      var input1 = document.getElementById("input1").value;
      var input2 = document.getElementById("input2").value;
      var h1 = document.getElementById("h1");
      var h2 = document.getElementById("h2");
      var submit = document.getElementById("submit");
      
        if(submit.onclick){
          h1.innerText = "your firstname is " + input1;
          h2.innerText = "Your last name is " + input2;
        }
    }
  }
}

const FirstName = new Form();
const LastName = new Form();
