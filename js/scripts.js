//gallons to quarts
var galToQuart = function(gallons){
  return gallons * 4;
}
var galInput = parseInt(prompt("Please enter gallons"));
var quart = galToQuart(galInput);
alert (galInput + " gallons in quarts is " + quart + ".");
//quarts to cups
var quartToCups = function(quarts){
  return quarts * 4;
}
var quartInput = parseInt(prompt("Please enter quarts"));
var cups = quartToCups(quartInput);
alert (quartInput + " quarts in cups is " + cups + ".");
//cups to tablespoons
var cupToTb = function(tcups) {
  return tcups * 16;
}
var tcupInput = parseInt(prompt("Please enter cups"));
var tb = cupToTb(tcupInput);
alert (tcupInput + " cups in tablespoons " + tb + ".");
//tablespoons to teaspoons
var tb2ts = function(tb2) {
  return tb2 * 3;
};
var tb2Input = parseInt(prompt("Please enter tablespoons"));
var tsOutput = tb2ts(tbInput);
alert(tb2ts + " tablespoons is " + tsOutput " teaspoons" + ".");
