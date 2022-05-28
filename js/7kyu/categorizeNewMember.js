//The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

//To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

function openOrSenior(data){
    let arr = [];
    
    data.map(element => {
        if(element[0] >= 55 && element[1] > 7){
            arr.push('Senior')       
        }else{
            arr.push('Open')
        }
    })
    return arr
}

// Alternative
function openOrSenior(data){
    return data.map(element => (element[0] >= 55 && element[1] > 7) ? 'Senior' : 'Open')
}