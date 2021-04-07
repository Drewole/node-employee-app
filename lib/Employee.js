class Employee {
     constructor (firstName, lastName, id, email) {
          this.firstName = firstName;
          this.lastName = lastName;
          this.id = id;
          this.email = email;
          
     }
     getFullName() {
          return `${this.firstName} ${this.lastName}`
     }
     getId() {
          return this.id;
     }
     getFirstName() { 
          return this.firstName;
     }
     getRole() {
          const role = "Employee";
          return role;
     }

}

module.exports = Employee;