// Адаптер робить один інтерфейс, початково несумісний, сумісним з іншим, при цьому не змінюючи його початковий код. Інша назва цього паттерну: Wrapper Pattern.

class Raccoon {
  run(){}
}

class Hunter {
    hunt(raccoon) {
        // ... 
        raccoon.run()
        //... 
    }
}

// Raccoon and Hunter are compatible, while Dog is incompatible with Hunter:

class Dog {
    bark() {}
}

// Adapter example:

class DogAdapter {
    constructor(dog) {
        this.dog = dog;
    }
     
    run() {
        this.dog.bark();
    }
}

Dog = new Dog();
DogAdapter = new DogAdapter(dog);
 
hunter = new Hunter();
hunter.hunt(DogAdapter);
