document.addEventListener("DOMContentLoaded", () => {
    initLocationsDropdown();
    initParkTypeDropdown();
    // Accessing location selection menu and updating card on selection change
    const locationSelectMenu = document.getElementById("locationSelect");
    locationSelectMenu.addEventListener("change", filterByLocation);
    // Accessing park type selection menu and updating grid on selection change
    const parkTypeSelectMenu = document.getElementById("parkTypeSelect");
    parkTypeSelectMenu.addEventListener("change", filterByParkType);
    
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

function filterByLocation() {
    const locationSelected = document.getElementById("locationSelect").value;
}

function filterByParkType() {
    
}