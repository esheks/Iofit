// <reference types= "Cypress"/>
import HomePage from "../pageOjects/HomePage";
import AboutPage from "../pageOjects/AboutPage";
import Courses from "../pageOjects/courses";
import Registration from "../pageOjects/Registration";
describe("Test Suite", () => {
  const hp = new HomePage();
  const ap = new AboutPage();
  const cp = new Courses();
  const rp = new Registration();

  it("verify home page", () => {
    hp.visit();
    hp.home();
  });

  it("verify About us", () => {
    hp.visit();
    ap.About();
  });

  it("Courses", () => {
    hp.visit();
    cp.Course();

    // Cypress.config("pageLoadTimeout", 500000);
  });
  it("Registration", () => {
    hp.visit();
    rp.Register();
    rp.SelectCourse();
    rp.Name("vincent jerry");
    rp.Phone(8999999999);
    rp.PayNow();
  });
});
