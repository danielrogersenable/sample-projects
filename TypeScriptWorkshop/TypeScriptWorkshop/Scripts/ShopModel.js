var App;
(function (App) {
    var ShopModel = /** @class */ (function () {
        function ShopModel(currentTimeModel) {
            this.currentTimeModel = currentTimeModel;
            this.drinksCount = 100;
            this.valueOfDrinks = 1.5;
            this.propertyValue = 150000;
            this.yearBought = 2000;
            this.inflation = 1.05;
        }
        ShopModel.prototype.getValueOfShop = function () {
            var propertyValue = this.getPropertyValue();
            var stockValue = this.getStockValue();
            return propertyValue + stockValue + 10000;
        };
        ShopModel.prototype.getPropertyValue = function () {
            return this.propertyValue * Math.pow(this.inflation, (this.currentTimeModel.getCurrentYear() - this.yearBought));
        };
        ShopModel.prototype.getStockValue = function () {
            return this.drinksCount * this.valueOfDrinks;
        };
        return ShopModel;
    }());
    App.ShopModel = ShopModel;
    App.currentTimeModel = new App.CurrentTimeModel();
    App.viewModel = new ShopModel(App.currentTimeModel);
    console.log(App.viewModel.getValueOfShop());
})(App || (App = {}));
//# sourceMappingURL=ShopModel.js.map