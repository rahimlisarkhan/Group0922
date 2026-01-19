


class Car{
    // brand = ""
    // model = ""
    // year = 0
    static speed = 0
    static serieNumber = Math.floor(Math.random() * 1000000)

    // serieNumber = Math.floor(Math.random() * 1000000)

    constructor(brand, model, year){
        this.brand = brand
        this.model = model
        this.year = year
    }

    showInfo(){
        console.log(`Car Info: ${this.brand} ${this.model} ${this.year}`);
    }

    start(){
        this.speed += 10

        // const a = 10

        // const result = a + 20

        console.log("Car started",this.speed);
    }

    static honk(){        
        console.log("Beep Beep!");
    }

}


const car1 = new Car("BMW", "X5", 2020) // return an object of Car class
const car2 = new Car("Audi", "Q7", 2021) // return an object of Car class


// OOP
//1. Encapsulation - gizletme
//2. Inheritance - Miras goturme+ 
//3. Polymorphism - eyni methodun ferqli formalarda isletmesi
//4. Abstraction - privati kimi gosterme daxilden idare etme get set 

// Inheritance
class ElectricCar extends Car{
    #batteryCapacity = 0

    constructor(brand, model, year, batteryCapacity){
        super(brand, model, year)
        this.#batteryCapacity = batteryCapacity
    }

    showInfo(){
        // super.showInfo()
        console.log(`Battery Capacity: ${this.#batteryCapacity} kWh`);
    }

    monitorBattery(){
        console.log(`Battery at 80%`, this.#batteryCapacity);
    }

    // getBatteryCapacity(){
    //     return this.#batteryCapacity
    // }

    // setBatteryCapacity(value){

    //     if(value < 0){
    //         console.log("Battery capacity cannot be negative");
    //         return
    //     }

    //     const result = this.#calculateRange()

    //     this.#batteryCapacity = value + result
    // }

    get battery(){
        return this.#batteryCapacity
    }

    set battery(value){

        if(value < 0){
            console.log("Battery capacity cannot be negative");
            return
        }

        const result = this.#calculateRange()

        this.#batteryCapacity = value + result
    }

    #calculateRange(){
        return this.#batteryCapacity * 5
    }

}


const changan = new ElectricCar("Changan", "Q07", 2025, 75)
const tesla = new ElectricCar("Tesla", "Model S", 2024, 100)



changan.

// changan.monitorBattery()


// changan.setBatteryCapacity(85)
changan.battery = 85

// console.log("changan",changan);


// const result = changan.getBatteryCapacity()
const result = changan.battery

console.log(result);

// console.log(changan.#batteryCapacity);


// changan.brand = "Changan Motors"

// console.log(changan.brand);


// changan.showInfo()
// changan.monitorBattery()

// tesla.showInfo()
// tesla.monitorBattery()

// console.log(Car.speed);

// Car.honk()

// console.log(typeof Car);





// car1.brand = "Mercedes"

// car1.showInfo()

// car1.start()
// car1.start()
// car1.start()


// console.log("car2",car2);



// car2.showInfo()
