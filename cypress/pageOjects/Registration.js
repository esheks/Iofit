class Registration {
    // visit() {
    //   cy.visit("https://www.iofit.ca/");
    // }
  
    Register() {
      const Register = cy.xpath(
        '//*[@id="masthead"]/div[2]/div/div/div/nav/ul/li[4]/a'
      );
      Register.click();
  
      return this;
    }
  
    SelectCourse() {
      const SelectCourse = cy.xpath(
        '//*[@id="panel-8422-1-0-1"]/div/form/table/tbody/tr[2]/td/select'
      );
      
      SelectCourse.select("Selenium Test Automation $1,199.00 CAD");
      return this;
    }
    
  
    Name(value) {
      const Name = cy.xpath(
        '//*[@id="panel-8422-1-0-1"]/div/form/table/tbody/tr[6]/td/input'
      );
      Name.clear();
      Name.type(value);
  
      return this;
    }
    Phone(value) {
      const Phone = cy.xpath(
        '//*[@id="panel-8422-1-0-1"]/div/form/table/tbody/tr[8]/td/input'
      );
      Phone.clear();
      Phone.type(value);
  
      return this;
    }
  
    PayNow() {
      const PayNow = cy.xpath('//*[@id="panel-8422-1-0-1"]/div/form/input[4]');
      PayNow.click();
      return this;
    }
  }
  
  export default Registration;
  