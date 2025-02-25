let firstTemp = [8, 14, 12, 21];
let secondTemp = [18,44, 12,8,6,21];

let uniqueArr=[];
function filterArray(...arrays){
    let newArray=[].concat(...arrays);
        for(let i of newArray){
            if(!uniqueArr.includes(i)){
                uniqueArr.push(i);
            }
        }
        return uniqueArr
    }
    // newArray = [ ...firstArr, ...secondArr]
    // let filter;
    // return filter={...newArray}
    // for(let i = 0; i <newArray.length; i++){
    //     if(newArray[i] != newArray[i])
    // }
    // if()

console.log(filterArray([8, 14, 12, 21], [18,44, 12,8,6,21]));
