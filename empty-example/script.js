fetch('https://api.covid19api.com/summary')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let array = [];
        array.push(data)


        console.log(array);
    });