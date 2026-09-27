const axios = require('axios');
const color = require('colors');
const key_commands = require('./commands.js')
async function price(coin, cur) {
    const interval = setInterval(async () => {
        try {
            const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest', {
                headers: {
                    'X-CMC_PRO_API_KEY': key_commands.getKey()
                },
                params: {
                    symbol: coin,
                    convert: cur
                }
            })
            console.clear();
            const data = response.data.data;
            Object.values(data).forEach(coin => {
                console.log(`COIN:${coin.name.blue} | SYMBOL:${coin.symbol.yellow} | PRICE(${cur}):${coin.quote[cur].price.toFixed(4).green}`)
            })
        } catch (err) {
            console.error(err.message.red);
            clearInterval(interval)
        }
    }, 2000)
}
module.exports = {
    price
};