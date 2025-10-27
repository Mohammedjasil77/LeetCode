/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let number = -1;
    for(i=0; i<arr.length; i++){
        let count = 0;
        for(j=0; j<arr.length; j++){
            if(arr[i] === arr[j]){
                count++;
            }     
        }  
        if(arr[i] === count){
        number = Math.max(number,arr[i])
        }    
    }
        return number
};