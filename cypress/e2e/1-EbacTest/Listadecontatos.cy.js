/// <reference types="cypress" />

    describe('testes para o exercício', ()=>{
        beforeEach(()=>{
            cy.visit('https://agenda-contatos-react.vercel.app/')
        })
        it('teste inclusão',()=>{
            cy.get("input[type='text']").type('Nome Teste')
            cy.get("input[type='email']").type('email@emailteste.co')
            cy.get("input[type='tel']").type('11 1231 54321')
            cy.get("button[type='submit']").click()
            cy.get('.contato').should('have.length',4)                      
        })
        it('teste exclusão',()=>{
            let count= cy.get('.contato').its('length')
            cy.get('.delete').first().click()
            cy.get('.contato').should('have.length',3)  

        })
        it('teste edição',()=>{
            cy.get('.edit').first().click()
            cy.get("input[type='text']").type('Nome Teste')
            cy.get('.alterar').click()
            cy.get('.cTVgex >li').first().should('contain.text','Nome Teste')
            

        })
    })