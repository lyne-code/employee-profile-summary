// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(name, email, id, githubUsername){
        this.name = name;
        this.email = email;
        this.id = id;
        this.github = githubUsername;

    }
    getGitHub(){
       return this.github;
    };

    getRole(){
       return "Engineer" 
    };

}

module.exports = Engineer;
