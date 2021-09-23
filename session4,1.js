function unique(arr){
 var newArr=[];
 for(var i=0;i<arr.length;i++){
     if(newArr.indexOf(arr[i])===-1){
         newArr.push(arr[i]);
     }
 }
return newArr;
}
let values=["green","green","red","red","yellow","pink","pink","yellow"];
let arr=values;
console.log("unique values are",unique(arr)); 