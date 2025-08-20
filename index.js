document.addEventListener("DOMContentLoaded", () => {


    // crear elementos
    const notiLoad = document.createElement("div")
    const buttonLoad = document.createElement("div")
    const nombrePagLoad = document.createElement("div")
    const descPagLoad = document.createElement("p")
    const logoUNAL = document.createElement("img")
    const switchOff = document.querySelector("#switch")
    const nav = document.querySelector(".navegadorMain")






    const selectMain = document.getElementById("selectComunas");
const div2Comunas = document.querySelector(".graficos__Div2");

selectMain.addEventListener("change", (event) => {
    const selectedIndex = event.target.value;
    div2Comunas.innerHTML = "";

    if (selectedIndex !== "") {
        const nuevoDiv = document.createElement("div");
        nuevoDiv.classList.add("div1__Com");

        
        nuevoDiv.classList.add(`div-${selectedIndex}`);

        div2Comunas.appendChild(nuevoDiv);
    }
});





    // switchsito
    

switchOff.addEventListener("click", () => {
    if (switchOff.classList.contains("switch__Off")) {
    switchOff.classList.replace("switch__Off", "switch__On");
    } else {
    switchOff.classList.replace("switch__On", "switch__Off");
    }

    document.body.classList.toggle("modo-dark")
    nav.classList.toggle("modo-dark")
});

    

    // agregar contenido a elementos
    buttonLoad.textContent = "Entrar a la pagina"
    nombrePagLoad.textContent ="Medellin ciudad emprendedora"
    descPagLoad.textContent = "Bienvenidx a nuestra pagina del proyecto final de Talento Tech, esta ha sido desarrollada por estudiantes de la Universidad Nacional de Colombia sede Medellin"

    // agregar elementos al body
    document.body.appendChild(notiLoad)
    notiLoad.appendChild(nombrePagLoad)
    notiLoad.appendChild(descPagLoad)
    notiLoad.appendChild(buttonLoad)
    notiLoad.appendChild(logoUNAL)



    // crear class de elementos
    notiLoad.setAttribute("class", "confirmaLoad")
    buttonLoad.setAttribute("class", "buttonLoad")
    nombrePagLoad.setAttribute("class", "nombrePagLoad")
    descPagLoad.setAttribute("class", "descPagLoad")
    logoUNAL.setAttribute("class", "logoUNAL")
    logoUNAL.setAttribute("src", "Sources/logoUNAL.png")

    // eliminar scroll pagina
    document.body.style.overflow = "hidden"

    
    // boton borrar
    buttonLoad.addEventListener("click", () => {
        
        notiLoad.classList.add("oculto")
        document.body.style.overflow = ""
        notiLoad.addEventListener("transitionend", () => {
            notiLoad.remove()
        });

    });
});

