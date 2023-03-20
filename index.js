//  Question 1
//Mutating Array methods change the object after the method has been used.
//Non-Mutating Methods do not change the object after the method has been used.

//Mutating e.g array.push() , array.unshift()
//Non-Mutating e.g array.concat() , ...array spread operator

//2a
let Language = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']
Language.push('Kotlin');
console.log(Language);

//2b
Language.splice(2,0,'Java');
console.log(Language);

//2c
Language.shift();
console.log(Language);

//2d
Language.unshift('Scala', 'Swift');
console.log(Language);

//2e
Language.splice(3,1,'Go', 'Rust');

//3
let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}
console.log(fruit);
// solution
//[ 'apple', 'mango', 'banana' ]

//4
let numbers = [2,4,6,8,10];
    function MaxNumbers(numbers) {
        return Math.max.apply(null, 2,4,6,8,10);
    }

    //5
    let arr2 = [3, 7, 2, 6,];
  function valTimesIndex(arr2) {
  let result = arr2.map((value, index) => value * index);
  return result;
  }
  console.log(valTimesIndex(arr2));


