var shoppingCart = {
    books: 10,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 20,
}
// when you konw the specific property name, use dot notation to get the property value
var penCount = shoppingCart.pen;

// alternative system
// when you konw the specific property name, use [] to get the property value
var penCount2 = shoppingCart['pen'];

var propertyName = 'mouse';
var propertyValue = shoppingCart[propertyName]
// console.log(propertyName, propertyValue);

var properties = Object.keys(shoppingCart);
var propertyValue = Object.values(shoppingCart);
console.log(shoppingCart);
// console.log(properties);
// console.log(propertyValue);

// set property values
shoppingCart.mouse = 25;
console.log(shoppingCart);
shoppingCart['mouse'] = 30;
console.log(shoppingCart);
shoppingCart[propertyName] = 50;
console.log(shoppingCart);

