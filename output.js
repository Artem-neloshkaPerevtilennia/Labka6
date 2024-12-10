const accordion = document.getElementById("accordion");
let accordionsHere = [];

function Update() {
    fetch('https://web6api.onrender.com/api/accordions')
        .then(response => response.json())
        .then(accordions => {
            console.log(accordions);
            if (JSON.stringify(accordions) !== JSON.stringify(accordionsHere)) {
                accordionsHere = accordions;
                accordion.innerHTML = '';

                for (let i = 0; i < accordions.length; i++) {
                    accordion.innerHTML += `<div class="accordion"><div class="accordionHeader">${accordions[i].header}
                    <button class="showButton" onclick="ShowContent('${i}')">+</button></div>
                    <div class="accordionMessage"></div></div>`;
                }

                while (accordion.children.length > 5) {
                    accordion.removeChild(accordion.firstElementChild);
                }
            }
        })
        .catch(error => console.error('Error loading objects:', error));
}

setInterval(Update, 1000);

function ShowContent(index){
    const button = document.getElementsByClassName('showButton')[index];
    const header = document.getElementsByClassName('accordionHeader')[index];
    const message = document.getElementsByClassName('accordionMessage')[index];
    button.innerHTML = "-";
    button.onclick = () => HideContent(index);
    message.innerHTML = accordionsHere[index].message;
}

function HideContent(index){
    const header = document.getElementsByClassName('accordionHeader')[index];
    const button = document.getElementsByClassName('showButton')[index];
    const message = document.getElementsByClassName('accordionMessage')[index];
    message.innerHTML = "";
    button.innerHTML = "+";
    button.onclick = () => ShowContent(index);
}