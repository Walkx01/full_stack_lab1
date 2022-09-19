/// exercise 1
let greeter1 = (myarray, counter) => {
  let greetText = "hello";

  for (const element of myarray) {
    console.log(greetText + " " + element);
  }
};
greeter1(["sandy", "spongbob", "patrick"]);

// ///exercise 2

cap = (string) => {
  console.log(string.charAt(0).toUpperCase() + string.slice(1));
};

// exercise 3
mapFunction = (colors) => {
  colors.map(cap);
};
const colors = ["red", "green", "blue"];
mapFunction(colors);

/// exercise 4

filterlessthan20 = (myArray) => {
  newarray = myArray.filter((number) => number < 20);
  console.log(newarray);
};

filterlessthan20([1, 60, 34, 30, 5]);

/// exercise 5

addition = () => {
  var myArray = [1, 2, 3, 4, 5];
  const initialValue = 0;
  const sumWithInitial = myArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  console.log(sumWithInitial);
};

addition();

/// eercise 6
class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }

  details = () => {
    return " Car \nmodel: " + this.model + " year:" + this.year;
  };
}

class Sedan extends Car {
  constructor(model, year, balance) {
    super(model, year);
    this.balance = balance;
  }

  info = () => {
    return this.model + " has a balance of " + this.balance;
  };
}

const car2 = new Car("HONDA CIVIC", 2015);
const sedan = new Sedan("volvo SD", 2019, 3000);

console.log(car2.details());
console.log(sedan.info());
