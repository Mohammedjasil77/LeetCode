/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let ans = 0;
    const values={
        I: 1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }

    for(i=0; i<s.length; i++){
        if(values[s[i]] < values[s[i+1]] ){
            ans -= values[s[i]]            
        }
        else{
            ans += values[s[i]]
             }
    }
    return ans
    
};