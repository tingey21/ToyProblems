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