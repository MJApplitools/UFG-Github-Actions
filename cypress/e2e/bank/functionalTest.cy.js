describe('ACME Bank', () => {
    beforeEach(() => {
        cy.eyesOpen({
            appName: 'ACME Bank',
            testName: 'Bank - Functional Test'
        })
    })
    it('should log into a bank account', () => {

        // Load the login page.
        cy.visit('http://localhost:3000/bank?validateForm=true');

        // Verify the full login page loaded correctly.
        cy.eyesCheckWindow({
            tag: "Login page loaded",
            target: 'window',
            fully: true
        });

        cy.get('#log-in').click();
        cy.eyesCheckWindow({
            tag: "Error shown - missing username & password",
            target: 'window',
            fully: true
        });

        cy.get('#username').type('user');
        cy.get('#log-in').click();
        cy.eyesCheckWindow({
            tag: "Error shown - missing password",
            target: 'window',
            fully: true
        });

        cy.get('#username').clear();
        cy.get('#password').type('password')
        cy.get('#log-in').click();
        cy.eyesCheckWindow({
            tag: "Error shown - missing username",
            target: 'window',
            fully: true
        });

        cy.get('#username').type('user');
        cy.get('#log-in').click();
        
        cy.eyesCheckWindow({
            tag: "Login Success",
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