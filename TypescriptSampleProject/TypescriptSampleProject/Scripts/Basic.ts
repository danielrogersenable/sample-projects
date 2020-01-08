namespace App {
    export class Basic {
        public getBasic(): void {
            console.log('ran basic');
        }
    }

    export class House implements HouseInterface {
        constructor(numberOfBathrooms: number, numberOfBedrooms: number, totalNumberOfRooms: number) {
            this.numberOfBathrooms = numberOfBathrooms;
            this.numberOfBedrooms = numberOfBedrooms;
            this.numberOfOtherRooms = totalNumberOfRooms - numberOfBathrooms - numberOfBedrooms;

            this.arrayOfPeopleInTheHouse = ["Homeowner", "Homeowner's friend"];
        }

        numberOfBathrooms: number;
        numberOfBedrooms: number;
        numberOfOtherRooms: number;
        arrayOfPeopleInTheHouse: string[];

        public numberOfRooms(): number {
            let total: number;
            total = this.numberOfBedrooms;
            total = total + this.numberOfBathrooms;
            total = total + this.numberOfOtherRooms;
            return total;
        }

        public getPeopleInHouse(): void {
            for (const person in this.arrayOfPeopleInTheHouse) {
                const foo = person;
                console.log(foo);
            }
        }

        public houseInformation(): void {
            console.log("This house has some rooms");
            console.log(`This house has ${this.numberOfBathrooms} bathrooms, ${this.numberOfBedrooms} bedrooms etc.`);
        }

        numberOfRoomsLambda = () => { return this.numberOfBathrooms + this.numberOfBedrooms + this.numberOfOtherRooms };
    }

    export class FancyHouse extends House {
        constructor(numberOfBathrooms: number, numberOfBedrooms: number, totalNumberOfRooms: number, numberOfBilliardRooms: number) {
            super(numberOfBathrooms, numberOfBedrooms, totalNumberOfRooms);
            this.numberOfBilliardRooms = numberOfBilliardRooms;
            this.numberOfOtherRooms = this.numberOfOtherRooms - numberOfBilliardRooms;
            const foo = this.numberOfRooms();
        }

        numberOfBilliardRooms: number;

        public numberOfRooms() {
            return super.numberOfRooms() + this.numberOfBilliardRooms;
        }

        public houseInformation() {
            super.houseInformation();
            console.log(`It also has some billiards rooms and is therefore better than yours.`);
        }
    }


    export function numberOfRooms(house: HouseInterface): number {
        return house.numberOfBathrooms + house.numberOfBedrooms + house.numberOfOtherRooms;
    }

    export var basic = new Basic();

    export const house = new House(1, 2, 6);
    house.numberOfBathrooms = 5;
    console.log(house.numberOfRooms());

    var fancyHouse = new FancyHouse(10, 10, 50, 4);
    console.log(numberOfRooms(fancyHouse));
    fancyHouse.houseInformation();

    console.log(house.numberOfRoomsLambda());

    console.log(numberOfRooms(house));
}