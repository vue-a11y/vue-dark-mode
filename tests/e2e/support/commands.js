// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

let LOCAL_STORAGE_MEMORY = {}

Cypress.Commands.add('saveLocalStorageCache', () => {
  Object.keys(localStorage).forEach(key => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key]
  })
})

Cypress.Commands.add('restoreLocalStorageCache', () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key])
  })
})

Cypress.Commands.add('clearLocalStorageCache', () => {
  localStorage.clear()
  LOCAL_STORAGE_MEMORY = {}
})

Cypress.Commands.add('getColorModeButton', () => {
  cy.get('[data-cy="color-mode-button"')
})

Cypress.Commands.add('getColorModeButtonIsVisible', () => {
  cy.getColorModeButton().should('be.visible')
})

Cypress.Commands.add('getCurrentColorMode', () => {
  cy.getColorModeButton().get('[data-cy="color-mode"]').invoke('text')
})

Cypress.Commands.add('getColorModeClassName', () => {
  cy.document().then((doc) => doc.documentElement.className)
})

Cypress.Commands.add('getLocalStorage', (key) => {
  cy.window().then((window) => window.localStorage.getItem(key))
})

Cypress.Commands.add('toggleColorMode', () => {
  cy.getColorModeButton().click()
})

Cypress.Commands.add('checkColorModeStorage', (storage, key, token) => {
  cy.window()
    .its(`${storage}.${key}`)
    .should('eq', token)
})
