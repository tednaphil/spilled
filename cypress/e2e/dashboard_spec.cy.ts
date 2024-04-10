describe('Spilled', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://boonakitea.cyclic.app/api/all', {
      statusCode: 200,
      fixture: 'test_teas'
    }).as('getTeas')
    cy.intercept('GET', 'https://boonakitea.cyclic.app/api/teas/earlgrey', {
      statusCode: 200,
      fixture: 'single_tea'
    }).as('getEarlGrey')
    cy.intercept('GET', 'https://boonakitea.cyclic.app/api/teas/englishbreakfast', {
      statusCode: 200,
      fixture: 'englishbreakfast'
    }).as('getEnglishbreakfast')
    cy.intercept('GET', 'https://boonakitea.cyclic.app/api/teas/baihoiyinzhen', {
      statusCode: 200,
      fixture: 'baihoiyinzhen'
    }).as('getBaihoiyinzhen')
    cy.intercept('GET', 'https://boonakitea.cyclic.app/api/teas/satemwaantlers', {
      statusCode: 200,
      fixture: 'satemwaantlers'
    }).as('getSatemwaantlers')
      .visit('http://localhost:3000/')
  })

  it('Displays landing page', () => {
    cy.get('h1').contains('Spilled')
      .get('nav').children().should('have.length', 3)
      .get('.div-nav-center').children().should('have.length', 5)
      .get('.div-nav-center').contains('a', 'Blends')
      .get('.div-nav-center').contains('a', 'Black')
      .get('.div-nav-center').contains('a', 'Green')
      .get('.div-nav-center').contains('a', 'Oolong')
      .get('.div-nav-center').contains('a', 'White')
      .get('img').should('have.attr', 'src').should('include', 'data:image')
      .get('article').first().within(() => {
        cy.get('h2').contains('Let\'s \'spill the tea\' on tea!')
          .get('p').contains('Did you know')
          .get('ol').children().should('have.length', '4')
          .get('img').should('have.attr', 'src').should('include', '/static/media/teas')
      })
      .get('article').last().within(() => {
        cy.get('h2').contains('Blends')
          .get('p').contains('Blends can be made up of any tea base!')
          .get('img').should('have.attr', 'src').should('include', '/static/media/teas')
      })
    //test main secion content - we may need to add classes to some elements
    //to make them easier to access    
  })

  it('Displays tea pages from nav bar', () => {
    cy.get('nav').contains('a', 'Blends').click()
      .url().should('include', 'blend')
      .get('.card-cont').should('have.length', '2')
      .get('img').should('have.attr', 'src').should('include', 'data:image')
      .get('.card-cont').first().contains('h3', 'Earl Grey')
      //check content on page
      .get('nav').contains('a', 'White').click()
      .url().should('include', 'white')
      .get('.card-cont').should('have.length', '2')
      .get('img').should('have.attr', 'src').should('include', 'data:image')
      .get('.card-cont').first().contains('h3', 'Baihoi Yinzhen')
      //check content on page
      .get('.nav-favorites').click()
      .url().should('include', 'favorites')
      .get('p').contains('don\'t have any favorites')
      .get('a').contains('Go Home')
    //check that empty favorites page displays message

  })

  it('Displays tea info pages', () => {
    //Test black education
    cy.get('#home-article-black').within(() => {
      cy.get('h2').contains('Black')
        .get('a').contains('Education').click()
    })
      .url().should('include', 'http://localhost:3000/tea/black/education')
    cy.get('h1').last().contains('black') //does not sense capital because it is a CSS feature
      .get('section').first().contains('h2', 'Summary')
      .get('section').first().contains('p', 'Black tea is')
      .get('section').last().contains('h2', 'Climate')
      .get('section').last().contains('p').should('have.text', 'The climate plays a significant role in black tea production. Tea plants thrive in regions with moderate temperatures, high humidity, and consistent rainfall. Altitude also influences the flavor profile of black tea, with higher altitude teas often possessing more complex flavors.')
    cy.get('.link-wrapper').contains('a').click()
      // test green education
      .get('#home-article-green').within(() => {
        cy.get('h2').contains('Green')
          .get('a').should('have.length', '2').contains('Education').click()
      })
      .url().should('include', 'http://localhost:3000/tea/green/education')
    cy.get('h1').last().contains('green') //does not sense capital because it is a CSS feature
      .get('section').first().contains('h2', 'Summary')
      .get('section').first().contains('p', 'Green tea is')
      .get('section').last().contains('h2', 'Climate')
      .get('section').last().contains('p').should('have.text', 'Green tea plants thrive in regions with moderate temperatures, high humidity, and consistent rainfall. The quality and flavor of green tea are influenced by factors such as terroir, altitude, and soil composition. For example, Japanese green teas like Sencha and Matcha are often grown in shaded conditions, which alters the flavor profile and increases the chlorophyll content in the leaves.')
    cy.get('.link-wrapper').contains('a').click()
      .url().should('not.include', '/tea/green/education')
  })

  it('Displays tea pages from info article buttons', () => {
    cy.get('.article-tea').first().contains('.home-nav-link', 'See Black teas →').click()
      .get('h1').click()
      .get('.article-tea').last().contains('.home-nav-link', 'See tea blends →').click()
  })

  it('Displays tea details on card click', () => {
    //tests first blends tea card
    cy.get('.div-nav-center').contains('a', 'Blends').click()
      .get('.card-cont').first().should('have.id', 'earlgrey-tea').click()
      .get('.card-cont').first().get('.card-back-text').first().contains('40-')
    //last blends tea card
    cy.get('.div-nav-center').contains('a', 'Blends').click()
      .get('.card-cont').last().should('have.id', 'englishbreakfast-tea').click()
      .get('.card-cont').last().within(() => {
        cy.get('dd').first().contains('60-')
      })
    //first white tea card
    cy.get('.div-nav-center').contains('a', 'White').click()
      .get('.card-cont').first().should('have.id', 'baihoiyinzhen-tea').click()
      .get('.card-cont').first().within(() => {
        cy.get('dd').first().contains('0-5mg')
      })
    //last white tea card
    cy.get('.div-nav-center').contains('a', 'White').click()
      .get('.card-cont').last().should('have.id', 'satemwaantlers-tea').click()
      .get('.card-cont').last().within(() => {
        cy.get('dd').first().contains('10-25mg')
      })
  })

  it('Adds and removes teas from Favorites list', () => {
    cy.get('nav').contains('a', 'White').click()
      .get('#baihoiyinzhen-favorite.fav-btn').click()
    cy.get('.nav-favorites').click()
      .url().should('include', 'favorites')
      .get('h3').contains('Baihoi Yinzhen')
      //addassertions for tea details
      .get('#baihoiyinzhen-unfavorite.fav-btn').click()
      .should('not.exist')
    //check that favs page is empty and displays message

  })

  it('Displays error message if api calls fail', () => {
    cy.intercept('GET', 'https://boonakitea.cyclic.app/api/all', {
      statusCode: 400,
    }).as('getTeas')
      .visit('http://localhost:3000/')
      .get('nav').contains('a', 'Blends').click()
      .get('p').contains('Failed to fetch tea data')
    cy.intercept('GET', 'https://boonakitea.cyclic.app/api/all', {
      statusCode: 500,
    }).as('getTeas')
      .visit('http://localhost:3000/')
      .get('nav').contains('a', 'Black').click()
      .get('p').contains('Failed to fetch tea data')
  })

  it('Displays error message if visiting a bad path', () => {
    cy.intercept('GET', 'https://boonakitea.cyclic.app/api/all', {
      statusCode: 404,
    }).as('getTeas')
    cy.visit('http://localhost:3000/teas/badpath')
    //check content and url
  })
})