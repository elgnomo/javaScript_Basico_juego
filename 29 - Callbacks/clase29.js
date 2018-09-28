const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'


const darthVader = `${API_URL}${PEOPLE_URL.replace(':id', 4)}`
const opts = {
    crossDomain: true
}

const onPeopleResponse = function (persona) {
    console.log(`Hola yo soy, ${persona.name}`)
}

$.get(darthVader, opts, onPeopleResponse)