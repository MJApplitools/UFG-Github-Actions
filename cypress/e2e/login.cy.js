describe('ACME Bank', () => {
    beforeEach(() => {
        cy.eyesOpen({
            appName: 'ACME Bank',
            testName: 'Bank - Functional Test',
			browser: [
				{width: 800, height: 600, name: 'chrome'},
				{width: 1600, height: 1200, name: 'firefox'},
				{width: 1024, height: 768, name: 'safari'},
				{deviceName: 'Pixel 2', screenOrientation: 'portrait'},
				{deviceName: 'Nexus 10', screenOrientation: 'landscape'},
			]
        })
    })
    it('should log into a bank account', () => {

        // Load the login page.
        cy.visit('/');

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
            fully: true,
			layout: [
                {selector: '.dashboardOverview_accountBalances__3TUPB'},
                {selector: '.dashboardTable_dbTable___R5Du'}
            ]
        });
    })

    // This method performs cleanup after each test.
    afterEach(() => {
        
        // Close Eyes to tell the server it should display the results.
        cy.eyesClose()
    })
})