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
    //test main secion content - we need to add classes to some elements
    //to make them easier to access    
  })
  it('Displays tea pages from nav bar', () => {
    cy.get('nav').contains('a', 'Blends').click()
    // .url().should('eq', '')
    //check url
    .get('nav').contains('a', 'White').click()
    //check url
    .get('.nav-favorites').click()
    //check url
    //add assertion to test empty favorites page

  })
  it('Displays tea pages from info article buttons', () => {
    cy.get('.article-tea').first().contains('button', 'See Black teas →').click()
    .get('h1').click()
    .get('.article-tea').last().contains('button', 'See tea blends →').click()
  })
  it('Adds and removes teas from Favorites list', () => {
    //simulate click of a fav button
    //click favs nav button
    //check for added fav
    //simulate fav button click
    //check that favs page is empty
  })
  it('Displays error message if api call fails', () => {
    
  })

})