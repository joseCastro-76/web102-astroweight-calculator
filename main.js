var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
];
const dropDown = document.getElementById('planets');

// Populate the drop down with planets.
planets = planets.reverse();
planets.forEach(populateDropdown);

function populateDropdown(planet) {
    const planetName = planet[0];

    const option = document.createElement("option");
    option.value = planetName;
    option.text = planetName;

    dropDown.appendChild(option);
}


function handleClickEvent(e) {
    const userWeight = document.getElementById("user-weight").value;
    const planetName = dropDown.options[dropDown.selectedIndex].text;
    const result = calculateWeight(userWeight, planetName);
    
    // Display result to output.
    const output = document.querySelector("#output");
    const message = `If you were on <span class="has-text-weight-bold">${planetName}</span>, you would weigh <span class="has-text-weight-bold">${result}</span>lbs!`;

    output.innerHTML = message;
    output.style.display = "block";
}

function calculateWeight(weight, planetName) {
    const planet = planets.find(planet => planet[0] == planetName);
    const planetGravity = planet[1];

    const calculatedWeight = parseInt(weight) * planetGravity;
    const formattedWeight = parseFloat(calculatedWeight.toFixed(2));
    
    return formattedWeight;
}

// Set the #calculate-button element's onclick method to use the handleClickEvent function.
const button = document.getElementById("calculate-button");
button.addEventListener("click", handleClickEvent);
