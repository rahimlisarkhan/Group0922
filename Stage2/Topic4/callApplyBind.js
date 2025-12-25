

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


  // A:function(){
  //   console.log(this);
  // },

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


function showCardInfo(otp){

  if(otp !== 1234){
    console.log("Invalid OTP");
    return
  }

    const card_number_last_4digits = this.card_number.toString().split("").slice(-4).join("")
    console.log("Card Number Last 4 Digits:", card_number_last_4digits);

    return card_number_last_4digits
}

// let result = showCardInfo.call(BankAccount, 1234)
// let result = showCardInfo.apply(BankAccount, [1234])
let showCardInfoCl = showCardInfo.bind(BankAccount, 1234)


console.log("showCardInfoCl",showCardInfoCl());