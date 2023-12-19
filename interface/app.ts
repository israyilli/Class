console.log("samaya");

// abstract class -Animal class (implement IAnimal interface)
// IAnimal -name (readonly), age(readonly), getInfo method

// IBird interface -fly -method, wingColor
// IFish interface -swim method, livePlace(enum-RTCRtpReceiver,ocean,sea), kill(generics(array de ola BiquadFilterNode, string de ferqi yoxdur))
// IFish interface-i IKill interface-inden extend etmelidir ve string ve ya string array ola bilecek bir generics qebul etmelidir. kill propery-sine ise hemin deyeri teyin etmelidir

// Bird -extend Animal, implement IBird
// Fish -extend Animal, implement IFish

// Bird class -bir bird yaradin
// Fish class -bir fish yaradin



// IAnimal interface
interface IAnimal {
  readonly name: string;
  readonly age: number;
  getInfo(): string;
}

// IBird interface
interface IBird {
  fly(): void;
  wingColor: string;
}

// IKill interface
interface IKill<T extends string|string[]> {
    kill: T
  }
  

// Enum live places
enum LivePlace {
  Ocean = "Ocean",
  Sea = "Sea",
  River = "River"
}


// IFish interface
interface IFish {
  swim(): void;
  livePlace: LivePlace;
}

// Animal class implements IAnimal
abstract class Animal implements IAnimal {
  abstract name: string;
  abstract age: number;

    constructor(){}

  getInfo(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

//Bird class extending Animal and implements IBird
class Bird extends Animal implements IBird {
  wingColor: string;

  constructor(name: string, age: number, wingColor: string) {
    super(name, age);
    this.wingColor = wingColor;
  }

  fly(): void {
    console.log(`${this.name} is flying.`);
  }
}

class Fish extends Animal implements IFish, IKill<string: string[]> {
  swim(): void {
    console.log(`${this.name} is swimming.`);
  }

  livePlace: LivePlace;

  constructor(name: string, age: number, livePlace: LivePlace) {
    super();
    this.name = name;
    this.age = age;
    this.livePlace = livePlace;
  }


}

const sparrow = new Bird("Sparrow", 2, "Grey");
console.log(sparrow.getInfo());
sparrow.fly();

const shark = new Fish("Shark", 6, LivePlace.Ocean);
console.log(shark.getInfo()); //  Name: Shark, Age: 10
shark.swim(); // Shark is swimming.
shark.kill("small fish");
shark.kill(["fishX", "fishY", "fishZ"]);