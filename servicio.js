//Cliente (voy para el restaurante)
//restaurante-servidor spotify

let uri=" https://api.spotify.com/v1/artists/2gRP1Ezbtj3qrERnd0XasU/top-tracks?market=us";

let token ="Bearer BQAOS6endIldBkyXB77CFol-cvX8qdhbvMeNgJSlsynHMOGPLHZCwFRmIQTF2Fhl48tkh6EbYH4d3tucYK6pQoK_I7lGlcnp3MCGsZJUVUMR9CX531zJLlPS8SFMAc78Bc4ELTJMYnOvxBOJW8KYWPfoa0zHmC4"

let parametrosEnvio ={
    method:"GET",
    headers:{
        Authorization:token
    }
}

fetch (uri,parametrosEnvio)
.then(function(respuesta){
   return(respuesta.json())

})

.then(function(respuesta){
    console.log(respuesta)
    pintarDatos(respuesta)
   /* console.log(respuesta.tracks)
    console.log(respuesta.tracks [0])
    console.log(respuesta.tracks [0].preview_url)
    console.log(respuesta.tracks [0].album.images[0])
    console.log(respuesta.tracks [0].album.images[0].url)*/
    
})

.catch(function(error){
    console.log(error)
})

let fila= document.getElementById("fila")

function pintarDatos(datos){
    datos.tracks.forEach(function(cancion){
        console.log(cancion.name)
        console.log(cancion.preview_url)
        console.log(cancion.album.images[0].url)
        console.log(cancion.popularity)
        console.log(cancion.duration_ms)

        //crear un div con js
        let columna=document.createElement("div")
        columna.classList.add("col")

        //creo un div que sirve de trarjeta
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")

        //creo una img de tarjeta
        let imagen=document.createElement("img")
        imagen.classList.add("card-img-top")
        imagen.src=cancion.album.images[0].url

        //Padres e hijos
        tarjeta.appendChild(imagen)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)


    })


}