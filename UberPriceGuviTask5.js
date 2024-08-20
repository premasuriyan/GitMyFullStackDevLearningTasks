class UberPrice{
    constructor(kilometer,pricePerKiloMeter)
    {
        this.kilometer = kilometer;
        this.pricePerKiloMeter = pricePerKiloMeter;
    }
    calculateUberPrice(){

        return this.kilometer * this.pricePerKiloMeter;
    }
}

let uber = new UberPrice(5,20.25);
let price = uber.calculateUberPrice().toFixed(2);
console.log(price);