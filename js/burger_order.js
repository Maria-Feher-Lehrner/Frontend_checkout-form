//Preisliste als Objekt
const menuPrices = {
    'priceCheeseburger': 5.00,
    'priceFries': 3.50,
    'priceSalad': 2.00,
    'priceDrink': 3.00
}

//Diese function wird "onclick" auf "Bestellen"-button in HTML ausgeführt
function takeAndDisplayOrder(event) {
    //Ich hatte noch immer das Problem, dass das ausgedruckte Receipt nach kurzem Aufblitzen sofort wieder verschwindet. --> daher preventDefault
    event.preventDefault();

    //übernimmt die Werte aus dem Formular und bildet aus den bestellten Produkten und Mengen ein Array-Objekt/Warenkorb.
    let myOrderItems = receiveOrderItems();

    //erstellt eine neue Instanz des Objekts Order --> der Warenkorb mit den Werten aus dem Formular wird dort hinein übergeben.
    let myOrder = new Order(myOrderItems, menuPrices);

    //erstellt eine neue Instanz des Objekts Receipt - mit der gerade neu erstellten Order-Instanz.
    let myReceipt = new Receipt(myOrder);

    //Druckt das Receipt im Frontend aus.
    myReceipt.displayReceipt();

}

//Die Funktion erstellt ein Array-Objekt aus den Werten im Formular. --> wird als Property für das Objekt Order benötigt.
function receiveOrderItems() {
    let orderItems = {};
    let nameMaincourse = document.getElementById("maincourse").textContent;
    let nameSide = document.querySelector('input[name="sides"]:checked').value;
    let nameDrink = document.getElementById("drink").value;
    let anzahlMaincourse = document.getElementById("anzahlMaincourse").value;
    let anzahlSides = document.getElementById("anzahlSides").value;
    let anzahlDrinks = document.getElementById("anzahlDrinks").value;

    //Zuerst mit Kontrolle starten, ob mind. ein Cheeseburger bestellt wurde. Falls nicht: Ausgabe Fehlermeldung und Array-Objekt für Warenkorb bleibt leer.
    if(parseInt(anzahlMaincourse) <= 0){
        let output = document.getElementById("containerFehlermeldung");
        output.innerHTML = "<p>Fehler: Bitte bestellen Sie zumindest einen Burger.</p>";
    }else{
        //Falls mind. ein Cheeseburger bestellt, dann Warenkorb-Objekt füllen.
        if (parseInt(anzahlMaincourse) !== 0) {
            orderItems[nameMaincourse] = parseInt(anzahlMaincourse);
        }
        if (parseInt(anzahlSides) !== 0) {
            orderItems[nameSide] = parseInt(anzahlSides);
        }
        if (parseInt(anzahlDrinks) !== 0) {
            orderItems[nameDrink] = parseInt(anzahlDrinks);
        }
    }

    return orderItems;
}



