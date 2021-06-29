const Intern = require("../lib/intern");

describe("Intern", () => {
  describe("getSchool", () => {
    it("returns school of intern", () => {
      const inputSchool = "lfdcs";

      const internSchool = new Intern({ school: "lfdcs" }).getSchool();

      expect(internSchool).toEqual(inputSchool);
    });
  });
  describe("getRole", () => {
    it("returns 'Intern'", () => {
      const role = "Intern";

      const internRole = new Intern({}).getRole();

      expect(internRole).toEqual(role);
    });
  });
  describe("getCard", () => {
    it("returns html card of Intern", () => {
      const card = `<div class="card shadow bg-dark col-2 px-0 mx-3">
            <div class="card-header p-3 mb-0 bg-primary text-white">
                <h5 class="card-title">Jon</h5>
                <h6 class="card-subtitle mb-0">Intern</h6>
            </div>
            <div class="card-body bg-dark text-light">
                <p class="card-text">ID: 8</p>
                <p class="card-text">Email: <a href="mailto: email@email.com" class="card-link" target="_blank">email@email.com</a></p>
                <p class="card-text">School: lfdcs</p>
            </div>
        </div>\n`;

      const internCard = new Intern({
        name: "Jon",
        id: "8",
        email: "email@email.com",
        school: "lfdcs",
      }).getCard();

      expect(internCard).toEqual(card);
    });
  });
});