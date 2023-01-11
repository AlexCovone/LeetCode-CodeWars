/*
You have to write a function that accepts three parameters:

cap is the amount of people the bus can hold excluding the driver.
on is the number of people on the bus excluding the driver.
wait is the number of people waiting to get on to the bus excluding the driver.
If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.
*/

function enough(cap, on, wait) {
    let passengersAllowedOn = cap - on

    return passengersAllowedOn >= wait ? 0 : wait - passengersAllowedOn
}

function enough(cap, on, wait) {
    return (on + wait > cap) ? on + wait - cap : 0;
  }

// On + Wait is the number of potential passengers
// On + Wait - Cap is the potential passengers left after reaching the maximum