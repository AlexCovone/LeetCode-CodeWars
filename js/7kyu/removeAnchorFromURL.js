// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

function removeUrlAnchor(url){
    let arr = url.split('')
  
    let sliceBeyond = arr.indexOf('#');
  
    if(sliceBeyond !== -1){
      return arr.slice(0, sliceBeyond).join('')
    }else{
      return arr.join('')
    }
  }