import { fixturesPath } from '../../constants'

describe('Test the content of the landing', () => {

  beforeEach( () => {
    cy.visit('https://jsheroes.io')
    cy.readFile(`${fixturesPath}/landingContent.json`).then( json => {
      console.log('json file', json)
      const { title } = json
      cy.title().should('eq', title)
    })
  })

  it('Check if the logo text is correct', () => {
    cy.get('.logoJs')
      .should('be.visible')
      .and('have.text', 'JSdsasa')
    cy.get('.logoHeroes').should('be.visible').and('have.text', 'Heroes')
  })

  it('click buy button ', () => {
    cy.get('.header-btn').click()

  })
})

