let myCar = {
    name:"Toyota",
    model:"Yaris",
    year:2011
}
console.log(myCar);
delete myCar.name;
console.log(myCar);

function Car (make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;
}

const honda = new Car(honda,NSX,2000);
console.log(honda);



//object Prototype with a class

class BankAccount {
    constructor(firstName, lastName, iban, balance, isFlagged) { 
        this.onoma = firstName;
        this.epitheto = lastName;
        this.iban = iban;
        this.ypoloipo = balance;
        this.alert = isFlagged;

        this.deposit = function(amountDeposit){
            if (!isFlagged){
                this.ypoloipo = balance + amountDeposit;
                return `Deposited ${amountDeposit} to ${iban}, owner : ${firstName} ${lastName}. Total now is ${this.ypoloipo}`
            } else { 
                return `Something went wrong with deposit`
            }
        }
        this.withdraw = function(amountWithdraw){
            if ((!isFlagged) && (balance>amountWithdraw)){
                this.ypoloipo = balance - amountWithdraw;
                return `Withdrew ${amountWithdraw} from ${iban}, owner : ${firstName} ${lastName}. Total now is ${this.ypoloipo}`

            } else {
                return `something went wrong with withdrawal`
            }
        }
    }
}

const customer = new BankAccount('Harris', 'Karaiskos', '4213555221265', 3000, false);

console.log(customer.deposit(100));
console.log(customer.withdraw(50));


//object prototype with a function

function BankAccount(name,lastName,balance){
    this.name = name;
    this.lastName = lastName;
    this.balance = balance;
    
    this.deposit = function(depositedMoney){
        
        return `Thank you dear ${this.name} ${this.lastName}, your new balance is ${this.balance + depositedMoney}`      
    }

    this.withdraw = function(withdrewMoney){
        if(withdrewMoney>balance){
            return `Sorry dear ${this.name} ${this.lastName}, but your balance is lower than your request!`
        }
        else {
            return `Thank you dear ${this.name} ${this.lastName}, your new balance is ${this.balance - withdrewMoney}`
        }
    }
}

const harris = new BankAccount("Harris", "Karaiskos", 3000);
console.log(harris.deposit(80));
console.log(harris.withdraw(3000));