window.onload = () => {
    initMountainsDropdown();
}

function initMountainsDropdown() {
    const mountainSelectMenu = document.getElementById("mountainSelectMenu");
    let mountains = mountainsArray;

    for (let i = 0; i < mountains.length; i++) {
        let newMountain = new Option(mountains[i].name, i)
        mountainSelectMenu.appendChild(newMountain);
    }
}

function displayMountainCard(mountain) {
    let mountainObject = mountain;
    
    const mountainName = document.getElementById("mountainName").innerText;
    const mountainDesc = document.getElementById("mountainDesc").innerText;
    const mountainElevation = document.getElementById("mountainElevation").innerText;
    const mountainEffort = document.getElementById("mountainEffort").innerText;
    const mountainCoords = document.getElementById("mountainCoords").innerText;

    mountainName = mountainObject.name;
    mountainDesc = mountainObject.desc;
}