class Person{
    constructor(name,age,gender,)
    {
        this.name=name;
        this.age=age;
        this.gender = gender
    }
    getPersonDetails()
    {
        return `Name: ${this.name}, Age:${this.age}, Gender:${this.gender}`
    }
}

let person1 = new Person("Ravi",45,"Male");
personDetails = person1.getPersonDetails();
console.log(personDetails);