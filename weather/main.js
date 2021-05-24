let input = document.querySelector("input")


function cargarCiudad () {
    
    let ciudad = input.value;
    if (ciudad){
        $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + encodeURI(ciudad) + "&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es", function(data) {
            document.querySelector(".container").style.visibility = "visible";
            document.querySelector("#ciudad").textContent = data.name;    
            document.querySelector("#temperatura").innerHTML = Math.round(data.main.temp) + "<sup>°C</sup>";
            document.querySelector("img").setAttribute("src", `http://openweathermap.org/img/w/${data.weather[0].icon}.png`);
            document.querySelector("#descripcion").textContent = data.weather[0].description;
            input.value = "";

        }).fail(function() {
            alert("Ciudad no encontrada");
        }) 
    } else {
        alert("Debe ingresar el nombre de alguna ciudad")
    }
  
}


let enviar = document.querySelector("button");
enviar.addEventListener("click", cargarCiudad)
input.addEventListener("keypress",function(e){
    if (e.key === "Enter") cargarCiudad();
})