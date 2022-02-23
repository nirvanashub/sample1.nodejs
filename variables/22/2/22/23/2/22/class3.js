class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      const date = new Date();
      return date.getFullYear() - this.year;
    }
  }
  
  const myCar = new Car("Ford", 2018);
  "My car is " + myCar.age() + " years old.";
  console.log(myCar);
  console.log(myCar.age());
