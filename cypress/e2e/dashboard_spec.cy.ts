describe("Spilled", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://spilled-api.onrender.com/teas", {
      statusCode: 200,
      fixture: "test_teas",
    }).as("getTeas");
    cy.intercept("GET", "https://spilled-api.onrender.com/teas/5", {
      statusCode: 200,
      fixture: "single_tea",
    }).as("getEarlGrey");
    cy.intercept("GET", "https://spilled-api.onrender.com/teas/6", {
      statusCode: 200,
      fixture: "englishbreakfast",
    }).as("getEnglishbreakfast");
    cy.intercept("GET", "https://spilled-api.onrender.com/teas/4", {
      statusCode: 200,
      fixture: "baihoiyinzhen",
    }).as("getBaihoiyinzhen");
    cy.intercept("GET", "https://spilled-api.onrender.com/teas/8", {
      statusCode: 200,
      fixture: "satemwaantlers",
    }).as("getSatemwaantlers");
    cy.intercept("GET", "https://spilled-api.onrender.com/teas/9", {
      statusCode: 200,
      fixture: "dianhong",
    }).as("getDiahong");
    cy.viewport(1117, 700).visit("http://localhost:3000/");
  });

  it("Displays landing page", () => {
    cy.get("h1")
      .contains("Spilled")
      .get("nav")
      .children()
      .should("have.length", 3)
      .get(".div-nav-center")
      .children()
      .should("have.length", 6)
      .get(".div-nav-center")
      .contains("a", "All Teas")
      .get(".div-nav-center")
      .contains("a", "Herbal")
      .get(".div-nav-center")
      .contains("a", "Black")
      .get(".div-nav-center")
      .contains("a", "Green")
      .get(".div-nav-center")
      .contains("a", "Oolong")
      .get(".div-nav-center")
      .contains("a", "White")
      .get("img")
      .should("have.attr", "src")
      .should("include", "data:image")
      .get("article")
      .first()
      .within(() => {
        cy.get("h2")
          .contains("Let's 'spill the tea' on tea!")
          .get("p")
          .contains("Did you know")
          .get(".creation-wrapper")
          .children()
          .should("have.length", "4")
          .get("img")
          .should("have.attr", "src")
          .should("include", "/static/media/teas");
      })
      .get("article")
      .last()
      .within(() => {
        cy.get("h2")
          .contains("Herbal")
          .get("p")
          .contains(
            "Herbal teas, made from a variety of dried herbs, spices, flowers, and fruits, are caffeine-free infusions"
          )
          .get("img")
          .should("have.attr", "src")
          .should("include", "/static/media");
      });
  });

  it("Displays tea pages from nav bar", () => {
    cy.get("nav")
      .contains("a", "Herbal")
      .click()
      .url()
      .should("include", "herbal")
      .get(".card-cont")
      .should("have.length", "1")
      .get("img")
      .should("have.attr", "src")
      .should("include", "data:image")
      .get(".card-cont")
      .first()
      .contains("h3", "Satemwa Antlers")
      .get(".card-cont")
      .first()
      .contains(
        "p",
        "delicate sweetness of apricot and lychee lingers on the pallet"
      )
      .get("nav")
      .contains("a", "White")
      .click()
      .url()
      .should("include", "white")
      .get(".card-cont")
      .should("have.length", "1")
      .get("img")
      .should("have.attr", "src")
      .should("include", "data:image")
      .get(".card-cont")
      .first()
      .contains("h3", "Baihoi Yinzhen")
      .get(".card-cont")
      .first()
      .contains("p", "sweet, vegetal, and delicate")
      .get(".nav-favorites")
      .click()
      .url()
      .should("include", "favorites")
      .get("p")
      .contains("don't have any favorites")
      .get("a")
      .contains("Go Home");
  });

  it("Displays tea info pages", () => {
    cy.get(".article-tea")
      .first()
      .within(() => {
        cy.get("h2").contains("Black").get("a").contains("Education").click();
      })
      .url()
      .should("include", "http://localhost:3000/tea/black/education");
    cy.get("h1")
      .last()
      .contains("black")
      .get("section")
      .first()
      .contains("h2", "Summary")
      .get("section")
      .first()
      .contains("p", "Black tea is")
      .get("section")
      .last()
      .contains("h2", "Climate")
      .get("section")
      .last()
      .contains("p")
      .should(
        "have.text",
        "The climate plays a significant role in black tea production. Tea plants thrive in regions with moderate temperatures, high humidity, and consistent rainfall. Altitude also influences the flavor profile of black tea, with higher altitude teas often possessing more complex flavors."
      );
    cy.get(".link-wrapper")
      .contains("a")
      .click()
      .get("#home-article-green")
      .within(() => {
        cy.get("h2")
          .contains("Green")
          .get("a")
          .should("have.length", "2")
          .contains("Education")
          .click();
      })
      .url()
      .should("include", "http://localhost:3000/tea/green/education");
    cy.get("h1")
      .last()
      .contains("green")
      .get("section")
      .first()
      .contains("h2", "Summary")
      .get("section")
      .first()
      .contains("p", "Green tea is")
      .get("section")
      .last()
      .contains("h2", "Climate")
      .get("section")
      .last()
      .contains("p")
      .should(
        "have.text",
        "Green tea plants thrive in regions with moderate temperatures, high humidity, and consistent rainfall. The quality and flavor of green tea are influenced by factors such as terroir, altitude, and soil composition. For example, Japanese green teas like Sencha and Matcha are often grown in shaded conditions, which alters the flavor profile and increases the chlorophyll content in the leaves."
      );
    cy.get(".link-wrapper")
      .contains("a")
      .click()
      .url()
      .should("not.include", "/tea/green/education");
  });

  it("Displays tea pages from info article buttons", () => {
    cy.get(".article-tea")
      .first()
      .contains(".home-nav-link", "See Black teas →")
      .click()
      .get("h1")
      .click()
      .get(".article-tea")
      .last()
      .contains(".home-nav-link", "See Herbal teas →")
      .click();
  });

  it("Displays tea details on card click", () => {
    cy.get(".div-nav-center")
      .contains("a", "Herbal")
      .click()
      .get(".card-cont")
      .first()
      .should("have.id", "satemwaantlers-tea")
      .click()
      .get(".card-cont")
      .first()
      .get(".card-back-text")
      .first()
      .contains("10-25mg");
    cy.get(".div-nav-center")
      .contains("a", "Black")
      .click()
      .get(".card-cont")
      .last()
      .should("have.id", "dianhong-tea")
      .click()
      .get(".card-cont")
      .last()
      .within(() => {
        cy.get("dd").first().contains("20-40mg");
      });
    cy.get(".div-nav-center")
      .contains("a", "White")
      .click()
      .get(".card-cont")
      .last()
      .should("have.id", "baihoiyinzhen-tea")
      .click()
      .get(".card-cont")
      .last()
      .within(() => {
        cy.get("dd").first().contains("0-5mg");
      });
  });

  it("Adds and removes teas from Favorites list", () => {
    cy.get("nav")
      .contains("a", "White")
      .click()
      .get("#baihoiyinzhen-favorite.fav-btn")
      .click();
    cy.get(".nav-favorites")
      .click()
      .url()
      .should("include", "favorites")
      .get("h3")
      .contains("Baihoi Yinzhen")
      .get(".card-cont")
      .first()
      .contains("p", "sweet, vegetal, and delicate")
      .get("#baihoiyinzhen-unfavorite.fav-btn")
      .click()
      .should("not.exist")
      .get("p")
      .contains("don't have any favorites")
      .get("a")
      .contains("Go Home");
  });

  it("Searches for teas by name", () => {
    cy.get("nav")
      .contains("a", "All Teas")
      .click()
      .url()
      .should("contain", "/all")
      .get("input")
      .should("have.value", "")
      .get("input")
      .type("gr")
      .should("have.value", "gr")
      .get(".card-cont")
      .should("have.length", "1")
      .get("img")
      .should("have.attr", "src")
      .should("include", "data:image")
      .get(".card-cont")
      .first()
      .contains("h3", "Earl Grey")
      .get(".card-cont")
      .first()
      .contains(
        "p",
        "smoky, earthy, spicy, nutty, citrus, caramel, leather, fruity, and honey"
      );
  });

  it("Displays error message if api calls fail", () => {
    cy.intercept("GET", "https://spilled-api.onrender.com/teas", {
      statusCode: 400,
    })
      .as("getTeas")
      .visit("http://localhost:3000/")
      .get("nav")
      .contains("a", "Herbal")
      .click()
      .get("p")
      .contains("Failed to fetch tea data");
    cy.intercept("GET", "https://spilled-api.onrender.com/teas", {
      statusCode: 500,
    })
      .as("getTeas")
      .visit("http://localhost:3000/")
      .get("nav")
      .contains("a", "Black")
      .click()
      .get("p")
      .contains("Failed to fetch tea data");
  });

  it("Displays error message if visiting a bad path", () => {
    cy.visit("http://localhost:3000/teas/badpath")
      .get("#error-image")
      .should("have.attr", "src")
      .get("h1")
      .contains("Uh oh!")
      .get(".error-message")
      .contains("We couldn't find that page")
      .get(".home-link")
      .contains("Go back home")
      .click()
      .get("img")
      .should("have.attr", "src")
      .should("include", "data:image")
      .get("article")
      .first()
      .within(() => {
        cy.get("h2")
          .contains("Let's 'spill the tea' on tea!")
          .get("p")
          .contains("Did you know")
          .get(".creation-wrapper")
          .children()
          .should("have.length", "4")
          .get("img")
          .should("have.attr", "src")
          .should("include", "/static/media/teas");
      })
      .get("article")
      .last()
      .within(() => {
        cy.get("h2")
          .contains("Herbal")
          .get("p")
          .contains(
            "Herbal teas, made from a variety of dried herbs, spices, flowers, and fruits, are caffeine-free infusions"
          )
          .get("img")
          .should("have.attr", "src")
          .should("include", "/static/media/herbal");
      });
  });
});
