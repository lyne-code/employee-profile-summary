// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager {
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