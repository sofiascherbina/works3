// let temperatures = [18, 14, 12, 21, 17, 29];
// console.log(Math.min(...temperatures));
// console.log(temperatures.slice(0,3));

// let copyTemperatures = [...temperatures,10,20,30]
// console.log(copyTemperatures);

// let a={
//     x :5,
//     y:10
// }
// let b={
//     v :15,
//     z:30
// }
// let c = Object.assign({},a,b);
// console.log(c);

// const d = { ...a, ...b };
// console.log(d);


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