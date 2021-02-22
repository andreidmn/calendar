import './utils'

it('Visits the Login', () => {
    cy
        .visit('http://localhost:8080/login')
        .get('#username')
        .type('andrei.doman@yahoo.com')
        .get('#password')
        .type('1234')
        .get('[cypress="button"]').click()
        .wait(500)

})



it('add new event', ()=>{
    cy
        .get('[cypress="newEvent"]').click()
        .get('#name')
        .type('test')
        .get('#details')
        .type('test')
        .get('.vdp-datepicker input:nth-child(1)').click()
        .get(':nth-child(34)').click()
        .get('#time')
        .type('test')
        .get('#url')
        .type('test')
        .get('[cypress="button"]').click()
})

it('edit-event', ()=>{
    cy
        .get('[cypress="editEvent"]').eq(0).click()   /*????*/
        .get('#name')
        .type('test')
        .get('#details')
        .type('test')
        .get('.vdp-datepicker input:nth-child(1)').click()
        .get(':nth-child(34)').click()
        .get('#time')
        .type('test')
        .get('#url')
        .type('test')
        .get('[cypress="button"]').click()

})

it('delete-event', ()=> {
    cy
        .wait(2000)
        .get('[cypress="editEvent"]').eq(1).click()
        .get('[cypress="deleteEvent"]').click()
})
it('logout', ()=> {

    cy.get('[cypress="logout"]').click()
        .wait(1000)
})
