it('Visits the Login', () => {
    cy
        .visit('http://localhost:8080/login')
        .get('#username')
        .type('andrei.doman@yahoo.com')
        .get('#password')
        .type('1234')
        .get('button').click()
        .wait(500)
})

it('control DOM elements', () => {
    cy
        .get('[cypress="monthDay"]').click({ multiple: true })
        .get('[cypress="clearEvents"]').click()
        .get('[cypress="filteredEvents"]')
        .type('test').clear()
        .get('[cypress="nextMonth"]').click()
        .get('[cypress="prevMonth"]').click()
})