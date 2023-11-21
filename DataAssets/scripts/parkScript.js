document.addEventListener("DOMContentLoaded", () => {
    const allParks = nationalParksArray;
    
    initLocationsDropdown();
    initParkTypeDropdown();
    displayParks(allParks);
    // Accessing location selection menu and updating grid on selection change
    const locationSelectMenu = document.getElementById("locationSelect");
    locationSelectMenu.addEventListener("change", filterParks);
    // Accessing park type selection menu and updating grid on selection change
    const parkTypeSelectMenu = document.getElementById("parkTypeSelect");
    parkTypeSelectMenu.addEventListener("change", filterParks);
    
})

function initLocationsDropdown() {
    const locationSelectMenu = document.getElementById("locationSelect");
    let locations = locationsArray;
    
    for (let i = 0; i < locations.length; i++) {
        let newLocation = new Option(locations[i], i)
        locationSelectMenu.appendChild(newLocation);
    }
}

function initParkTypeDropdown() {
    const parkTypeSelectMenu = document.getElementById("parkTypeSelect");
    let parkTypes = parkTypesArray;
    
    for (let i = 0; i < parkTypes.length; i++) {
        let newParkType = new Option(parkTypes[i], i)
        parkTypeSelectMenu.appendChild(newParkType);
    }
}

function displayParks(parks) {
    const selectedLocationValue = document.getElementById("locationSelect").value;
    const selectedParkTypeValue = document.getElementById("parkTypeSelect").value;

    // check if the browser supports templates
    if('content' in document.createElement('template')){
        const parksGrid = document.querySelector("#parksGrid")
        // clear all cards
        parksGrid.innerHTML = "";
        // Fill grid with cards
        parks.forEach(park => {
            addPark(park, parksGrid);   
        });
    }
}

function addPark(park, parent) {
    const template = document.getElementById("parkCardTemplate").content.cloneNode(true);
    
    template.getElementById("parkName").innerText = park.LocationName;
    
    if (park.Address != 0 && park.Zip != 0) {
        template.querySelector("#parkAddress").innerText = `${park.Address} ${park.City}, ${park.State} ${park.ZipCode}`;
    } else {
        template.querySelector("#parkAddress").innerText = `${park.City}, ${park.State}`;
    }

    if (park.Fax != 0) {
        template.querySelector("#parkInfo").innerText = `Fax: ${park.Fax} \n Latitude: ${park.Latitude}\u00B0 \n Longitude: ${park.Longitude}\u00B0`
    } else {
        template.querySelector("#parkInfo").innerText = `Latitude: ${park.Latitude}\u00B0 \n Longitude: ${park.Longitude}\u00B0`
    }

    if (park.Visit != null) {
        template.querySelector("#visitButton").href = park.Visit
    } else {
        template.querySelector("#visitButton").innerText = `They've no site!`
    }

    template.querySelector("#mapButton").href = `https://maps.google.com?ll=${park.Latitude},${park.Longitude}`

    parent.appendChild(template)
}

function filterParks() {
    let filteredParks = nationalParksArray;
    console.log("filters reset.")
    const locationSelectMenu = document.querySelector("#locationSelect");
    const parkTypeSelectMenu = document.querySelector("#parkTypeSelect");
    const selectedLocationText = locationSelectMenu.options[locationSelectMenu.selectedIndex].text;
    const selectedParkTypeText = parkTypeSelectMenu.options[parkTypeSelectMenu.selectedIndex].text;
    
    console.log("Selected Location:", selectedLocationText);
    console.log("Selected Park Type:", selectedParkTypeText);
     

    // filter by checking if selected location matches park state
    if (selectedLocationText !== "All Locations") {
        filteredParks = filteredParks.filter(park => selectedLocationText == park.State)
        console.log("filtered by location!", filteredParks)
    }
    // further filter by checking that selected park type in park name
    if (selectedParkTypeText !== "All Park Types") {
        filteredParks = filteredParks.filter(p => p.LocationName.includes(selectedParkTypeText))
        console.log("filtered by park type!", filteredParks)
    }
    
    displayParks(filteredParks);
    console.log("Grid updated.")
}
