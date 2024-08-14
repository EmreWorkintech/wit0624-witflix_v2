/* eslint-disable no-undef */

describe("Login From Tests", () => {
  describe("Success Tests", () => {
    it("button is enabled for correct credentials", () => {
      //arrange
      cy.visit("http://localhost:5173/");
      //act
      cy.get('[data-cy="password-input"]').type("12345678Aa");
      cy.get('[data-cy="email-input"]').type("emre@wit.com.tr");
      cy.get('[data-cy="terms-input"]').check();
      //assert
      cy.get('[data-cy="submit-button"]').should("have.enabled");
    });

    it("form opens welcome page on correct credentials", () => {
      //arrange
      cy.visit("http://localhost:5173/");
      //act
      cy.get('[data-cy="password-input"]').type("12345678Aa");
      cy.get('[data-cy="email-input"]').type("emre@wit.com.tr");
      cy.get('[data-cy="terms-input"]').check();
      cy.get('[data-cy="submit-button"]').click();
      //assert
      cy.url().should("contain", "/welcome");
    });
  });

  describe("Fail Tests", () => {
    it("wrong email throws error", () => {
      //arrange
      cy.visit("http://localhost:5173/");
      //act
      cy.get('[data-cy="email-input"]').type("emre@w");
      //assert
      cy.get('[data-cy="error"]').should(
        "contain",
        "Geçerli bir email adresi giriniz!..."
      );
    });
    it("1234 password throws error", () => {
      //arrange
      cy.visit("http://localhost:5173/");
      //act
      cy.get('[data-cy="password-input"]').type("1234");
      //assert
      cy.get('[data-cy="error"]').should(
        "contain",
        "Password'ünüz en az 8 karakter olmalı, en az 1 büyük harf ve 1 küçük harf içermeli."
      );
    });
    it("12345678a password throws error", () => {
      //arrange
      cy.visit("http://localhost:5173/");
      //act
      cy.get('[data-cy="password-input"]').type("12345678a");
      //assert
      cy.get('[data-cy="error"]').should(
        "contain",
        "Password'ünüz en az 8 karakter olmalı, en az 1 büyük harf ve 1 küçük harf içermeli."
      );
    });

    it("12345678A password throws error", () => {
      //arrange
      cy.visit("http://localhost:5173/");
      //act
      cy.get('[data-cy="password-input"]').type("12345678A");
      //assert
      cy.get('[data-cy="error"]').should(
        "contain",
        "Password'ünüz en az 8 karakter olmalı, en az 1 büyük harf ve 1 küçük harf içermeli."
      );
    });

    it("Wrong email and password throws 2 errors", () => {
      //arrange
      cy.visit("http://localhost:5173/");
      //act
      cy.get('[data-cy="password-input"]').type("12345678A");
      cy.get('[data-cy="email-input"]').type("emre@w");
      //assert
      cy.get('[data-cy="error"]').should("have.length", 2);
    });

    it("button is disabled for Wrong email and password", () => {
      //arrange
      cy.visit("http://localhost:5173/");
      //act
      cy.get('[data-cy="password-input"]').type("12345678A");
      cy.get('[data-cy="email-input"]').type("emre@w");
      //assert
      cy.get('[data-cy="submit-button"]').should("have.disabled");
    });
  });
});
