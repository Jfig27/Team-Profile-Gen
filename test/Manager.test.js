const Manager = require('../lib/manager');

describe("Manager", () => {
  describe("getRole", () => {
    it("returns 'Manager'", () => {
      const role = "Manager";

      const managerRole = new Manager({}).getRole();

      expect(managerRole).toEqual(role);
    });
  });
  describe("getCard", () => {
    it("returns html card of Manager", () => {
      const card = `<div class="card shadow bg-dark col-2 px-0 mx-3">
      <div class="card-header p-3 mb-0 bg-primary text-white">
        <h5 class="card-title">Jon</h5>
        <h6 class="card-subtitle mb-0">Manager</h6>
      </div>
      <div class="card-body bg-dark text-light">
        <p class="card-text">ID: 8</p>
        <p class="card-text">Email: <a href="mailto: email@email.com" class="card-link" target="_blank">email@email.com</a></p>
        <p class="card-text">Office number: 2</p>
      </div>
    </div>\n`;

      const managerCard = new Manager({
        name: "Jon",
        id: "8",
        email: "email@email.com",
        officeNumber: "2",
      }).getCard();

      expect(managerCard).toEqual(card);
    });
  });
});