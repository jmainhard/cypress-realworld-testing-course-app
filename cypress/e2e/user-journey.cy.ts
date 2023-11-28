describe("User Journey", () => {
    it("a user can find a course on the home page and start the courses lessons", () => {
      cy.visit("http://localhost:3000")
      cy.getByData("course-0").find("a").contains('Get started').click()
      cy.location("pathname").should("equal", "/testing-your-first-application")
      cy.getByData("next-lesson-button").click()
      cy.location("pathname").should(
        "eq",
        "/testing-your-first-application/app-install-and-overview"
      )
    })
  })
  