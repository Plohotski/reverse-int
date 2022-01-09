module.exports = function reverse(n) {
    var result = '';
    while(Math.abs(n)>0){
    result = result + (Math.abs(n)%10);
    n = parseInt(Math.abs(n)/10);
    }
    return result;
} 

