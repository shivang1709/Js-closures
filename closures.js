//Question1
//ANS
function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}
var counter = counter();
alert(counter());//1
alert(counter());//2
alert(counter());//3
alert(counter());//4


//Question2
//ANS
let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count);//1
  }
  console.log(count);//0
})();

//Question3
//ANS
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); //0,1,2
    }, 1000);
}

//Question4.
//ANS
function areaRectangle(a, b)
{
    let area = a * b;
    return area;
}
console.log(4,5);


//Question5.
//ANS
function counter(){
    var counter = 0;
    
    function IncreaseCounter() {
        return counter += 1;
    };
    return IncreaseCounter;
}
var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());

//Question6.
//ANS

var a = 12;
(function () {
  alert(a);//12
})();

//Question7
//ANS
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);//12
  };
})();
x();

//Question8
//ANS
var globalVar = "xyz";
(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    console.log(
        "outerArg = " + outerArg + "\n" +//123
        "innerArg = " + innerArg + "\n" +//456
        "outerVar = " + outerVar + "\n" +//a
        "innerVar = " + innerVar + "\n" +//b
        "globalVar =" + globalVar);//xyz
    
    })(456);
})(123);