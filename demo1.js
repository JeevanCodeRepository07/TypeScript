// Types of Functions
// Ananyomus function
// (1) Function without parameter without return type
var temp1 = function () {
    console.log("Ananymus Function");
};
temp1();
// (2) Function with parameter without return type
var temp2 = function (a, b) {
    console.log(a + b);
};
temp2(20, 2);
// (3) function with parameter with return type
var temp3 = function (a, b) {
    return (a + b);
};
var res = temp3(5, 8);
console.log("result " + res);
// (4) function without parameter with return type
var temp4 = function () {
    return "jeevan";
};
var return_value = temp4();
console.log(return_value);
