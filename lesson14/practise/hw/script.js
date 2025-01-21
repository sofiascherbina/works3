let num = [86 , 20 , 56];
num[1] = 10;
for (let i  = 0; i < num.length ; i++){
    console.log(num[i]);
}


let txt = [
    'Для тебе всесвіту буде мало',
    'Ти орхідея, мій beautiful flower',
    'Прошу мене не уникай'
]
txt[3] = 'І подаруй мені green light';
for (let i  = 0; i < txt.length ; i++){
    console.log(txt[i]);
}

let numbers = [11, 86, 14];
let sum = 0;
for( let i = 0; i < numbers.length; i ++){
    sum += num[i];
}
console.log(sum)


let name  = ['K','a', 't', 's', 'u'];
for (let i = 0; i < name.length; i++){
    console.log(name[i]);
}

let str = ['bakugo', 'kaiser','hinata','miku','clorinda'];
for (let i = 0; i < str.length; i++){
    if(str[i].length > 5){
        console.log(str[i]);
    }
}


let x = [0];
for(let i = 0; i < 11; i++){
   if(i > x){
    x = i;
   }
}
console.log(x);


for(let i = 1; i < 11; i++){
    if( i % 2 === 0){
        console.log(i);
    }
 }



