const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("getName", () => {
    it("returns name of employee", () => {
      const inputName = "Josh";

      const employeeName = new Employee({ name: "Josh" }).getName();

      expect(employeeName).toEqual(inputName);
    });
  });
  describe("getId", () => {
    it("returns id of given employee", () => {
      const inputId = 2;

      const id = new Employee({ id: 2 }).getId();

      expect(id).toEqual(inputId);
    });
  });
  describe("getEmail", () => {
    it("returns email of given employee", () => {
      const inputEmail = "email@email.com";

      const email = new Employee({ email: "email@email.com" }).getEmail();

      expect(email).toEqual(inputEmail);
    });
  });
  describe("getRole", () => {
    it("returns 'Employee'", () => {
      const employeeType = "Employee";

      const result = new Employee({}).getRole();

      expect(result).toEqual(employeeType);
    });
  });
});