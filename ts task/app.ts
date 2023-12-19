//IHuman interface-(name,surname,age,getInfo)
//Abstrakt Human class yaradin -(name(private), surname(private),age, fullName getter, name&surname getter, getInfo - method)
//Human-dan miras alan 2 class var (Employee ve Student)
//IEmployee interface -salary, skills(generic type), position(Position enum) - Employee class-i bu interface-den implement etmelidir
//IStudent interface -groupName, hobbies(generic type), GPA, hasPassed(methoddur, geriye true/false return edir)
//Student class-i yuxaridaki interfaceden implement edir. GPA private olmalidir. GPA ucun bir getter bir de setter yazilmalidir
//Setter de yoxlamalisiz ki, 0-100 araliginda set ede bilsein
//hasPassed method-unda  ise eger GPA 50-den azdirsa false return edir 51-100 araligindadirsa true return edir
// ------------------------------------------------------
//HTML de bir form duzeldirik. form-da name input, surname input, age input,bir eded select option olmalidir(option-lar: student, employee)
//select option-da uygun option secildikden sonra: eger student secilerse groupName, GPA, hobbies ucun 3 input gorunmelidir. eger employee secilerse salary, skills (text input- vergulle ayiririq), position (select option (static yaz heleki))
//butun input-lari doldurub submit etdikde list item elave olunmalidir ve input-lar temizlenmelidir.

// IHuman interface
interface IHuman {
  name: string;
  surname: string;
  age: number;
  getInfo(): void;
}

// Abstract Human class
abstract class Human implements IHuman {
  private _name: string;
  private _surname: string;
  public age: number;

  constructor(name: string, surname: string, age: number) {
    this._name = name;
    this._surname = surname;
    this.age = age;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get surname(): string {
    return this._surname;
  }

  set surname(value: string) {
    this._surname = value;
  }

  get fullName(): string {
    return `${this._name} ${this._surname}`;
  }

  getNameAndSurname(): string {
    return `${this._name} ${this._surname}`;
  }

  abstract getInfo(): void;
}

// Position enum
enum Position {
  Manager,
  Developer,
  Teacher,
  Student,
}

// IEmployee interface
interface IEmployee {
  groupName: string;
  skills: Array<any>; // Generic type
  position: Position;
  salary: number;
}

// Employee class
class Employee extends Human implements IEmployee {
  groupName: string;
  skills: Array<any>;
  position: Position;
  salary: number;

  constructor(
    name: string,
    surname: string,
    age: number,
    groupName: string,
    skills: Array<any>,
    position: Position,
    salary: number
  ) {
    super(name, surname, age);
    this.groupName = groupName;
    this.skills = skills;
    this.position = position;
    this.salary = salary;
  }

  getInfo(): void {
    console.log(
      `Employee: ${this.fullName}, Age: ${this.age}, Group: ${
        this.groupName
      }, Position: ${Position[this.position]}, Salary: ${this.salary}`
    );
  }
}

// IStudent interface
interface IStudent {
  groupName: string;
  hobbies: Array<any>; // Generik type
  GPA: number;
  hasPassed(): boolean;
}

// Student class
class Student extends Human implements IStudent {
  groupName: string;
  hobbies: Array<any>;
  private _GPA: number;

  constructor(
    name: string,
    surname: string,
    age: number,
    groupName: string,
    hobbies: Array<any>,
    GPA: number
  ) {
    super(name, surname, age);
    this.groupName = groupName;
    this.hobbies = hobbies;
    this._GPA = GPA;
  }

  get GPA(): number {
    return this._GPA;
  }

  set GPA(value: number) {
    if (value >= 0 && value <= 100) {
      this._GPA = value;
    } else {
      console.error("GPA must be between 0 and 100.");
    }
  }

  hasPassed(): boolean {
    return this._GPA >= 50;
  }

  getInfo(): void {
    console.log(
      `Student: ${this.fullName}, Age: ${this.age}, Group: ${this.groupName}, GPA: ${this._GPA}`
    );
  }
}

/////////meselen/////////
const employee = new Employee(
  "Samaya",
  "Israyilli",
  19,
  "Development",
  ["Programming"],
  Position.Developer,
  50000
);
employee.getInfo();

const student = new Student(
  "Laman",
  "Nazirli",
  20,
  "Computer Science",
  ["Reading", "Coding"],
  75
);
student.getInfo();
console.log(`Has Passed: ${student.hasPassed()}`);

let form = document.querySelector("#humanForm");

form?.addEventListener("submit", function(){
    let type = document.getElementById("#type");
    let studentss = document.getElementById("studentss");
    let employees = document.getElementById("employees");


    if (type === "student") {
      studentss.style.display = "block";
      employees.style.display = "none";
    } else if (type === "employee") {
      studentss.style.display = "none";
      employees.style.display = "block";
    }
}













)
