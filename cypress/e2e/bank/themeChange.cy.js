describe('ACME Bank', () => {
    beforeEach(() => {
        cy.eyesOpen({
            appName: 'ACME Bank',
            testName: 'Bank - Theme Change'
        })
    })
    it('should log into a bank account', () => {

        // Load the login page.
        cy.visit('localhost:3000/bank?theme=true')

        // Verify the full login page loaded correctly.
        cy.eyesCheckWindow({
            tag: "Login page",
            target: 'window',
            fully: true
        });

        // Perform login.
        cy.get('#username').type('user')
        cy.get('#password').type('password')
        cy.get('#log-in').click()
        
        cy.eyesCheckWindow({
            tag: "Dashboard",
            target: 'window',
            fully: true
        });
    })

    // This method performs cleanup after each test.
    afterEach(() => {
        
        // Close Eyes to tell the server it should display the results.
        cy.eyesClose()
    })
})