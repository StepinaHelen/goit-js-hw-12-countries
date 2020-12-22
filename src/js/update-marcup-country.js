// Разметка

import country from '../templates/template.hbs'
const refs = {
    countryContainer: document.querySelector('.js-country'),
}

function updateCountriesMarcup(countries) {
const marcup = country(countries)
    refs.countryContainer.insertAdjacentHTML("beforeend", marcup);
}

export default updateCountriesMarcup;


// function updateCountriesMarcup (countries) {
// const marcup = country(countries)
//     refs.countryContainer.insertAdjacentHTML("beforeend", marcup);
// }