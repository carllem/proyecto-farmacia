function getAllRequest() {
  axios.get('https://covid-api.mmediagroup.fr/v1/cases')
    .then(function (response) {
      console.log(response);

      console.log(response.data.Colombia.All.country);
      alert(response.data.Colombia.All.country);
    })
    .catch(function (error) {
      console.log(error);
    });
}


function getByCountryRequest() {
  pais = document.getElementById("txtpais").value;
  axios.get('https://covid-api.mmediagroup.fr/v1/cases?country=' + pais)
    .then(function (response) {
      console.log(response);

      console.log('Casos confirmados: ' + response.data.All.confirmed);
      console.log('Personas recuperadas: ' + response.data.All.recovered);
      console.log('Muertes: ' + response.data.All.deaths);
      alert('Casos confirmados: ' + response.data.All.confirmed);
      alert('Personas recuperadas: ' + response.data.All.recovered);
      alert('Muertes: ' + response.data.All.deaths);
    })
    .catch(function (error) {
      console.log(error);
    });
}


function getByAbCountryRequest() {
  ab = document.getElementById("txtabr").value;
  axios.get('https://covid-api.mmediagroup.fr/v1/cases?ab=' + ab)
    .then(function (response) {
      console.log(response);

      console.log('Casos confirmados: ' + response.data.All.confirmed);
      console.log('Personas recuperadas: ' + response.data.All.recovered);
      console.log('Muertes: ' + response.data.All.deaths);
      alert('Casos confirmados: ' + response.data.All.confirmed);
      alert('Personas recuperadas: ' + response.data.All.recovered);
      alert('Muertes: ' + response.data.All.deaths);
    })
    .catch(function (error) {
      console.log(error);
    });
}


function getByCountryVaccinesRequest() {
  vaccines_country = document.getElementById("txtvacunas").value;
  axios.get('https://covid-api.mmediagroup.fr/v1/vaccines?country=' + vaccines_country)
    .then(function (response) {
      console.log(response);

      console.log('Personas vacunadas: ' + response.data.All.people_vaccinated);
      console.log('Personas parcialmente vacunadas: ' + response.data.All.people_partially_vaccinated);
      console.log('Personas vacunadas: ' + response.data.All.updated);
      alert('Personas vacunadas: ' + response.data.All.people_vaccinated);
      alert('Personas parcialmente vacunadas: ' + response.data.All.people_partially_vaccinated);
      alert('Fecha del último registro: ' + response.data.All.updated);
    })
    .catch(function (error) {
      console.log(error);
    });
}