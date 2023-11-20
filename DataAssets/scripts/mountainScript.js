document.addEventListener("DOMContentLoaded", () => {
    initMountainsDropdown();
    // Accessing Mountain Select menu and updating card on change selection
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


    // Updating Card Text
    mountainName.innerText = mountainObject.name;
    mountainDesc.innerText = mountainObject.desc;
    mountainEffort.innerText = "Effort: " + mountainObject.effort;
    mountainElevation.innerText = "Elevation: " + mountainObject.elevation + " ft";
    mountainCoords.innerText = "Latitude: " + mountainObject.coords.lat + "\n" + "Longitude: " + mountainObject.coords.lng;
    // Replacing BG image
    mountainImage.src = "/DataAssets/images/" + mountainObject.img
}