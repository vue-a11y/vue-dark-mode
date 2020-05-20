describe('Dark mode storage', () => {
  before(() => {
    cy.visit('/')
  })

  beforeEach(() => {
    cy.restoreLocalStorageCache()
  })

  afterEach(() => {
    cy.saveLocalStorageCache()
  })

  it('Button color mode must be visible', () => {
    cy.getColorModeButtonIsVisible()
  })

  it('Current color mode must be "light"', () => {
    cy.getCurrentColorMode().should('contain', 'light')
  })

  it('the color mode "light" must contain in localStorage by key "colorMode"', () => {
    cy.getLocalStorage('colorMode').should('contain', 'light')
  })

  it('Button color mode must be clicked', () => {
    cy.toggleColorMode()
  })

  it('the color mode "dark" must contain in localStorage by key "colorMode"', () => {
    cy.getLocalStorage('colorMode').should('contain', 'dark')
  })
})
