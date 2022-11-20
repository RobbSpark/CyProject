describe("Log in", function(){
    it("Sing in", function(){
        cy.visit("https://unsplash.com/")
        cy.contains("Log in").click()
        cy.get("input[id='user_email']").type("tvlol@mail.ru")
        cy.get("input[id='user_password']").type("1234-qwer")
        cy.get("input[type='submit']").click()

    })
})