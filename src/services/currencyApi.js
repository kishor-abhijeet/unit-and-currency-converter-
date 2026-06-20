const BASE_URL = "https://open.er-api.com/v6/latest";

// Cache object
const exchangeRateCache = {};

/**
 * Get exchange rates for a base currency.
 */
async function getExchangeRates(baseCurrency) {
  // Return cached rates if available
  if (exchangeRateCache[baseCurrency]) {
    console.log("✅ Using cached exchange rates");
    return exchangeRateCache[baseCurrency];
  }

  console.log("🌐 Fetching exchange rates from API...");

  const response = await fetch(`${BASE_URL}/${baseCurrency}`);

  if (!response.ok) {
    throw new Error("Failed to fetch exchange rates.");
  }

  const data = await response.json();

  if (data.result !== "success") {
    throw new Error("API returned an error.");
  }

  // Save rates in cache
  exchangeRateCache[baseCurrency] = data.rates;

  return data.rates;
}

/**
 * Convert Currency
 */
export async function convertCurrency(
  amount,
  fromCurrency,
  toCurrency
) {
  if (amount === "" || isNaN(amount)) {
    return "";
  }

  const rates = await getExchangeRates(fromCurrency);

  const rate = rates[toCurrency];

  if (!rate) {
    throw new Error("Currency not supported.");
  }

  return Number((Number(amount) * rate).toFixed(4));
}