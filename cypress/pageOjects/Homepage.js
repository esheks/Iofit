class HomePage {
    // visit() {
    //   cy.visit("https://www.iofit.ca/");
    //   cy.viewport(1280, 720);
    // }
  
    home() {
      
      const home = cy.xpath(
        '//*[@id="masthead"]/div[2]/div/div/div/nav/ul/li[1]/a'
      );
      home.click();
  
      
      const course = cy.xpath('//*[@id="panel-7083-2-0-1"]/div/div/div/a');
      course.click();
  
  
      cy.go("back");
  
     
     
    }
  }
  
  export default HomePage;
  