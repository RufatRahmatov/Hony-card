function updateColor(){
    const card=document.querySelectorAll(card__cards);
    card.forEach((card)=>{
        const logo = card.querySelector("card__logo");
        const btn = card.querySelector('btn__request');

        btn.style.color = "black";
        logo.style.backgoundColor ="black";

        btn.addEventListener("mouseover", () =>{
            if(logo.classList.contains("request")){
                setColor ( logo,btn, "#E2BE7C" )
            } else if(logo.classList.contains("pending")) {
                setColor(logo,btn,"#E2BE7C");
            }else if (logo.classList.contains("done")){
                setColor(logo,btn,"#E2BE7C");
            }else if (logo.classList.contains("rich")){
                setColor(logo,btn,"#E2BE7C");
            }
            btn.style.color ="white";
        });

        btn.addEventListener("mouseout", ()=>{
            setColor(logo,btn, "white");
            logo.style.backgoundColor ="black";
            btn.style.color ="black";
        });

    });
   
}

function setColor(logo, btn, color) {
  logo.style.backgroundColor = color;
  btn.style.backgroundColor = color;
}

updateColor();

