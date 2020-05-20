describe('Aria label', () => {
  before(() => {
    cy.visit('/')
  })

  it('Button color mode must be visible', () => {
    cy.getColorModeButtonIsVisible()
  })

  it('Current color mode must be "light"', () => {
    cy.getCurrentColorMode()
      .should('contain', 'light')
  })

  it('Must have the aria-label attribute and contain text for the "dark" color mode', () => {
    cy.getColorModeButton()
      .should('have.attr', 'aria-label', 'toggle to dark mode color')
  })

  it('Button color mode must be clicked', () => {
    cy.toggleColorMode()
  })

  it('Current color mode must be "dark"', () => {
    cy.getCurrentColorMode()
      .should('contain', 'dark')
  })

  it('Must have the aria-label attribute and contain text for the "system" color mode', () => {
    cy.getColorModeButton()
      .should('have.attr', 'aria-label', 'toggle to system mode color')
  })
})

describe('Aria live regions', () => {
  before(() => {
    cy.visit('/')
  })

  it('Button color mode must be visible', () => {
    cy.getColorModeButtonIsVisible()
  })

  it('Current color mode must be "light"', () => {
    cy.getCurrentColorMode()
      .should('contain', 'light')
  })

  it('There must be an element with aria-live', () => {
    cy.getColorModeButton()
      .get('span[aria-live]')
  })

  it('The element with aria-live must contain "light" in the announced text', () => {
    cy.getColorModeButton()
      .get('span[aria-live]')
      .invoke('text')
      .should('eq', 'light color mode is enabled')
  })

  it('Button color mode must be clicked', () => {
    cy.toggleColorMode()
  })

  it('The element with aria-live must contain "dark" in the announced text', () => {
    cy.getColorModeButton()
      .get('span[aria-live]')
      .invoke('text')
      .should('eq', 'dark color mode is enabled')
  })
})
