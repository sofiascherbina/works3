// let book = {
//     title:'Little women',
//     author:'Louisa May Alcott',
//     year:'1869',
//     genre:'romance',
//     typeInformation(){
//         this.title = prompt('enter new title', this.title) 
//         this.author = prompt('enter new author', this.author );
//         this. year = prompt('enter new  year', this. year );
//         this. genre = prompt('enter new  genre', this. genre );
//     }
// }
// console.log(book);


let apple = {
    name: 'apple', 
    price: 50
}

let grape = {
    name: 'lemon', 
    price: 70
}
let lemon = {
    name: 'lemon', 
    price: 60
}
let strawberry = {
    name: 'strawberry', 
    price: 110,
}


const cart = {
    items: [
        apple,
        grape,
        lemon,
        strawberry,
    //    { name: 'apple', price: 50},
    //    { name: 'grape', price: 70},
    //    { name: 'lemon', price: 60},
    //    { name: 'strawberry', price: 110},
    ], 
    getItems() {
            console.log(this.items);
    },
    add(){
       let newProduct = {
            name : prompt('enter name of new product', this.name),
            price :prompt('enter price of new product', this.price)
        }
        this.items.push(newProduct)
        console.log(this.items);
    },
    remove() {
        let removeFruit = prompt('enter product you want to delete');
        this.items.splice(removeFruit, 1)
        console.log(this.items);
    },
    clear() {
        for(let i = 0; i < this.items.length; i++){
            this.items.splice(this.items[i])
        }
        console.log(this.items);
    },
    countTotalPrice() {
        let sum = 0;
        for(let i = 0; i < this.items.length; i++){
            sum+= this.items[i].price
        }
        console.log(sum)
    },
    increaseQuantity() {
        let fruit = prompt('enter fruit')
        for(let i = 0; i < this.items.length; i++){
           if(this.items[i].name === fruit){
            this.items[i].quantity = Number(prompt('enter quantity of fruit', this.quantity));
            console.log(this.items);
            return
           }
        }
    },
    decreaseQuantity() {
        let fruit = prompt('enter fruit')
        for(let i = 0; i < this.items.length; i++){
           if(this.items[i].name === fruit){
            let quantity = Number(prompt('enter quantity of fruit'));
            this.items[i].quantity-= quantity
            console.log(this.items);
            return
           }
        }
    },
  };
document.getElementById('btn-getItems').onclick = () => console.log(cart.getItems());
document.getElementById('btn-add').onclick = () => console.log(cart.add());
document.getElementById('btn-remove').onclick = () => console.log(cart.remove());
document.getElementById('btn-clear').onclick = () => console.log(cart.clear());
document.getElementById('btn-countTotalPrice').onclick = () => console.log(cart.countTotalPrice());
document.getElementById('btn-increaseQuantity').onclick = () => console.log(cart.increaseQuantity());
document.getElementById('btn-decreaseQuantity').onclick = () => console.log(cart.decreaseQuantity());