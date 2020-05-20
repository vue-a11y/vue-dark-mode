describe('Dark mode toggle class', () => {
  before(() => {
    cy.visit('/')
  })

  it('Button color mode must be visible', () => {
    cy.getColorModeButtonIsVisible()
  })

  it('Class name must contain "light" color mode', () => {
    cy.getColorModeClassName().should('contain', 'light')
  })

  it('Current color mode must be "light"', () => {
    cy.getCurrentColorMode().should('contain', 'light')
  })

  it('Button color mode must be clicked', () => {
    cy.toggleColorMode()
  })

  it('Class name must contain "dark" color mode', () => {
    cy.getColorModeClassName().should('contain', 'dark')
  })

  it('Current color mode must be "dark"', () => {
    cy.getCurrentColorMode().should('contain', 'dark')
  })
})
