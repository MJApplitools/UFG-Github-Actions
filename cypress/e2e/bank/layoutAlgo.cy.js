describe('ACME Bank', () => {
    beforeEach(() => {
        cy.eyesOpen({
            appName: 'ACME Bank',
            testName: 'Bank - Layout',
        })
    })
    it('should log into a bank account', () => {

        // Load the login page.
        cy.visit('http://localhost:3000/bank/dashboard?layoutAlgo=true');

        cy.eyesCheckWindow({
            tag: "Strict Test",
            target: 'window',
            matchLevel: 'Strict',
            fully: true
        });

        cy.eyesCheckWindow({
            tag: "Layout Test",
            target: 'window',
            matchLevel: 'Layout',
            fully: true
        });

        cy.eyesCheckWindow({
            tag: "Layout Test - Enhanced",
            target: 'window',
            matchLevel: 'Layout',
            enablePatterns: true,
            useDom: true,
            fully: true
        });
    })

    // This method performs cleanup after each test.
    afterEach(() => {
        
        // Close Eyes to tell the server it should display the results.
        cy.eyesClose()
    })
})