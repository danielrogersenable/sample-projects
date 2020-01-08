var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var App;
(function (App) {
    var Basic = /** @class */ (function () {
        function Basic() {
        }
        Basic.prototype.getBasic = function () {
            console.log('ran basic');
        };
        return Basic;
    }());
    App.Basic = Basic;
    var House = /** @class */ (function () {
        function House(numberOfBathrooms, numberOfBedrooms, totalNumberOfRooms) {
            var _this = this;
            this.numberOfRoomsLambda = function () { return _this.numberOfBathrooms + _this.numberOfBedrooms + _this.numberOfOtherRooms; };
            this.numberOfBathrooms = numberOfBathrooms;
            this.numberOfBedrooms = numberOfBedrooms;
            this.numberOfOtherRooms = totalNumberOfRooms - numberOfBathrooms - numberOfBedrooms;
            this.arrayOfPeopleInTheHouse = ["Homeowner", "Homeowner's friend"];
        }
        House.prototype.numberOfRooms = function () {
            var total;
            total = this.numberOfBedrooms;
            total = total + this.numberOfBathrooms;
            total = total + this.numberOfOtherRooms;
            return total;
        };
        House.prototype.getPeopleInHouse = function () {
            for (var person in this.arrayOfPeopleInTheHouse) {
                var foo = person;
                console.log(foo);
            }
        };
        House.prototype.houseInformation = function () {
            console.log("This house has some rooms");
            console.log("This house has " + this.numberOfBathrooms + " bathrooms, " + this.numberOfBedrooms + " bedrooms etc.");
        };
        return House;
    }());
    App.House = House;
    var FancyHouse = /** @class */ (function (_super) {
        __extends(FancyHouse, _super);
        function FancyHouse(numberOfBathrooms, numberOfBedrooms, totalNumberOfRooms, numberOfBilliardRooms) {
            var _this = _super.call(this, numberOfBathrooms, numberOfBedrooms, totalNumberOfRooms) || this;
            _this.numberOfBilliardRooms = numberOfBilliardRooms;
            _this.numberOfOtherRooms = _this.numberOfOtherRooms - numberOfBilliardRooms;
            var foo = _this.numberOfRooms();
            return _this;
        }
        FancyHouse.prototype.numberOfRooms = function () {
            return _super.prototype.numberOfRooms.call(this) + this.numberOfBilliardRooms;
        };
        FancyHouse.prototype.houseInformation = function () {
            _super.prototype.houseInformation.call(this);
            console.log("It also has some billiards rooms and is therefore better than yours.");
        };
        return FancyHouse;
    }(House));
    App.FancyHouse = FancyHouse;
    function numberOfRooms(house) {
        return house.numberOfBathrooms + house.numberOfBedrooms + house.numberOfOtherRooms;
    }
    App.numberOfRooms = numberOfRooms;
    App.basic = new Basic();
    App.house = new House(1, 2, 6);
    App.house.numberOfBathrooms = 5;
    console.log(App.house.numberOfRooms());
    var fancyHouse = new FancyHouse(10, 10, 50, 4);
    console.log(numberOfRooms(fancyHouse));
    fancyHouse.houseInformation();
    console.log(App.house.numberOfRoomsLambda());
    console.log(numberOfRooms(App.house));
})(App || (App = {}));
//# sourceMappingURL=Basic.js.map