document.addEventListener("DOMContentLoaded", () => {
    initMountainsDropdown();
    
    const mountainSelectMenu = document.getElementById("mountainSelectMenu");
    
    mountainSelectMenu.addEventListener("change", displayMountainCard);
})

function initMountainsDropdown() {
    const mountainSelectMenu = document.getElementById("mountainSelectMenu");
    let mountains = mountainsArray;

    for (let i = 0; i < mountains.length; i++) {
        let newMountain = new Option(mountains[i].name, i)
        mountainSelectMenu.appendChild(newMountain);
    }
}

function displayMountainCard() {
    const mountainSelectMenu = document.getElementById("mountainSelectMenu");
    const selectedMountain = mountainSelectMenu.value;
    let mountainObject = mountainsArray[selectedMountain]

    let mountainName = document.getElementById("mountainName");
    let mountainImage = document.getElementById("mountainImage");
    let mountainDesc = document.getElementById("mountainDesc");
    let mountainElevation = document.getElementById("mountainElevation");
    let mountainEffort = document.getElementById("mountainEffort");
    let mountainCoords = document.getElementById("mountainCoords");



    mountainName.innerText = mountainObject.name;
    mountainDesc.innerText = mountainObject.desc;
    // Storing Current text to append new
    const effortText = mountainEffort.innerText;
    mountainEffort.innerText = effortText + mountainObject.effort;
    const elevationText = mountainElevation.innerText;
    mountainElevation.innerText = elevationText + mountainObject.elevation + " ft";
    mountainCoords.innerText = "Latitude: " + mountainObject.coords.lat + "\n" + "Longitude: " + mountainObject.coords.lng;

    console.log(mountainName)
    mountainImage.src = "/DataAssets/images/" + mountainObject.img
    mountainDesc = mountainObject.desc;
}