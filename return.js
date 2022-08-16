// function add(num1, num2) {
//     console.log(num1, num2);
//     var sum = num1 + num2;
//     // console.log(sum);
//     return sum;
// }
// // add(45, 15);
// var total = add(80, 20);
// console.log('total', total);


// function getMoney(father, brother) {
//     console.log(father, brother);
//     var sum = father + brother;
//     return sum;
// }
// var totalMoney = getMoney(500, 300);
// console.log('Total Get:', totalMoney)


function bringSingara(money) {
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}
var myTaka = 200;
var singara = bringSingara(myTaka);
console.log('Total singara:', singara);