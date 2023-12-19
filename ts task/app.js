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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Abstract Human class
var Human = /** @class */ (function () {
    function Human(name, surname, age) {
        this._name = name;
        this._surname = surname;
        this.age = age;
    }
    Object.defineProperty(Human.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "surname", {
        get: function () {
            return this._surname;
        },
        set: function (value) {
            this._surname = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "fullName", {
        get: function () {
            return "".concat(this._name, " ").concat(this._surname);
        },
        enumerable: false,
        configurable: true
    });
    Human.prototype.getNameAndSurname = function () {
        return "".concat(this._name, " ").concat(this._surname);
    };
    return Human;
}());
// Position enum
var Position;
(function (Position) {
    Position[Position["Manager"] = 0] = "Manager";
    Position[Position["Developer"] = 1] = "Developer";
    Position[Position["Teacher"] = 2] = "Teacher";
    Position[Position["Student"] = 3] = "Student";
})(Position || (Position = {}));
// Employee class
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, surname, age, groupName, skills, position, salary) {
        var _this = _super.call(this, name, surname, age) || this;
        _this.groupName = groupName;
        _this.skills = skills;
        _this.position = position;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.getInfo = function () {
        console.log("Employee: ".concat(this.fullName, ", Age: ").concat(this.age, ", Group: ").concat(this.groupName, ", Position: ").concat(Position[this.position], ", Salary: ").concat(this.salary));
    };
    return Employee;
}(Human));
// Student class
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, surname, age, groupName, hobbies, GPA) {
        var _this = _super.call(this, name, surname, age) || this;
        _this.groupName = groupName;
        _this.hobbies = hobbies;
        _this._GPA = GPA;
        return _this;
    }
    Object.defineProperty(Student.prototype, "GPA", {
        get: function () {
            return this._GPA;
        },
        set: function (value) {
            if (value >= 0 && value <= 100) {
                this._GPA = value;
            }
            else {
                console.error("GPA must be between 0 and 100.");
            }
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.hasPassed = function () {
        return this._GPA >= 50;
    };
    Student.prototype.getInfo = function () {
        console.log("Student: ".concat(this.fullName, ", Age: ").concat(this.age, ", Group: ").concat(this.groupName, ", GPA: ").concat(this._GPA));
    };
    return Student;
}(Human));
/////////meselen/////////
var employee = new Employee("Samaya", "Israyilli", 19, "Development", ["Programming"], Position.Developer, 50000);
employee.getInfo();
var student = new Student("Laman", "Nazirli", 20, "Computer Science", ["Reading", "Coding"], 75);
student.getInfo();
console.log("Has Passed: ".concat(student.hasPassed()));
var form = document.querySelector("#humanForm");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function () {
    var type = document.getElementById("#type");
    var studentss = document.getElementById("studentss");
    var employees = document.getElementById("employees");
    if (type === "student") {
        studentss.style.display = "block";
        employees.style.display = "none";
    }
    else if (type === "employee") {
        studentss.style.display = "none";
        employees.style.display = "block";
    }
});
