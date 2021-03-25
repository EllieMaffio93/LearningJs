//Fizz Buzz Game

//Loop
//setting the counter for i<=100
//each round add 1
for (var i = 1; i <= 100;  i++){
    //if i is multiple of both 3 and 5
    if((i % 3 === 0) && (i % 5 === 0)){
        //console print FizzBuzz
        console.log('FizzBuzz');
    }
    //otherwise if i is multiple of only 3 
    else if(i % 3 === 0){
        //console print Fizz
        console.log('Fizz');
    }
    //otherwise if i is multiple of only 5
    else if (i % 5 === 0){
        //console print Buzz
        console.log('Buzz');
    }
    //default console print i value
    else{
        console.log(i);
    }
}