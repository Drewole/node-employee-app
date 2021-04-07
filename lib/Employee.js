class Employee {
     constructor (firstName, lastName, id) {
          this.firstName = firstName;
          this.lastName = lastName;
          this.id = id;
          this.email = email;
          
     }
     getFullName() {
          return `${this.firstName} ${this.lastName}`
     }

     getEmail(){
          this.email = `${this.firstName}@fakeemail.com`;
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