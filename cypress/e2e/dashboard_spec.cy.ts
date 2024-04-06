describe('Spilled', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://boonakitea.cyclic.app/api/all', {
      statusCode: 200,
      fixture: 'test_teas'
    }).as('getTeas')
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
      cy.get('h2').contains('Home')
      .get('p').contains('Lorem ipsum')
      .get('img').should('have.attr', 'src').should('include', '/static/media/teas')
    })
    .get('article').last().within(() => {
      cy.get('h2').contains('Blends')
      .get('p').contains('Lorem ipsum')
      .get('img').should('have.attr', 'src').should('include', '/static/media/teas')
    })
    //test main secion content - we need to add classes to some elements
    //to make them easier to access    
  })

  it('Displays tea pages from nav bar', () => {
    cy.get('nav').contains('a', 'Blends').click()
    .url().should('include', 'blend')
    //check content on page
    .get('nav').contains('a', 'White').click()
    .url().should('include', 'white')
    //check content on page
    .get('.nav-favorites').click()
    .url().should('include', 'favorites')
    //check that empty favorites page displays message

  })

  it('Displays tea pages from info article buttons', () => {
    cy.get('.article-tea').first().contains('button', 'See Black teas →').click()
    .get('h1').click()
    .get('.article-tea').last().contains('button', 'See tea blends →').click()
  })

  it('Adds and removes teas from Favorites list', () => {
    cy.get('nav').contains('a', 'White').click()
    .get('div.card').first().within(() => {
      cy.get('h3').contains('Baihoi Yinzhen')
      .get('button').contains('Fav').click()
    })
    //add assertions for new tea details
    cy.get('.nav-favorites').click()
    .url().should('include', 'favorites')
    .get('div.card').within(() => {
      cy.get('h3').contains('Baihoi Yinzhen')
      .get('button').click()
    }).should('not.exist')
    //check that favs page is empty and displays message
    
  })
//   it('Displays error message if api call fails', () => {
//     cy.intercept('GET', 'https://boonakitea.cyclic.app/api/all', {
//       statusCode: 400,
//     }).as('getTeas')
//     .visit('http://localhost:3000/')
//     .get('nav').contains('a', 'Blends').click()
//     // test error page content
//     //stub 500 statusCode
//     //test error page content
//   })

})