const Configstore=require('configstore').default;
const pkg=require('../package.json');
const color=require('colors');
const inquirer=require('inquirer').default;
const {isRequired}=require('../utils/validate.js');
const config=new Configstore(pkg.name);
const key_commands = {
    set() {
        inquirer.prompt([{
        	type:"input",
        	name:"key",
        	message:"Enter API Key".green + " https://coinmarketcap.com",
       		validate:isRequired
        }]).then((data)=>{
        	config.set("apiKey",data.key);
        	console.log("Key added:".blue,data.key)
        })
    },
    show: function() {
      const key=config.get("apiKey");
      if(!key){
      	console.log("No key found!!".red);
      	return;
      }
      console.log("API Key:".yellow,key);
    },
    remove: () => {
      const key=config.get("apiKey");
      if(!key){
      	console.log("No key found!!".red);
      	return;
      }

      config.delete("apiKey");
      console.log("API Key removed".yellow);
    },
    getKey(){
      const key=config.get("apiKey");
      if(!key){
        console.log("No key found!!".red);
        return;
      }
      return key;
    }
}

module.exports = key_commands;