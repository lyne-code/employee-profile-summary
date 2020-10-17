// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(name, email, id, officeNumber){
        this.name = name;
        this.email = email;
        this.id = id;
        this.office = officeNumber;
    }
    getOfficeNumber(){
        return this.office; 
     };

    getRole(){
        return "Manager" 
     };

}

module.exports = Manager;