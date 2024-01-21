describe('ACME Bank', () => {
    beforeEach(() => {
        cy.eyesOpen({
            appName: 'ACME Bank',
            testName: 'Bank - Ignore Displacements',
            batch: 'Bank - Ignore Displacement Tests'
        })
    })
    it('capture login page', () => {

        // Load the login page.
        cy.visit('http://localhost:3000/bank?ignoreDisplacements=true');

        cy.eyesCheckWindow({
            tag: "Without Ignore Displacements",
            target: 'window',
            fully: true
        });

        // Verify the full login page loaded correctly.
        cy.eyesCheckWindow({
            tag: "With Ignore Displacements",
            target: 'window',
            ignoreDisplacements: true,
            fully: true
        });
    })

    // This method performs cleanup after each test.
    afterEach(() => {
        
        // Close Eyes to tell the server it should display the results.
        cy.eyesClose()
    })
})