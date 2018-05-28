// YOUR CODE BELOW
/*
taxCalculator(100, 'NY'); // => 104
taxCalculator(100, 'NJ'); // => 106.625
*/

function taxCalculator(price, state){
switch (state){
    case 'NY': 
        return price * 1.04;
        
        case 'NJ': 
        return price * 1.06625;
        
        default:
        return price;
        
    
}

}

