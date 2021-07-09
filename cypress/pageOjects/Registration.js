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
        '//*[@id="post-8422"]/div/form/table/tbody/tr[2]/td/select'
      );
      SelectCourse.select("Fast Track - Software Development");
      return this;
    }
    Mode() {
      const Mode = cy.xpath(
        '//*[@id="post-8422"]/div/form/table/tbody/tr[4]/td/select'
      );
      Mode.select("Study from home - distance learning");
  
      return this;
    }
  
    Name(value) {
      const Name = cy.xpath(
        '//*[@id="post-8422"]/div/form/table/tbody/tr[6]/td/input'
      );
      Name.clear();
      Name.type(value);
  
      return this;
    }
    Phone(value) {
      const Phone = cy.xpath(
        '//*[@id="post-8422"]/div/form/table/tbody/tr[8]/td/input'
      );
      Phone.clear();
      Phone.type(value);
  
      return this;
    }
  
    PayNow() {
      const PayNow = cy.xpath('//*[@id="post-8422"]/div/form/p[2]/input[2]');
      PayNow.click();
      return this;
    }
  }
  
  export default Registration;
  