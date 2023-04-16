// @ts-ignore
import {mount} from 'cypress-angular-unit-test';
import {LoginComponent} from './login.component';

describe('LoginComponent', () => {
    beforeEach(() => {
        mount(LoginComponent);
    });

    it('renders the login form', () => {
        cy.get('form').should('exists');
        cy.get('input[type="email"]').should('exists');
        cy.get('input[type="password"]').should('exists');
        cy.get('button[type="submit"]').should('exists');
    });

    it('submits the login form', () => {
        const email = 'test@exmaple.com'
        const password = '123456';

        cy.get('input[type="email"]').type(email);
        cy.get('input[type="password"]').type(password);
        cy.get('button[type="submit"]').click();

        cy.window().then((win) => {
            expect(win.console.log).to.be.calledWith('email: ', email);
            expect(win.console.log).to.be.calledWith('password', password);
        });
    });
});
ga
