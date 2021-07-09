class Courses {

    Course() {
      
      const Course = cy.xpath(
        '//*[@id="masthead"]/div[2]/div/div/div/nav/ul/li[3]'
      );
  
      Course.click({
        force: true,
      });
      Course.trigger("mouseover");
      Course.should("be.visible");
  
      return this;
    }
  }
  
  export default Courses;
  