const Employee = require("./Employee");

class Engineer extends Employee {
     constructor(firstName, lastName,id,github) {
          this.firstName = firstName;
          this.lastName = lastName;
          this.id = id;
          this.github = github;
          this.email = this.generateEmail();
     }
 super(firstName,lastName,id)

     getGithub() {
         return this.github;
     }
     getRole() {
          const role = "Engineer";
          return role;
    }
}

module.exports = Engineer;