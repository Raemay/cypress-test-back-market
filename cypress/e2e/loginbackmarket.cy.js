describe("Login back market", () => {
  it("can login succesfully", () => {
    cy.visit("https://preprod.backmarket.fr/fr-fr/register");
    cy.get('button._1xMx-RYw:nth-child(3) > div:nth-child(1) > span:nth-child(1)').click()
    cy.get("#signin-email")
      .type("testcypress@test.com")
      .should("have.value", "testcypress@test.com");
    cy.get("#signin-password")
      .type("Test1234")
      .should("have.value", "Test1234");
    cy.get("div.mt-7:nth-child(4) > button:nth-child(1) > div:nth-child(1) > span:nth-child(1)").click();
    cy.url().should("eq", "https://preprod.backmarket.fr/fr-fr/dashboard/orders");
  });
});
