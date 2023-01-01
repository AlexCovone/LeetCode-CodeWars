// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers){
    let phoneFormat = '(xxx) xxx-xxxx'
    
    for(let i = 0; i < numbers.length; i++){
        phoneFormat = phoneFormat.replace('x', numbers[i])
    }

    return phoneFormat
}