class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    getInfo() {
        console.log("my name is", this.name);
        console.log("my age is", this.age);
    }
    walk() {
        console.log("i can walk");
    }
}
module.exports = Person;