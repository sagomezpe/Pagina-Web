/*eslint-env browser*/ //Eliminar los errores por los elementos propios del navegador

// Funcion para añadir los iconos al mapa, buscando la menor distorsion segun el tamaño de la ventana
function agregarIcono(posicionXPorcentaje, posicionYPorcentaje, imagenSrc, infoTitulo, infoTexto) {
    const mapContainer = document.getElementById('map-container'); // Obtiene el contenedor del mapa mediante su ID

    // Crea un nuevo div para el icono
    const icono = document.createElement('div');
    icono.classList.add('icono'); // Añade la clase 'icono' al div
    icono.style.position = 'absolute'; // Posiciona el div de manera absoluta
    icono.style.zIndex = '100'; // Establece un z-index alto para asegurarse de que esté por encima de otros elementos

    // Define las coordenadas del icono en porcentaje
    icono.style.top = `${posicionYPorcentaje}%`; // Posición vertical relativa en porcentaje
    icono.style.left = `${posicionXPorcentaje}%`; // Posición horizontal relativa en porcentaje

    // Crea un elemento de imagen para el icono
    const imagenIcono = document.createElement('img');
    imagenIcono.src = imagenSrc; // Establece la fuente de la imagen
    imagenIcono.alt = 'Icono'; // Texto alternativo para la imagen
    imagenIcono.classList.add('icono-imagen'); // Añade la clase 'icono-imagen' a la imagen

    // Crea un div para la ventana de información
    const infoVentana = document.createElement('div');
    infoVentana.classList.add('info-ventana'); // Añade la clase 'info-ventana' al div
    // Inserta el título y el texto de la información en la ventana
    infoVentana.innerHTML = `<h3>${infoTitulo}</h3><p>${infoTexto}</p>`;

    // Añade la imagen y la ventana de información al div del icono
    icono.appendChild(imagenIcono);
    icono.appendChild(infoVentana);

    // Añade el div del icono al contenedor del mapa
    mapContainer.appendChild(icono);

    // Añade un evento de ratón para mostrar la ventana de información al pasar el ratón por encima del icono
    icono.addEventListener('mouseenter', function () {
        infoVentana.style.display = 'block'; // Muestra la ventana de información
    });

    // Añade un evento de ratón para ocultar la ventana de información al retirar el ratón del icono
    icono.addEventListener('mouseleave', function () {
        infoVentana.style.display = 'none'; // Oculta la ventana de información
    });
}
    
// Iconos
agregarIcono(28, 40, 'Imagenes/icono.png', 'Radio en Colombia', 'En 1929 nace la primera emisora colombiana, La voz de Barranquilla');
agregarIcono(27, 24, 'Imagenes/icono.png', 'Primera radiodifusion', 'En la nochebuena de 1906 se reprodujo Oh Holy Night en la estación Brant Rock Station en Massachusets');
agregarIcono(70, 30, 'Imagenes/icono.png', 'Radio Free Asia', 'Como una estrategia de propaganda, los Estados Unidos fundaron la RFA en 1950 para esparcir propaganda anticomunista en el continente asiatico');
agregarIcono(80, 25, 'Imagenes/icono.png', 'Radio Pekin', 'China funda su primera emisora, Radio Pekin, en 1923, la cual tuvo un papel de especial importancia en la narración de hechos de la SGM y en la propaganda de la revolución cultural');
agregarIcono(87, 24, 'Imagenes/icono.png', 'Radio NHK', 'En Japon se fundo la NHK en 1925, la cual funciona a dia de hoy, siendo tomada por los imperiales en 1941 por motivos propagandisticos, fue en la misma emisora donde se dio el famoso discurso de rendición de Hirohito');
agregarIcono(55, 62, 'Imagenes/icono.png', 'Radio y cambio social', 'En Sudafrica aparecio Radio Freedom durante el apartheid, siendo una emisora clandestina que promovio mensajes de cambio, resistencia y solidaridad');
agregarIcono(52, 35, 'Imagenes/icono.png', 'Radio y control', 'Las primeras estaciones de radio Africanas fueron de origen colonial usadas para mantener el status quo, promoviendo la cultura, idioma y valores de los paises colonizadores');
agregarIcono(52, 22, 'Imagenes/icono.png', 'Marconi y la radio', 'En 1894 Marconi inventa el primer sistema de comunicación de telegrafia inalambrica');
agregarIcono(47, 22, 'Imagenes/icono.png', 'Cervera y voz humana', 'En 1902, Julio Cervera logra transmitir la voz humana a una distancia de 85 km entre las ciudades de Javea e Ibiza');
agregarIcono(37, 27, 'Imagenes/icono.png', 'Fessenden y la comunicación transoceanica', 'En 1906, Fesseden logra transmitir ondas entre los paises de Reino Unido y los Estados Unidos');
agregarIcono(35, 19, 'Imagenes/icono.png', 'Radio y rescate en el titanic', 'Fue gracias a la radio que fue posible la localización del barco en su hundimiento, lo que permitio salvar la vida de numerosos naufragos');