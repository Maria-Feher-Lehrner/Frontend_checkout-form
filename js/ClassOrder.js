class Order {
    constructor(orderItems, menuPrices) {
        this.orderItems = orderItems;
        this.menuPrices = menuPrices;
    }

    //Die Funktion gleicht die einzelnen Items im "Warenkorb" mit den definierten key-Schlüsselwörtern ab und matcht die entsprechenden Preise.
    //--> ist ziemlich umständlich und führt eigentlich nochmal eine Prüfung ein, was denn jetzt eigentlich bestellt wurde, nachdem eigentlich schon ein vollständiger
    //Warenkorb übergeben wurde. Die Variable this.orderItems[key] verweist dann auf die Bestellmenge als entsprechenden Value des Arrays.
    //--> Evtl. besser über ein dreidimensionales Array lösen? Geht das sinnvoller?
    calculateOrderSum() {
        let orderSum = 0;
        for (let key in this.orderItems) {
            if (key === 'Cheeseburger') {
                orderSum += this.menuPrices['priceCheeseburger'] * this.orderItems[key];
            }
            if (key === 'Pommes') {
                orderSum += this.menuPrices['priceFries'] * this.orderItems[key];
            }
            if (key === 'Salat') {
                orderSum += this.menuPrices['priceSalad'] * this.orderItems[key];
            }
            if (key === 'Cola' || key === 'Fanta' || key === 'Sprite') {
                orderSum += this.menuPrices['priceDrink'] * this.orderItems[key];
            }
        }
        return orderSum;
    }

    calculateDiscount() {
        let totalSum = this.calculateOrderSum();
        let discount = 0;
        if (totalSum > 10) {
            discount = totalSum * 0.15;
        }
        return discount;
    }

    calculateFinalSum() {
        let finalSum = this.calculateOrderSum() - this.calculateDiscount();
        return finalSum;
    }
}
