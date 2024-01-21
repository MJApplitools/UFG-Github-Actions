describe('ACME Bank', () => {
    beforeEach(() => {
        cy.eyesOpen({
            appName: 'ACME Bank',
            testName: 'Bank - Layout Breakpoints',
            browser: [
                {width: 700, height: 1000, name: 'chrome'},
                {width: 1600, height: 768, name: 'chrome'},
                { deviceName: 'iPhone XR'},
            ]
        })
    })
    it('should log into a bank account', () => {

        // Load the login page.
        cy.visit('http://localhost:3000/bank?layoutBreakpoints=true')

        // Verify the full login page loaded correctly.
        cy.eyesCheckWindow({
            tag: "Login page - no breakpoints",
            target: 'window',
            fully: true
        });
        cy.eyesCheckWindow({
            tag: "Login page - breakpoints",
            target: 'window',
            layoutBreakpoints: true,
            fully: true
        });

        // Perform login.
        cy.get('#username').type('user')
        cy.get('#password').type('password')
        cy.get('#log-in').click()
        
        cy.eyesCheckWindow({
            tag: "Dashboard - no breakpoints",
            target: 'window',
            fully: true
        });
        cy.eyesCheckWindow({
            tag: "Dashboard - breakpoints",
            target: 'window',
            fully: true,
            layoutBreakpoints: true
        });
    })

    // This method performs cleanup after each test.
    afterEach(() => {
        
        // Close Eyes to tell the server it should display the results.
        cy.eyesClose()
    })
})