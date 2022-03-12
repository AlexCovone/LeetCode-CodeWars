/*
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.
*/

function peopleWithAgeDrink(old) {
    if(old < 14){
        return 'drink toddy'
    }else if(old < 18){
        return 'drink coke'
    }else if(old < 21){
        return 'drink beer'
    }else{
        return 'drink whisky'
    }
  };

//   Optimized
const peopleWithAgeDrink = old =>
    old < 14 ? 'drink toddy' : 
    old < 18 ? 'drink coke' :
    old < 21 ? 'drink beer' : 'drink whisky'