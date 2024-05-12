class Receipt {
    constructor(UserOrder) {
        this.UserOrder = UserOrder;
    }

    displayReceipt() {
        //Headline für das Receipt generieren.
        let outputHeadline = document.getElementById("HeadlineBestelluebersicht");
        outputHeadline.innerHTML = "Bestellübersicht:";
        //output-Feld für die Rechnungszeilen vorbereiten und gegebenenfalls letzte Eingabe löschen.
        let output = document.getElementById("containerReceipt");
        output.innerHTML = "";

        //mit einer Schleife durch den Warenkorb loopen und Zeile für Zeile Bestellmenge und Posten ausgeben, bis zum Ende der Bestellliste.
        for (let i in this.UserOrder.orderItems) {
            output.innerHTML += "<p>" + this.UserOrder.orderItems[i] + " Stk. " + i + " </p>";
        }
        output.innerHTML += "<p> Rechnungssumme vor Abzug Rabatt: € " + this.UserOrder.calculateOrderSum().toFixed(2) + " </p>";
        output.innerHTML += "<p> Rabatt (15% ab Rechnungssumme über € 10,-): € " + this.UserOrder.calculateDiscount().toFixed(2) + " </p>";
        output.innerHTML += "<p><strong> Gesamtpreis: € " + this.UserOrder.calculateFinalSum().toFixed(2) + " </strong></p>";
    }
}

