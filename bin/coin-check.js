const {program}=require('commander');
const {price}=require('../commands/check.js');

program
.command('price')
.description('Check coin price')
.option('--coin <type>','Add specific coin types in CSV format (capital)','BTC,ETH,XRP,USDT')
.option('--cur <currency>', 'Change the currency (capital)', 'USD')
.action((cmd)=>{price(cmd.coin,cmd.cur)})

program.parse(process.argv);