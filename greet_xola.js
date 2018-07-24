const greet = require('./greet');
var msg =  greet('Lwando');
console.log(msg);



const chalk = require('chalk');
const styledMessage = chalk.bgRed.black(msg);
console.log(styledMessage)


 var figlet = require('figlet');
//
// figlet( msg, function(err, data) {
//     if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.log(data)
// });


//
// Calling the figlet object as a function is shorthand for calling the text function. This method allows you to create ASCII Art from text. It takes in 3 parameters:
//
// Input Text - A string of text to turn into ASCII Art.
// Font Options - Either a string indicating the font name or an options object (description below).
// Callback - A function to execute with the generated ASCII Art.

figlet.text(msg , {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default'
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});
//
// figlet.text('msg',{
//   font:'Ghost' ,
//   horizontalLayout: 'default' ,
//   verticalLayout:'default'
// } , function(err, data){
//   if (err) {
//   console.log('Ssomething went wrong...');
//   console.dir(err);
//   return;
//
//   }
// console.log(data);
// });
