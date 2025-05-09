const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const amountInput = document.getElementById('amount');
const resultDiv = document.getElementById('result');
let exchangeRates = {};

// Replace 'YOUR-API-KEY' with your actual API key
const API_KEY = 'YOUR-API-KEY';

// Fetch the latest USD-based exchange rates
fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`)
  .then(response => response.json())
  .then(data => {
    if (data.result !== "success") {
      throw new Error("Failed to fetch exchange rates.");
    }

    exchangeRates = data.conversion_rates;
    const currencies = Object.keys(exchangeRates);

    currencies.forEach(code => {
      fromCurrency.innerHTML += `<option value="${code}">${code}</option>`;
      toCurrency.innerHTML += `<option value="${code}">${code}</option>`;
    });

    fromCurrency.value = "USD";
    toCurrency.value = "EUR";
  })
  .catch(error => {
    resultDiv.innerText = "Error loading exchange rates.";
    console.error(error);
  });

// Convert between selected currencies
function convertCurrency() {
  const from = fromCurrency.value;
  const to = toCurrency.value;
  const amount = parseFloat(amountInput.value);

  if (isNaN(amount) || amount <= 0) {
    resultDiv.innerText = "Please enter a valid amount.";
    return;
  }

  const baseToUSD = amount / exchangeRates[from];
  const converted = baseToUSD * exchangeRates[to];
  resultDiv.innerText = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
}
