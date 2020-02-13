export {};

class Animal {
  constructor(public name: string) {}

  run(): string {
    return 'I can run';
  }
}

let animal = new Animal('tes');
console.log(animal.run());

class Lion extends Animal {
  public speed: number;

  constructor(name: string, speed: number) {
    super(name);
    this.speed = speed;
  }

  run(): string {
    const parentMessage = super.run();
    console.log(parentMessage);
    return `${super.run()} ${this.speed}km/h`;
  }
}

let lion = new Lion('a', 80);
console.log(lion.run());
