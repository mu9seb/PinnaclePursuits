document.addEventListener("DOMContentLoaded"), () => {
    const mountainSelectMenu = document.getElementById("mountainSelectMenu");
    
    mountainSelectMenu.addEventListener("change", )

    populateMountainsMenu();
}

function populateMountainsMenu() {
    let mountains = mountainsArray;

    const mountainsMenu = document.getElementById("mountainSelectMenu");

    mountains.foreach(mountain => {
        mountainsMenu.append(mountain);
    })
}

function fillMountainCard(mountain) {
    let mountainObject = mountain;
    
    const mountainName = document.getElementById("mountainName").innerText;
    const mountainDesc = document.getElementById("mountainDesc").innerText;
    const mountainSpecs = document.getElementById("mountainSpecs").innerText;

    mountainName = "";
    mountainDesc = "";
    mountainSpecs = "";


}

function displayMountains() {
    const mountain = document.getElementById("mountainSelectMenu").value;

    let 
}