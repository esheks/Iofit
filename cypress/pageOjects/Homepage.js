class HomePage {
    visit() {
      cy.visit("https://www.iofit.ca/");
      cy.viewport(1280, 720);
    }
  
    home() {
      
      const home = cy.xpath(
        '//*[@id="masthead"]/div[2]/div/div/div/nav/ul/li[1]/a'
      );
      home.click();
  
      
      const course = cy.xpath('//*[@id="panel-7083-1-0-1"]/div/div/div/a');
      course.click();
  

      const study = cy.xpath(
        '//*[@id="main-content"]/section/div[2]/div/div[2]/div[1]/div/div[2]/div/div[2]/h2/a'
      );
      study.click();
  
      cy.go("back");
  
     
      const automation = cy.xpath(
        '//*[@id="main-content"]/section/div[2]/div/div[2]/div[1]/div/div[1]/div/div[2]/h2/a'
      );
      automation.click();
      return this;
    }
  }
  
  export default HomePage;
  