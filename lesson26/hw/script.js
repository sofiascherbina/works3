const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };
const account = {
    balance: 0, 
    transactions: [],
    createTransaction(amount, type) {
        return{
            id: parseInt(Math.random()* 9 + 1),
            amount,
            type,
        }
    
    },

    deposit() {
       let amount = parseInt(prompt('Enter the amount'));
        let transaction = this.createTransaction(amount, Transaction.DEPOSIT);
        console.log(transaction);
        this.transactions.push(transaction);
        this.balance+=amount;
        
    },

    withdraw() {
        let amount = parseInt(prompt('Enter the amount'));
        if(amount > this.balance){
            console.log('недостатньо коштів');
            return;
        }
        let transaction = this.createTransaction(amount, Transaction.WITHDRAW);
        console.log(transaction);
        this.transactions.push(transaction);
        this.balance-=amount;
    },
  

    getBalance() {
        return `Ur balance is : ${this.balance}`;
    },

    getTransactionDetails(id) {
        id = parseInt(prompt('Enter the transaction id'));
        for(let it of this.transactions){
            if(id === it.id){
                console.log(it);
                return;
            }
        }
    },

    getTransactionTotal(type) {
        type= prompt('Enter the transaction type');
        for(let it of this.transactions){
            if(type === it.type){
                console.log(it.amount);
                return;
            }
        }
    },
  };
console.log(account.deposit());
console.log(account.withdraw());
console.log(account.getBalance());
console.log(account.getTransactionDetails());
console.log(account.getTransactionTotal());


