class Registration {
   
  
    Register() {
      const Register = cy.xpath(
        '//*[@id="masthead"]/div[2]/div/div/div/nav/ul/li[4]/a'
      );
      Register.click();
  
      return this;
    }

    
    SelectCourse() {
      const SelectCourse = cy.get(
        '#panel-8422-0-0-2 > .textwidget > form > table > tbody > :nth-child(2) > td > select'
      );
      
      SelectCourse.select("QA-Adv-SQL Manual Testing $1399+GST with $50 off");
      return this;
    }
    City() {
      const city = cy.xpath(
        '//*[@id="panel-8422-0-0-2"]/div/form/table/tbody/tr[4]/td/select'
      );
      
      city.select("Edmonton");
      return this;
    }
    
  
    Name(value) {
      const Name = cy.get(
        '#panel-8422-0-0-1 > .textwidget > form > table > tbody > :nth-child(6) > td > input'
      );
      Name.clear();
      Name.type(value);
  
      return this;
    }
    
    Phone(value) {
      const Phone = cy.get(
        '#panel-8422-0-0-2 > .textwidget > form > table > tbody > :nth-child(8) > td > input'
      );
      Phone.clear();
      Phone.type(value);
  
      return this;
    }
  
    PayNow() {
      const PayNow = cy.get('#panel-8422-0-0-2 > .textwidget > form > :nth-child(6) > [type="image"]');
      PayNow.click();
      return this;
    }
  }
  
  export default Registration;
  