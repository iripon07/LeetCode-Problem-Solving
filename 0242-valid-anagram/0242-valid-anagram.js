/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length)
        return false;
    
    let alphabets = {};
    
    for(let i=0; i <s.length; i++){
        alphabets[s[i]] = alphabets[s[i]] ? alphabets[s[i]] + 1 : 1;
        alphabets[t[i]] = alphabets[t[i]] ? alphabets[t[i]]  -1 : -1;
    }
    
    for( let alpha in alphabets)
        if( alphabets[alpha] !== 0)
            return false;
    
    return true;
    
};