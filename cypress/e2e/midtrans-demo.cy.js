/// <reference types="cypress-iframe" />
/// <reference types="cypress" />
import 'cypress-iframe'
import { faker } from '@faker-js/faker';


describe('template spec', () => {
	before(() => {
		cy.visit('https://demo.midtrans.com/');
	});

	it('Successfully checkout and paid', () => {
		
		cy.get('.buy').should('be.visible').click();
		cy.get('[data-reactid=".0.0.1.0.3.0.0.0.1.0"]').should('be.visible').clear().type(faker.name.fullName());
		cy.get('[data-reactid=".0.0.1.0.3.0.0.1.1.0"]').should('be.visible').clear().type(faker.internet.email());
		cy.get('[data-reactid=".0.0.1.0.3.0.0.2.1.0"]').should('be.visible').clear().type(faker.phone.number('08##########'));
		cy.get('[data-reactid=".0.0.1.0.3.0.0.3.1.0"]').should('be.visible').clear().type(faker.address.cityName());
		cy.get('[data-reactid=".0.0.1.0.3.0.0.4.1.0"]').should('be.visible').clear().type(faker.address.streetAddress());
		cy.get('[data-reactid=".0.0.1.0.3.0.0.5.1.0"]').should('be.visible').clear().type(faker.address.zipCode('#####'));
		cy.get('[data-reactid=".0.0.1.1.0"').should('be.visible').click();
		cy.frameLoaded('#snap-midtrans');
		cy.iframe().find('a[href="#/credit-card"]').should('be.visible').click();
		cy.iframe().find('.card-number-input-container > input').should('be.visible').type('4556557955726624');
		cy.iframe().find('#card-expiry').type('1230');
		cy.iframe().find('#card-cvv').type('123');
		cy.iframe().find('.card-pay-button-part > button').click();
		cy.get('[data-reactid=".0.0.0.2.0.1.0.0:0"]').contains('Thank you for your purchase.');
		cy.get('[data-reactid=".0.0.0.2.0.1.0.0:2"]').contains('Get a nice sleep.');
	});
});
