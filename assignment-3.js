// // https://github.com/MamunManda/assignment-3

//problem-1_kilometerToMeter
function kilometerToMeter(km){
    if (km < 0){
        return "Not Allow";
    }
    else{
        var m = km * 1000;
        return m;
    }    
}
var meter = kilometerToMeter(30);
console.log(meter, 'm');


//problem-2_budgetCalculator
function budgetCalculator(watch, phone, laptop){
    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;
    if (watch, phone, laptop < 0){
        return "Wrong Input value";
    }
    else{
        var totalPrice = (watchPrice*watch + phonePrice*phone + laptopPrice*laptop);
        return totalPrice;
    }
}
var total = budgetCalculator(3, 5, 8);
console.log(total, 'Taka');



//problem-3_hotelCost
function hotelCost(sDays) {
    if (sDays < 0) {
        return 'Wrong input';
    }
    if (sDays <= 10) {
        var cost = 100 * sDays;
    }
    else if (sDays <= 20) {
        var first10Days = 100 * 10;
        var remainingDays = sDays - 10; 
        var after10Days = remainingDays * 10;
        var cost = first10Days + after10Days;
    }
    else {
        var first10Days = 100 * 10;
        var after10Days = 80 * 10;
        var remainingDays = sDays - 20;
        var after20Days = remainingDays * 50;
        var cost = first10Days + after10Days + after20Days;
    }
    return cost;
}
var totalCost = hotelCost(45);
console.log(totalCost, 'Taka');



//problem-4_megaFriend
function megaFriend(inName){
    var mfName = inName[0];
    for(var i=0; i< inName.length; i++){
        var element = inName[i];
       if(element.length>mfName.length){
           mfName = element;
       }
    }
    return mfName;
}
var resultMegaFriend = megaFriend(["Mahmudul Hasan", "Mohosin Reza Nobab", "Asaduzzaman Kazol", "Milon Mahmud", "Mizan"]);
console.log('Mega Friend =', resultMegaFriend);

//problem-1_kilometerToMeter
function kilometerToMeter(km){
    if (km < 0){
        return "Not Allow";
    }
    else{
        var m = km * 1000;
        return m;
    }    
}
var meter = kilometerToMeter(30);
console.log(meter, 'm');


//problem-2_budgetCalculator
function budgetCalculator(watch, phone, laptop){
    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;
    if (watch, phone, laptop < 0){
        return "Wrong Input value";
    }
    else{
        var totalPrice = (watchPrice*watch + phonePrice*phone + laptopPrice*laptop);
        return totalPrice;
    }
}
var total = budgetCalculator(3, 5, 8);
console.log(total, 'Taka');



//problem-3_hotelCost
function hotelCost(sDays) {
    if (sDays < 0) {
        return 'Wrong input';
    }
    if (sDays <= 10) {
        var cost = 100 * sDays;
    }
    else if (sDays <= 20) {
        var first10Days = 100 * 10;
        var remainingDays = sDays - 10; 
        var after10Days = remainingDays * 10;
        var cost = first10Days + after10Days;
    }
    else {
        var first10Days = 100 * 10;
        var after10Days = 80 * 10;
        var remainingDays = sDays - 20;
        var after20Days = remainingDays * 50;
        var cost = first10Days + after10Days + after20Days;
    }
    return cost;
}
var totalCost = hotelCost(45);
console.log(totalCost, 'Taka');



//problem-4_megaFriend
function megaFriend(inName){
    var mfName = inName[0];
    for(var i=0; i< inName.length; i++){
        var element = inName[i];
       if(element.length>mfName.length){
           mfName = element;
       }
    }
    return mfName;
}
var resultMegaFriend = megaFriend(["Mahmudul Hasan", "Mohosin Reza Nobab", "Asaduzzaman Kazol", "Milon Mahmud", "Mizan"]);
console.log('Mega Friend =', resultMegaFriend);
