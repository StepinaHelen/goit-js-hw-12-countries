// HTTP запросы 

function fetchCountries(seachQuery) {
    let url= 'https://restcountries.eu/rest/v2/name/'
    return fetch(`${url}${seachQuery}`).then(response => response.json()).catch(error => console.log(error));
}

export default fetchCountries;

