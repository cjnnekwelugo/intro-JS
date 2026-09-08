class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
    const person1 = new Person("John", 30);
    person1.introduce();
    


    class Worker{
        #salary;
        constructor(name, age, salary) {
            this.name = name;
            this.age = age;
            this.#salary = salary;
        }
        getSalary() {
            return this.#salary;

        }
        introduce() {
            console.log(`Hi, my name is ${this.name}, I am ${this.age} years old and my salary is ${this.#salary}.`);
        }
    }
    const worker1 = new Worker("Jane", 25, 50000);
    worker1.introduce();
    console.log(worker1.getSalary());