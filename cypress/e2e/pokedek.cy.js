describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000', { timeout: 600000000 })
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('front page can be navigated', function() {
    cy.visit('http://localhost:5000', { timeout: 600000000 })
    cy.contains('butterfree').click()
    cy.contains('tinted lens')
  })
})