//write your code here to make the tests pass
class Document {
    constructor(name) {
        this.EmployeeName = name
    }
}

class Employee {
    constructor(name) {
        this.name = name
    }
    work(office) {
        for(let i =0;i<10;i++){
        const docs = new Document(this.name)
        office.documents.push(docs)
        }
    }
}

class Manager {
    constructor(name) {
        this.name = name
        this.employees = []
    }
    hireEmployee(name) {
        const emp = new Employee(name)
        this.employees.push(emp)
    }
    askEmployeesToWork(office){
        for(let emp of this.employees)
        emp.work(office)

    }
}

class Cleaner{
    constructor(name){
        this.name = name
    }
    clean(){
        console.log("Clean")
    }
}

class Office{
    constructor(){
        this.documents = []
        this.managers = []
        this.cleaners = []
    }
    hireCleaner(name){
        const cleaner = new Cleaner(name)
        this.cleaners.push(cleaner)
    }
    hireManager(name){
        const manager = new Manager(name)
        this.managers.push(manager)
    }
    startWorkDay(){
        for(let manager of this.managers)
        manager.askEmployeesToWork(this)
        for(let cleaner of this.cleaners)
        cleaner.clean()
    }
}



