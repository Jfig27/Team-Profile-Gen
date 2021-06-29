const Employee = require("./Employee");

class Engineer extends Employee{

    constructor(input) {
        super(input);
        this.github = input.github;
    }
    
    getGithub() {
        return this.github;
    }
    
    getRole() {
        return "Engineer";
    }
    
    getCard() {
        return `    <div class="card shadow bg-dark col-2 px-0 mx-3">
          <div class="card-header p-3 mb-0 bg-primary text-white">
            <h5 class="card-title">${this.getName()}</h5>
            <h6 class="card-subtitle mb-0">${this.getRole()}</h6>
          </div>
          <div class="card-body bg-dark text-light">
            <p class="card-text">ID: ${this.getId()}</p>
            <p class="card-text">Email: <a href="mailto: ${this.getEmail()}" class="card-link" target="_blank">${this.getEmail()}</a></p>
            <p class="card-text">Github: <a href="https://github.com/${this.getGithub()} " class="card-link" target="_blank">${this.getGithub()}</a></p>
          </div>
        </div>\n`
          
    }
    
}
module.exports = Engineer;