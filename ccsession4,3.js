function Elements(value) {
    return function (evalue,index,araay) {
        return (evalue>=value);
    };
}
var result=[1,33,99,50,100,150,60,99,1000,999,0,-1,10,-2].filter(Elements(150));
console.log(result);