// BANK ACCOUNT PERSONAL


const BankAccount = {
  name:null,
  surname:null,
  balance:0,
  history:[],
  card_number:null,

  constructor:function(name, surname, balance){

    this.name = name
    this.surname = surname
    this.balance = balance

    this.card_number = Math.round(Math.random() * 1000000000000000)
    
    const newAccount = {...this} // yeni object yaradiriq

    return newAccount
  },

  addBalance:function(amount){

    this.balance += amount
    // this.history.push(`+${amount}`)
      this.history = [`+${amount}`, ...this.history]
      
  },

  widhrawBalance:function(amount){

    if(this.balance > amount){
      this.balance = this.balance - amount
      
      this.history = [`-${amount}`, ...this.history]
    }else{
      console.log("Invalid balance!");
    }

  },

  showBalance:function(){

    console.log("====================");
    console.log("Fullname:",this.name + " " + this.surname);
    console.log("Balance:", this.balance);
    console.log("====================");
    

  }

}


const babekAccount = BankAccount.constructor("Babek", "Ceferov", 1000) // yeni object
// const kenulAccount = BankAccount.constructor("Kenul", "Samedova", 1000)

// babekAccount.addBalance(200)
// babekAccount.addBalance(200)

// babekAccount.showBalance()

// babekAccount.widhrawBalance(100)
// babekAccount.showBalance()

// babekAccount.widhrawBalance(2100)
// babekAccount.showBalance()



// console.log(babekAccount);


// kenulAccount.addBalance(300)
// kenulAccount.addBalance(100)

// kenulAccount.showBalance()

// kenulAccount.widhrawBalance(300)
// kenulAccount.showBalance()

// console.log(kenulAccount);

