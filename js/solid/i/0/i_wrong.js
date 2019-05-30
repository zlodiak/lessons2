interface Person {
    getPay();
    setPay();
}


class Boss implements Person {
    constructor()   { this.pay = 100 }
    getPay()        { return this.pay }  
    setPay(pay)     { this.pay = pay }      
}


class Employee implements Person {
    constructor()   { this.pay = 10 }
    getPay()        { return this.pay }  
    setPay(pay)     { this.pay = pay }      
}


boss = new Boss();
console.log(boss.getPay());     // 100
boss.setPay(200);
console.log(boss.getPay());     // 200

employee = new Employee();
console.log(employee.getPay());     // 10
employee.setPay(20);
console.log(employee.getPay());     // 20

