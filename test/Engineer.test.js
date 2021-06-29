const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  describe("getGithub", () => {
    it("returns github account of Engineer", () => {
      const inputGit = "gh";

      const engineerGit = new Engineer({ github: "gh" }).getGithub();

      expect(engineerGit).toEqual(inputGit);
    });
  });
  describe("getRole", () => {
    it("returns 'Engineer'", () => {
      const role = "Engineer";

      const engineerRole = new Engineer({}).getRole();

      expect(engineerRole).toEqual(role);
    });
  });
  describe("getCard", () => {
    it("returns html card of Engineer", () => {
      const card = `<div class="card shadow bg-dark col-2 px-0 mx-3">
          <div class="card-header p-3 mb-0 bg-primary text-white">
            <h5 class="card-title">Jon</h5>
            <h6 class="card-subtitle mb-0">Engineer</h6>
          </div>
          <div class="card-body bg-dark text-light">
            <p class="card-text">ID: 8</p>
            <p class="card-text">Email: <a href="mailto: email@email.com" class="card-link" target="_blank">email@email.com</a></p>
            <p class="card-text">Github: <a href="https://github.com/gith " class="card-link" target="_blank">gith</a></p>
          </div>
        </div>\n`;

      const engineerCard = new Engineer({
        name: "Jon",
        id: "8",
        email: "email@email.com",
        github: "gith",
      }).getCard();

      expect(engineerCard).toEqual(card);
    });
  });
});