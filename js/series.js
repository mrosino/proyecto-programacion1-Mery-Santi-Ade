window.addEventListener('load',function(){
  var cargando = document.querySelector('.cargando')


  cargando.classList.add('loading')
  cargando.style.display="block"


//Series de la api en On the air
fetch('https://api.themoviedb.org/3/tv/on_the_air?api_key=ad5d026c61e51047e5dd51e17f8086dd&language=es-ES&page=1')
    .then(function(respuesta){
      return respuesta.json()
      
    })
    .then(function(infoSeries){
        console.log(infoSeries.results)

        let series = ""
        for (i = 0 ; i < 14 ; i++){
            console.log(infoSeries.results[i])
            let url= "https://image.tmdb.org/t/p/w500" +infoSeries.results[i].poster_path
            let id= infoSeries.results[i].id
            series = `${series}<a href="detallesSeries.html?id=${id}"> <div class="imagenes imagenesC"><img class="imagenesD" src="${url}" alt=""></div></a> `
        }
        document.querySelector(".series").innerHTML= series
        console.log(series)
        $(".series").slick({
            infinite: true,
            slidesToShow: 7,
            slidesToScroll: 1,
            responsive : [{breakpoint: 1400,settings:{slidesToShow: 4,}}]
      
          })
    })

    fetch('https://api.themoviedb.org/3/tv/on_the_air?api_key=ad5d026c61e51047e5dd51e17f8086dd&language=es-ES&page=2')
    .then(function(respuesta){
      return respuesta.json()
      
    })
    .then(function(infoSeries1){
        console.log(infoSeries1.results)

        let series = ""
        for (i = 0 ; i < 14 ; i++){
            console.log(infoSeries1.results[i])
            let url= "https://image.tmdb.org/t/p/w500" +infoSeries1.results[i].poster_path
            let id= infoSeries1.results[i].id
            series = `${series}<a href="detallesSeries.html?id=${id}"> <div class="imagenes imagenesC"><img class="imagenesD" src="${url}" alt=""></div></a> `
        }
        document.querySelector(".series1").innerHTML= series
        console.log(series)
        $(".series1").slick({
            infinite: true,
            slidesToShow: 7,
            slidesToScroll: 1,
            responsive : [{breakpoint: 1400,settings:{slidesToShow: 4,}}]
      
          })
    })

    fetch('https://api.themoviedb.org/3/tv/on_the_air?api_key=ad5d026c61e51047e5dd51e17f8086dd&language=es-ES&page=3')
    .then(function(respuesta){
      return respuesta.json()
      
    })
    .then(function(infoSeries2){
        console.log(infoSeries2.results)

        let series = ""
        for (i = 0 ; i < 14 ; i++){
            console.log(infoSeries2.results[i])
            let url= "https://image.tmdb.org/t/p/w500" +infoSeries2.results[i].poster_path
            let id= infoSeries2.results[i].id
            series = `${series}<a href="detallesSeries.html?id=${id}"> <div class="imagenes imagenesC"><img class="imagenesD" src="${url}" alt=""></div></a> `
        }
        document.querySelector(".series2").innerHTML= series
        console.log(series)
        $(".series2").slick({
            infinite: true,
            slidesToShow: 7,
            slidesToScroll: 1,
            responsive : [{breakpoint: 1400,settings:{slidesToShow: 4,}}]
      
          })
    })

    fetch('https://api.themoviedb.org/3/tv/on_the_air?api_key=ad5d026c61e51047e5dd51e17f8086dd&language=es-ES&page=4')
    .then(function(respuesta){
      return respuesta.json()
      
    })
    .then(function(infoSeries3){
        console.log(infoSeries3.results)

        let series = ""
        for (i = 0 ; i < 14 ; i++){
            console.log(infoSeries3.results[i])
            let url= "https://image.tmdb.org/t/p/w500" +infoSeries3.results[i].poster_path
            let id= infoSeries3.results[i].id
            series = `${series}<a href="detallesSeries.html?id=${id}"> <div class="imagenes imagenesC"><img  class="imagenesD" src="${url}" alt=""></div></a> `
        }
        document.querySelector(".series3").innerHTML= series
        console.log(series)
        $(".series3").slick({
            infinite: true,
            slidesToShow: 7,
            slidesToScroll: 1,
            responsive : [{breakpoint: 1400,settings:{slidesToShow: 4,}}]
      
          })
    })

    fetch('https://api.themoviedb.org/3/tv/on_the_air?api_key=ad5d026c61e51047e5dd51e17f8086dd&language=es-ES&page=7')
    .then(function(respuesta){
      return respuesta.json()
      
    })
    .then(function(infoSeries4){
        console.log(infoSeries4.results)

        let series = ""
        for (i = 1 ; i < 14 ; i++){
            console.log(infoSeries4.results[i])
            let url= "https://image.tmdb.org/t/p/w500" +infoSeries4.results[i].poster_path
            let id= infoSeries4.results[i].id
            series = `${series}<a href="detallesSeries.html?id=${id}"> <div class="imagenes imagenesC"><img class="imagenesD" src="${url}" alt=""></div></a> `
        }
        document.querySelector(".series4").innerHTML= series
        console.log(series)
        $(".series4").slick({
            infinite: true,
            slidesToShow: 7,
            slidesToScroll: 1,
            responsive : [{breakpoint: 1400,settings:{slidesToShow: 4,}}]
      
          })
    })

    fetch('https://api.themoviedb.org/3/tv/on_the_air?api_key=ad5d026c61e51047e5dd51e17f8086dd&language=es-ES&page=6')
    .then(function(respuesta){
      return respuesta.json()
      
    })
    .then(function(infoSeries5){
       // console.log(infoSeries5.results)
       cargando.style.display="none"
        let series = ""
        for (i = 0 ; i < 14 ; i++){
            console.log(infoSeries5.results[i])
            let url= "https://image.tmdb.org/t/p/w500" +infoSeries5.results[i].poster_path
            let id= infoSeries5.results[i].id
            series = `${series}<a href="detallesSeries.html?id=${id}"> <div class="imagenes imagenesC"><img  class="imagenesD" src="${url}" alt=""></div></a> `
        }
        document.querySelector(".series5").innerHTML= series
        console.log(series)
        $(".series5").slick({
            infinite: true,
            slidesToShow: 7,
            slidesToScroll: 1,
            responsive : [{breakpoint: 1400,settings:{slidesToShow: 4,}}]
      
          })
    })

})