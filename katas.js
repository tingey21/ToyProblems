//https://www.codewars.com/kata/kiss-keep-it-simple-stupid/train/javascript
// level 7 Kata
function isKiss( words ){
    //turn it into an array
    words = words.split(' ');
    //get the value to test it later
    let value = words.length;
    // a boolean that dictates the return
    let complex = false;
    words.map( (word) =>{
        //if the word length is greater than the array length set complex to true
      if(word.length > value){
        complex = true;
      }
    })
    
   if(complex){
     return "Keep It Simple Stupid"
   } 
   else{ 
    return "Good work Joe!"
    }
  }
  //----------------------------------//


  //https://www.codewars.com/kata/middle-me/train/javascript
  
  function middleMe(N, X, Y){
    let str = ''
    
    if(N % 2 == 0 && N !== 0){
    for(i = 0; i < N; i++){
    
    if(i == N/2){
     
      str += X
        }
        
        str += Y
      }
       return(str)
    }
    return X
}


//----------------------------------//
//https://www.codewars.com/kata/54da539698b8a2ad76000228


function isValidWalk(walk){
  let obj = {n:0, s:0, e:0, w:0}
  walk.forEach(e => obj[e]++)
  return (walk.length === 10 && obj.n === obj.s && obj.e === obj.w) ? true : false;
}

//----------------------------------//


//https://www.codewars.com/kata/564e624da64546f72e0000e8

function cake(key, value){
  
  var recipe = {'caster sugar': 160, 'butter': 170, 'eggs': 3, 'self-raising flour': 115, 'cocoa powder': 55};
  var newAmount = value  /recipe[key] 
  for( var key in recipe){
    recipe[key] = Math.round((recipe[key] * newAmount) * 10) /10
    if (key !== 'eggs'){
      recipe[key] += 'g'
    }
    
  }
  return recipe
}


//----------------------------------//
//https://www.codewars.com/kata/58f6000bc0ec6451960000fd

function selReverse(array, length) {
  let reversedArr = [];
  if (length === 0) {
    return array;
  }
  for (let i = 0; i < array.length; i += length) {
    reversedArr = reversedArr.concat(array.slice(i, i + length).reverse());
  }
  return reversedArr;
}
//----------------------------------//

// https://www.codewars.com/kata/520b9d2ad5c005041100000f


function pigIt(str){
  var arr = str.split(' ');
  console.log(arr)
  var pigLatin = ''
  for(var i= 0; i < arr.length; i++  ){
    var arrLetter = arr[i].split('');
    
  removedLetter = arrLetter.splice(0,1);
  if(i !== arr.length - 1){
  arrLetter.push(removedLetter + 'ay ')
  }else{
    arrLetter.push(removedLetter + 'ay')
  }
  console.log(arrLetter)
  
 pigLatin +=  arrLetter.join('')
  
}
return pigLatin;
}


//----------------------------------//
//https://www.codewars.com/kata/551dc350bf4e526099000ae5

function songDecoder(song){

  var remove = song.replace(/(WUB)+/g, ' ').trim();
  return remove;
}
songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")

//----------------------------------//


//https://www.codewars.com/kata/59b72376460387017e000062

function isHollow(x){  
  while(x.length > 2 && x[0] !== 0 && x[x.length-1] !== 0{
    x.shift();
    x.pop();
  }
  return x.length > 2 && x.every(i => i === 0);
}

//----------------------------------//

//https://www.codewars.com/kata/59d398bb86a6fdf100000031
function stringBreakers(n, str){
  return str.replace(/\s/g, '').match(new RegExp('.{1,' + n + '}', 'g')).join('\n') 
  }

//----------------------------------//

//https://www.codewars.com/kata/514b92a657cdc65150000006

function solution(number){
  var emptyArray = [0];
    for(i = 0; i < number; i++){
      if(i % 3 === 0 || i % 5 === 0){
      emptyArray.push(i);
      }
    }
    return emptyArray.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;
  });
  
  }

//----------------------------------//
 
() => {
console.log("this is a console log ")
}
