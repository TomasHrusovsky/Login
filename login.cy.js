describe('Dobrovolne zadanie', () => {
  it('login_pouzivatela', () => {

    cy.viewport(1440, 1200)
    cy.visit('https://curaprox.sk/')
    cy.setCookie('cookieconsent', 'def50200a74a3c3f81bbd1abdf4d35357e01be51c0c0ff20ec1ba4f4fd9f66d8d2b6ff8ebb0bb83a74ad5c6d4bf6b7e2c187fe4d0dd31ec5929a7dc9d60e79ba36f5df5a9877736760f5bb5945bcbf2e83c5545a20dc7b4f8a9d41164edf4c4f9a50971e775c82714a5808ad8f37d9259f6d47aedcc8a5053b442cff34e557cc11f9b6c9f9b8fe05db80b1bac4abd24538f1f9df5a85d9e2234b6bb1192ad4f9ce618366227e6673e741232daceda536f1de2b02159b212d1c5e2fb1963808e8074703b01af74ed071f1660669a2e85708216b71c052784121902bc7aa8fa0974c60ecee83a1f65bf0a436fbeb34e9c685afb79f845ae7495459c51afa074d3e4efded1737ffd09bb366622085947fdacf9bf48df7474506abc4d9dd8a3ca293be7d0f315662bb987e14649a320ae443dde2c2e78dbe987a7da6b774686f03f595b782b9f3c0fa09a6cdc764c743ab52657c9ec96130e42658ebc430637886c3bbc10f470d579b04e72bd6f0be5014d002964f873f7be7')
    cy.reload()
    cy.contains('Prihlásiť sa').click()
    
    cy.get('input[type="email"]').type('tomashrusovsky01@gmail.com')
    cy.get('input[type="password').type('123*Heslo321')
    cy.get('button').contains('Log in').click()

  })
})