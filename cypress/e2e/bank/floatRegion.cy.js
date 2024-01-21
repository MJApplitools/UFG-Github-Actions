describe('ACME Bank', () => {
    beforeEach(() => {
        cy.eyesOpen({
            appName: 'ACME Bank',
            testName: 'Bank - Float Region'
        })
    })
    it('should log into a bank account', () => {

        // Load the login page.
        cy.visit('localhost:3000/bank?floatRegion=true');

        // Verify the full login page loaded correctly.
        cy.eyesCheckWindow({
            tag: "No Float",
            target: 'window',
            fully: true
        });

        cy.get("*[data-id='login-logo']").then($el => {
            cy.eyesCheckWindow({
                tag: "With Float",
                target: 'window',
                fully: true,
                floating: [
                    {element: $el, maxUpOffset: 10, maxDownOffset: 10, maxLeftOffset: 100, maxRightOffset: 100},
                ]
            })
        })
    })

    // This method performs cleanup after each test.
    afterEach(() => {
        
        // Close Eyes to tell the server it should display the results.
        cy.eyesClose()
    })
})