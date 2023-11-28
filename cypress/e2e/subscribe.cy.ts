describe("Newsletter Subscribe Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("allows users to subscribe to the email list", () => {
    cy.getByData("email-input").type("tom@aol.com")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("exist").contains("tom@aol.com")
  })

  it("does NOT allow an invalid email address", () => {
    cy.getByData("email-input").type("tom")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("not.exist")
  })

  it("does NOT allow an already registered email address", () => {
    let email = "john@example.com"
    let errorMessage = `Error: ${email} already exists. Please use a different email address.`
    cy.getByData("email-input").type(email)
    cy.getByData("submit-button").click()
    cy.getByData("server-error-message").should("exist").contains(errorMessage)
  })
})
