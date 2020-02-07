namespace App {
    export class ShopModel {
        constructor(currentTimeModel: CurrentTimeModel) {
            this.currentTimeModel = currentTimeModel;

            this.drinksCount = 100;
            this.valueOfDrinks = 1.5;
            this.propertyValue = 150000;
            this.yearBought = 2000;
            this.inflation = 1.05;
        }

        currentTimeModel: CurrentTimeModel;

        drinksCount: number;
        valueOfDrinks: number;

        propertyValue: number;
        yearBought: number;
        inflation: number;

        getValueOfShop(): number {
            const propertyValue = this.getPropertyValue();
            const stockValue = this.getStockValue();
            return propertyValue + stockValue + 10000;
        }

        getPropertyValue(): number {
            return this.propertyValue * Math.pow(this.inflation, (this.currentTimeModel.getCurrentYear() - this.yearBought));
        }

        getStockValue(): number {
            return this.drinksCount * this.valueOfDrinks;
        }
    }

    export var currentTimeModel = new CurrentTimeModel();
    export var viewModel = new ShopModel(currentTimeModel);
    console.log(viewModel.getValueOfShop());
}