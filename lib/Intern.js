// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern {
    constructor(name, email, id, schoolAttended){
        this.name = name;
        this.email = email;
        this.id = id;
        this.school = schoolAttended;
    }
    getSchool(){
        return this.school; 
     };
    getRole(){
        return "Intern" 
     };
}