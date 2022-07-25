const myName = 'Nicolas';
const myAge = 12;

console.log(myName, myAge)

const suma = (a: number, b: number) => {
  return a + b;
}

suma(12, 22);

class Persona {

  private age: number;
  name: string;

  constructor(age: number, name: string) {
    this.age = age;
    this.name = name;
  }

  getSumary() {
    return `My name is ${this.name}, ${this.age}`;
  }
}

const raul = new Persona(40, 'Raul VP');
console.log(raul);
