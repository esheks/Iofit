class AboutPage {
    
  
    About() {
      
      const About = cy.xpath(
        '//*[@id="masthead"]/div[2]/div/div/div/nav/ul/li[2]/a'
      );
      About.click();
  
      return this;
    }
  }
  
  export default AboutPage;
  