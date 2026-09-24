// ==============================
// KODESTRADE WEBSITE JAVASCRIPT
// ==============================

let selectedAsset = "Bitcoin";
let balance = 10000;


// ==============================
// TRADE
// ==============================

function trade(asset) {

    selectedAsset = asset;

    const selected = document.getElementById("selectedAsset");

    if (selected) {
        selected.textContent = asset;
    }

    const markets = document.getElementById("markets");

    if (markets) {
        markets.scrollIntoView({
            behavior: "smooth"
        });
    }
}


// ==============================
// UPDATE PRICES
// ==============================

function updatePrices() {

    const btcPrice = 62450 + (Math.random() * 1000 - 500);
    const ethPrice = 2450 + (Math.random() * 100 - 50);
    const goldPrice = 2650 + (Math.random() * 60 - 30);


    const btc = document.getElementById("btcPrice");
    const eth = document.getElementById("ethPrice");
    const gold = document.getElementById("goldPrice");


    if (btc) {
        btc.textContent = "$" + btcPrice.toFixed(2);
    }

    if (eth) {
        eth.textContent = "$" + ethPrice.toFixed(2);
    }

    if (gold) {
        gold.textContent = "$" + goldPrice.toFixed(2);
    }
}


setInterval(updatePrices, 2000);

updatePrices();


// ==============================
// BALANCE
// ==============================

function updateBalance() {

    const balanceElement = document.getElementById("balance");

    if (balanceElement) {

        balanceElement.textContent =
            "$" + balance.toFixed(2);

    }
}


// ==============================
// BUY
// ==============================

function buy(amount) {

    if (amount <= 0) {

        alert("Please enter a valid amount.");

        return;
    }


    if (amount > balance) {

        alert("Insufficient balance.");

        return;
    }


    balance -= amount;

    updateBalance();

    addTransaction(
        "Buy " + selectedAsset,
        amount
    );
}


// ==============================
// SELL
// ==============================

function sell(amount) {

    if (amount <= 0) {

        alert("Please enter a valid amount.");

        return;
    }


    balance += amount;

    updateBalance();

    addTransaction(
        "Sell " + selectedAsset,
        amount
    );
}


// ==============================
// TRANSACTION HISTORY
// ==============================

function addTransaction(name, amount) {

    const history =
        document.getElementById("historyList");


    if (!history) {
        return;
    }


    const transaction =
        document.createElement("div");


    transaction.innerHTML = `
        <strong>${name}</strong>
        <span>$${amount.toFixed(2)}</span>
    `;


    history.prepend(transaction);
}


// ==============================
// INITIAL BALANCE
// ==============================

updateBalance();