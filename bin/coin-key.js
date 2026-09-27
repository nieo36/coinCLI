const {program} = require('commander');
const key_commands=require('../commands/commands.js');
program
.command('set')
.description('Set API Key -- Get at https://test.com')
.action(key_commands.set)  
program
.command('show')
.description('Show current API Key')
.action(key_commands.show)
program
.command('remove')
.description('Remove API Key')
.action(key_commands.remove)
program.parse(process.argv);