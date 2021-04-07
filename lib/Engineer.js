const Employee = require("./Employee");

class Engineer extends Employee {
     constructor(firstName, lastName,id,email,github) {
          this.firstName = firstName;
          this.lastName = lastName;
          this.id = id;
          this.github = github;
          this.email = email;

          super(firstName,lastName,id)
     }
 
     getGithub() {
         return this.github;
     }
     getRole() {
          const role = "Engineer";
          return role;
    }
}

module.exports = Engineer;