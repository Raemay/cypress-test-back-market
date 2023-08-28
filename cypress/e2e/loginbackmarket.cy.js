describe("Login back market", () => {
  it("can login succesfully", () => {
    cy.visit("https://preprod.backmarket.fr/fr-fr/register");
    cy.get(
      "button._1xMx-RYw:nth-child(3) > div:nth-child(1) > span:nth-child(1)"
    ).click();
    cy.get("#signin-email")
      .type("testcypress@test.com")
      .should("have.value", "testcypress@test.com");
    cy.get("#signin-password").type("Test1234");
    cy.get(
      "div.mt-7:nth-child(4) > button:nth-child(1) > div:nth-child(1) > span:nth-child(1)"
    ).click();
    cy.url().should(
      "eq",
      "https://preprod.backmarket.fr/fr-fr/dashboard/orders"
    );
  });
  it("can't login", () => {
    cy.visit("https://preprod.backmarket.fr/fr-fr/register");
    cy.get(
      "button._1xMx-RYw:nth-child(3) > div:nth-child(1) > span:nth-child(1)"
    ).click();
    cy.get("#signin-email").type("testcypress@test.com");
    cy.get(
      "div.mt-7:nth-child(4) > button:nth-child(1) > div:nth-child(1) > span:nth-child(1)"
    ).click();
    cy.get(
      ".mb-8 > div:nth-child(2) > form:nth-child(2) > div:nth-child(2) > div:nth-child(1) > p:nth-child(2)"
    ).should("be.visible");
  });
});

describe("register back market", () => {
  it("can register successfully", () => {
    cy.visit("https://preprod.backmarket.fr/fr-fr/register");
    cy.get(
      "button._1xMx-RYw:nth-child(3) > div:nth-child(1) > span:nth-child(1)"
    ).click();
    cy.get("#firstName").type("test").should("have.value", "test");
    cy.get("#lastName").type("testName").should("have.value", "testName");
    cy.get("#signup-email")
      .type("test99999@gmail.com")
      .should("have.value", "test99999@gmail.com");
    cy.get("#signup-password")
      .type("Test12345")
      .should("have.value", "Test12345");
    cy.get("div.flex:nth-child(7) > button:nth-child(1)").click();
    cy.url().should("eq", "https://preprod.backmarket.fr/fr-fr/register");
  });
  it("can't register", () => {
    cy.visit("https://preprod.backmarket.fr/fr-fr/register");
    cy.get(
      "button._1xMx-RYw:nth-child(3) > div:nth-child(1) > span:nth-child(1)"
    ).click();
    cy.get("#firstName").type("test").should("have.value", "test");
    cy.get("#lastName").type("testName").should("have.value", "testName");
    cy.get("#signup-email")
      .type("test99999@gmail.com")
      .should("have.value", "test99999@gmail.com");
    cy.get("#signup-password").type("1234").should("have.value", "1234");
    cy.get("div.flex:nth-child(7) > button:nth-child(1)").click();
    cy.get("#signup-password").should("have.css", "color", "rgb(18, 18, 18)");
  });
});
