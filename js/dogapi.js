function getAllRequest() {
  axios.get('https://dog.ceo/api/breeds/list/all')
    .then(function (response) {
      console.log(response);

      console.log(response.data.status);
      alert(response.data.status);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function getRandomRequest() {
  axios.get('https://dog.ceo/api/breeds/image/random')
    .then(function (response) {
      console.log(response);

      console.log(response.data.status);
      alert(response.data.status);
    })
    .catch(function (error) {
      console.log(error);
    });
}


function getByMRadomRequest() {
  num = document.getElementById("txtmrandom").value;
  axios.get('https://dog.ceo/api/breeds/image/random/' + num)
    .then(function (response) {
      console.log(response);
      console.log(response.data.status);
      alert(response.data.status);
    })
    .catch(function (error) {
      console.log(error);
    });
}


function getByRandomBreedRequest() {
  subtipo = document.getElementById("txtrandomb").value;
  axios.get('https://dog.ceo/api/breed/' + subtipo + '/images/random')
    .then(function (response) {
      console.log(response);
      console.log(response.data.status);
      alert(response.data.status);
    })
    .catch(function (error) {
      console.log(error);
    });
}


function getByMBreedRandomRequest() {
  codigo = document.getElementById("txtmbrandom").value;
  axios.get('https://dog.ceo/api/breed/hound/images/random/' + codigo)
    .then(function (response) {
      console.log(response);
      console.log(response.data.status);
      alert(response.data.status);
    })
    .catch(function (error) {
      console.log(error);
    });
}