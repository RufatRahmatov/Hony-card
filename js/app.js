
function updateColor(){
    const cards = document.querySelectorAll(".card__cards");

    cards.forEach((card) => {
        const logo = card.querySelector(".card__logo");
        const btn = card.querySelector('.btn__request');

        setInitialStyles(logo, btn);

        btn.addEventListener("mouseover", () => handleMouseOver(logo, btn));
        btn.addEventListener("mouseout", () => handleMouseOut(logo, btn));
    });
}

function setInitialStyles(logo, btn) {
    btn.style.color = "black";
    logo.style.backgroundColor = "black";
}

function handleMouseOver(logo, btn) {
    if (logo.classList.contains("request") 
        ); {
        setColor(logo, btn, "#FF6725");
    }
    btn.style.color = "white";
}

function handleMouseOut(logo, btn) {
    setColor(logo, btn, "white");
    logo.style.backgroundColor = "black";
    btn.style.color = "black";
}

function setColor(logo, btn, color) {
    logo.style.backgroundColor = color;
    btn.style.backgroundColor = color;
}

updateColor();
