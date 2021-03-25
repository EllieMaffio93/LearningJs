//Fizz Buzz Game

    var output = '' + '<br>';
    //Loop
    //setting the counter for i<=100
    //for each round add 1 to i
    for (var i = 1; i <= 100;  i++){
        //if i is multiple of both 3 and 5
        if((i % 3 === 0) && (i % 5 === 0)){
            //console print FizzBuzz
            
            output = 'FizzBuzz';
            console.log(output);
    
        }
        //otherwise if i is multiple of only 3 
        else if(i % 3 === 0){
            //console print Fizz
            
            output = 'Fizz';
            console.log(output);
        }
        //otherwise if i is multiple of only 5
        else if (i % 5 === 0){
            //console print Buzz
            
            output = 'Buzz';
            console.log(output);
        }
        //default console print i value
        else{
            
            output = i;
            console.log(output);
        }
        
    }

   




