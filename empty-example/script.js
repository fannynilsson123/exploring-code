
fetch('https://api.covid19api.com/summary')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        document.getElementById('countries').innerHTML = data.Countries.map(country => { return country.Country });

        console.log(data);
    });