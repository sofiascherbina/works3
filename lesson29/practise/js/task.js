const tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
    { id: '003', likes: 8, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
  ];
//   let result = tweets.reduce((acc, element) =>  acc + element.likes, 0 )
//   console.log(result);
//   let result = tweets.reduce((acc, element) => acc.push(...element.tags), [] )
//   console.log(result);

//   let result = tweets.reduce((acc, element) => {
//     // let tegArr = [...element.tags];
//     acc.push(...element.tags);
//     return acc;
//   }, [])
//   console.log(result);

  let result = tweets.reduce((acc, element) => {
    element.tags.forEach((num) => {
    if(acc[num]){
      acc[num]+=1
    }
    else{
      acc[num] = 1;
    }
   })  
   return acc;  
  }, {})
  console.log(result);

// let numbers = [1, 2, 3, 4, 5];
// let result = numbers.reduce((acc, element) =>  acc + element / numbers.length, 0 )
// console.log(result);


// const arr = [  { name: 'apple', value: 2 }, { name: 'banana', value: 3 },  { name: 'orange', value: 4 },
// ];
// let obj = arr.reduce((acc, element) => {
//   acc[element.name] = element.value;
//   return acc;
// }, {})

// console.log(obj)

// const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'banana'];
// let result = fruits.reduce((acc, element) => {
//     if(acc[element]){
//       acc[element]+=1
//     }
//     else{
//       acc[element] = 1
//     }
//     return acc
// }, {})
// console.log(result);

