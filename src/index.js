import './styles.css';
import fetchCountries from './js/fetchCountries.js'
import updateCountriesMarcup from './js/update-marcup-country'

var debounce = require('lodash.debounce');

// import { success } from "@pnotify/core";
import { info } from "@pnotify/core";
import { error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
// import * as Confirm from "@pnotify/confirm";
import "@pnotify/confirm/dist/PNotifyConfirm.css";

const refs = {
    countryContainer: document.querySelector('.js-country'),
    searchCountry: document.querySelector('.js-input')
}

refs.searchCountry.addEventListener('input', debounce(searchCountryHandler, 500))

function searchCountryHandler(event) {
  event.preventDefault()
    const inputValue = event.target.value;
    // console.log(event.target.value);

     conditions(inputValue)

}


function conditions(inputCountry) {
 if (inputCountry.length > 0) {
        //сбрасываем содержимое контейнера
        refs.countryContainer.innerHTML = "";

        // получаем promise
        fetchCountries(inputCountry).then(data => {

            if (data.length > 10) {

                error({
                    text: 'Too many matches found. Please enter a more specific query!'
                });
            
            }
            else if (data.length <= 10 && data.length >= 2) {
                
                const countries = data.map(country =>
                    `<li class="list-items">${country.name}</li>`
                );
                const country = countries.join(" ")
               
                refs.countryContainer.innerHTML = country;
                // console.log(countries);
     
            }
            else if (data.length === 1) {
                (updateCountriesMarcup(data))
            }
            else {
                error({
                    text: 'Please enter a valid country name! '
                });
            }
     
        })
    }
}
