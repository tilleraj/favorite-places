let places = [];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

const domStringBuilder = (arrayOfElements) => {
    let domString = '';
    console.log(arrayOfElements);
    domString += `<div class="row">`;
    arrayOfElements.forEach((place) => {
        domString += `<div class="col-12 col-md-6 col-lg-4 d-flex">`;
        domString += `  <div class="card">`;
        domString += `    <div class="card-header">${place.cityName}`;
        domString += `    </div>`;
        domString += `    <img src=${place.cityImage} class="card-img-top" alt= "...">`;
        domString += `    <div class="card-body">`;
        domString += `      <dl>`;
        domString += `        <dt>Favorite Restaurant: </dt>`;
        domString += `        <dd>${place.favoriteRestaurant}</dd>`;
        domString += `        <dt>Favorite Bar: </dt>`;
        domString += `        <dd>${place.favoriteBar}</dd>`;
        domString += `        <dt>Favorite Hotel: </dt>`;
        domString += `        <dd>${place.favoriteHotel}</dd>`;
        domString += `        <dt>Favorite Tourist Attraction: </dt>`;
        domString += `        <dd>${place.favoriteTouristAttraction}</dd>`;
        domString += `      </dl>`;
        domString += `    </div>`;
        domString += `  </div>`;
        domString += `</div>`;
    });
    domString += `</div>`;
    printToDom('places-container', domString);
};

function executeThisCodeAfterFileLoads() {
    const data = JSON.parse(this.responseText);
    places = data.places;
    domStringBuilder(data.places);
};

function executeThisCodeIfXHRFails() {
    console.error('oh shit');
};

const getPlacesData = () => {
    const myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeThisCodeAfterFileLoads);
    myRequest.addEventListener('error', executeThisCodeIfXHRFails);
    myRequest.open('GET', './db/places.json');
    myRequest.send();
};

const init = () => {
    getPlacesData();
};

init();