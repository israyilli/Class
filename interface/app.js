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
console.log("samaya");
// Enum live places
var LivePlace;
(function (LivePlace) {
    LivePlace["Ocean"] = "Ocean";
    LivePlace["Sea"] = "Sea";
    LivePlace["River"] = "River";
})(LivePlace || (LivePlace = {}));
// Animal class implements IAnimal
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.getInfo = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age);
    };
    return Animal;
}());
//Bird class extending Animal and implements IBird
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(name, age, wingColor) {
        var _this = _super.call(this, name, age) || this;
        _this.wingColor = wingColor;
        return _this;
    }
    Bird.prototype.fly = function () {
        console.log("".concat(this.name, " is flying."));
    };
    return Bird;
}(Animal));
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Fish;
}(Animal));
 > {
    swim: function () {
        console.log("".concat(this.name, " is swimming."));
    },
    livePlace: LivePlace,
    constructor: function (name, age, livePlace) {
        _this = _super.call(this) || this;
        this.name = name;
        this.age = age;
        this.livePlace = livePlace;
    }
};
var sparrow = new Bird("Sparrow", 2, "Grey");
console.log(sparrow.getInfo());
sparrow.fly();
var shark = new Fish("Shark", 6, LivePlace.Ocean);
console.log(shark.getInfo()); //  Name: Shark, Age: 10
shark.swim(); // Shark is swimming.
shark.kill("small fish");
shark.kill(["fishX", "fishY", "fishZ"]);
