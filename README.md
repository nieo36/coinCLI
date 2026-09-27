# Coin CLI

A lightweight command-line interface (CLI) tool to manage your CoinMarketCap API key and track real-time cryptocurrency prices with live updates.

---

## Endpoints

### 1. External API Endpoint
* **CoinMarketCap Latest Quotes**:
  * **URL**: `GET https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest`
  * **Headers**: `X-CMC_PRO_API_KEY: <your_api_key>`
  * **Query Parameters**:
    * `symbol`: Comma-separated crypto symbols (e.g., `BTC,ETH,XRP,USDT`)
    * `convert`: Target currency symbol (e.g., `USD`, `EUR`, `INR`)

### 2. CLI Endpoints / Commands
* **`coin key set`** - Interactively set and store your CoinMarketCap API key.
* **`coin key show`** - Display the currently saved API key.
* **`coin key remove`** - Delete the stored API key from local storage.
* **`coin check price`** - Fetch and stream live crypto prices (refreshes every 2 seconds).
  * `--coin <type>`: Specify coin symbols in CSV format *(default: `BTC,ETH,XRP,USDT`)*.
  * `--cur <currency>`: Specify conversion fiat/currency *(default: `USD`)*.

---

## Libraries Used

* **[commander](https://www.npmjs.com/package/commander)** - Complete solution for node.js command-line interfaces and argument parsing.
* **[axios](https://www.npmjs.com/package/axios)** - Promise-based HTTP client used to fetch price data from the CoinMarketCap API.
* **[inquirer](https://www.npmjs.com/package/inquirer)** - Interactive CLI prompts used to take the API key input.
* **[configstore](https://www.npmjs.com/package/configstore)** - Easily persist and manage configuration and API key data locally without hassle.
* **[colors](https://www.npmjs.com/package/colors)** - Adds color styling and formatting to terminal output for a better visual experience.
