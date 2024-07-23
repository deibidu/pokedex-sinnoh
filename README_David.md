Hola soy David López y os voy a repasar mi recorrido en este proyecto punto por punto.

1.  Para empezar todo, creé un diseño en Figma tomando como referencia la pokédex de los juegos de Diamante y Perla.

2.  Al crear el fichero, instalé Typescript con React por el compilador de Vite. Tambien instalé react-google-dom y axios para la llamada a la API.
    Creé las rutas y mis archivos necesarios. Lo primero que hice fue ir a style.css a crear las variables de los colores y algunos patrones que sabia que se iba a
    repetir a lo largo del proyecto (obviamente siempre hay cambios de última hora, pero tenemos la suerte de rectificarlos). Creé el esqueleto del navbar para poder ver si estaba todo bien conectado, por si se renderizaba bien todo.

        \*Conflicto: Tuve problemas en el renderizado.

        \*Solución: Era porque tenía las imagenes mal importadas. En mi anterior proyecto las teniamos así, pero claro, luego cai que eran iconos importados, asi que lo modifiqué y funcionó.

3.  Una vez teniendo todo bien conectado, me puse a crear los archivos de los enlaces de la Home(Pokedex) y el de Favoritos y di el estilo del Navbar y puse queños detalles como el scroll y el background del body como en mi diseño de Figma.

4.  Me puse a investigar sobre los datos de la Api. Vi los enlaces para realizar la llamada. Creé la constante y funcionó. Recordé que mi profesor nos decía que llamar a las apis era tedioso ya que si no se tiene un control de renderizado a las llamadas, la api se te puede bloquear, asi que investigué que necesitaba, a parte de un useEffect, una promesa con fetch. Quería aprenderlo bien asi que tomé como refencia el cómo lo hizo con sus tutoriales y archivos que nos proporcionó a lo largo del curso. Se montaba bien la llamada y se ejecutaba.

5.  Ahora tenía que buscar sacar datos de la api para conseguir las stats. Para el tipado creé un archivo para poner los interfaces de los datos. Creé la función para mapear los pokemon de sinnoh y extraer los datos de los pokemon. Seguí las indicaciones de mi profesor para poder hacerlo.

    \*Conflicto: No me funcionaba la Api. Se hacia la llamada bien y se montaba pero no podia sacar los datos y si no me sacaba los datos no se me renderizaba la Api. También me fue muy complejo el sacar el cómo traer a los pokemon de sinnoh. Traté de probar con el término '/pokedex/6', pero solo me daba la lista de nombres de estos y ni siquiera estaban todos, se me paraba en Giratina. Supongo que seria la de diamante y perla local.

    \*Solución: Consulté a mis compañeros y fueron ellos quienes me ayudaron a conseguirlo. Me dijeron que estaba haciendo dos llamadas a la Api y que eso era lo que daba error aparte de que los tipos de la interface no encontraba el de los stats aun que tuviera el mapeado bien. Me recomendaron usar Promise.all(), que funciona cuando las promesas se cumplen(o no y asi ver el error), para hacerlo más sencillo. También me enseñaron a leer los datos de la Api, el como leer lo que contiene cada enlace y lo que devuelve y me dieron una pista sobre como sacar la pokedex de Sinnoh y como soy bastante malo en matemáticas le pedí a chatGPT que me hiciera la funcion que calculara un array entre 387 al 493 el enlace. Finalmente se renderizó y pude continuar.

6.  Para el ToggleButton de modo nocturno usé la información de aquí: 'https://dev.to/franklin030601/using-dark-mode-in-your-react-app-5364' y el css de su repositorio de github, pero lo amoldé al estilo que necesitaba: 'https://github.com/Franklin361/dark-light-app/blob/main/src/styles/switch.css'.

    \*Nota: añadí las versiones del Pokémon Cherrim como detalle friki por gusto, ya que esta la versión Cherrim Soleado y Cherrim Encapotado.

7.  Di estilo a las cards y su caja padre donde se iban a guardar los pokemon y sus datos en modo bloque y modo lista haciendo que este ultimo sea por el de defecto.

8.  Con la misma lógica del modo noche creé el modo lista y bloque con un boton que cambiaba de iconos que instalé el react-icons y de ahi importaba los iconos.

9.  Para filtrar los pokemon Favoritos seguí los pasos de mi profesor en sus videos para conseguir filtrarlos y el cambio de color del icono del corazón.

    \*Conflicto: no sabía como conectar esta función a los botones del navbar. Suponía que era la misma lógica que el de ToggleButtonListBlock, pero me daba miedo que se me duplicara el navbar.

    \*Solución: Por prisas pregunté a chatGPT para ver bien como hacerlo y el porqué para comprenderlo. Efectivamente era asi pero no mi lógica no entendia como no se puede duplicar de nuevo ya que estas poniendo de nuevo en navbar en el return.

10. Para el maquetado del container padre de las cards lo cogí de aquí: 'https://www.w3schools.com/css/css_grid.asp' que lo descubrí hace poco y me pareción bastante sencillo.

11. El active de los enlace, consulté las tabs para tomar ejemplo, pero también recordé que las hicimos en nuestro proyecto final y cogí la referencia de ahí ya que me resultaba más sencillo y rápido, pero igualemente, este es el enlace que encontré que es basicamente lo mismo: 'https://reactrouter.com/en/main/components/nav-link'.

12. Para los efectos de css los cogí de estos sitios: para el zoom'https://www.w3schools.com/howto/howto_css_zoom_hover.asp' y el como aparece 'https://angrytools.com/css/animation/'.

13. Paginación He seguido los pasos de 'https://www.youtube.com/watch?v=XNEhQiIAzOo&t=905s&ab_channel=Mauro' ya que estaba usando la PokeApi de 0. He conseguido que la paginación se cree pero no el que pase a la siguiente página y me lia bastante lo que me falta. También intenté probarlo por medio de este video con la api de material ui con este video, pero no era lo que yo buscaba y aparte me lié un poco más 'https://www.youtube.com/watch?v=SNSzN7dT_zA&ab_channel=codrr'.

    \*Conflicto: No se pasan los Pokémon de página.

14. LocalStorage: he seguido los pasos de mi profesor aplicandolo a typescript y react. Me ha costado un poco entender el dónde colocar las cosas la función ya que he ido con prueba y error hasta poder introducirlo. He necesitado la ia para que me diga donde colocar perfectamente el getItem ya que me salía el pokémon pero no se me guardaba al recargarlo. Ya sé como va un LocalStorage.

15. Responsive: He creado un responsive para cada modo ya que se puede cambiar de modo el formato de las cards de los Pokémon.

CONCLUSIÓN: He aprendido mucho en llamadas a api, el cómo leerlas también. He aprendido las promesas que era algo no entendía en su momento y lo veo bastante útil. Por fin le doy uso a la Consola para ver las cosas que fallan porque en clase no conseguía entenderlo y mientras la función estuviera bien seguía adelante y por fin veo, que ya sé como usarlo y lo importante que es. Ya sé como va los Local Storage, como funcionan y que sintaxis necesita. Sí es verdad que cuando el proyecto crece se hace más lioso el cómo colocarlo, usarlo y qué introducir, por eso es muy importante ser descriptivo y ordenado, cosa que tengo que mejorar.

La llamada a la Api, para los detalles sobre todo, fue de lo más frustrante para mí porque estaba siguiendo todo al pié de la letra, se montaba bien y la estructura esta bien, pero no funcionaba. Como funcionaba me pasaba a otras cosas cuando mi cabeza no iba a más hasta que comprendí que no podía solucionarlo yo solo porque ni buscando en español o inglés no encontraba lo que quería y tuve que pedir ayuda a mis compañeros que ellos tienen más experiencia con apis y tienen más lógica que yo.

Sintaxis: he tenido bastantes problemas de sintaxis ya por mi total falta de experiencia. He tenido que recurrir a chatGPT para que me corrigiera para luego luego copiarlo a mano yo para que se me pueda quedar mejor porque al final he comprendido que esto es hacer, hacer y hacer.

Me ha gustado esta temática, pero la informacion de la Pokeapi era bastante irregular y desordenado. una vez más, agradezco que mis compañeros me hayan ayudado porque descubrí tambien que se podia instalar el pokenode y de ahi sacar la informacion en base a typescript, pero era más complejo todavia. Menos mal que me ayudaron.

Muchas gracias por la oportunidad.

- David.
