interface Ability1 {
    getPay();
}

interface Ability2 {
    setPay();
}


class Boss implements Ability1, Ability2 {
    constructor()   { this.pay = 100 }
    getPay()        { return this.pay }  
    setPay(pay)     { this.pay = pay }      
}


class Employee implements Ability1 {
    constructor()   { this.pay = 10 }
    getPay()        { return this.pay }   
}


boss = new Boss();
console.log(boss.getPay());     // 100
boss.setPay(200);
console.log(boss.getPay());     // 200

employee = new Employee();
console.log(employee.getPay());     // 10

