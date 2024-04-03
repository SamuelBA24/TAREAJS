
// Función sumArray: Suma de todos los elementos de un array
// Parámetros: array (Array) - Un array de números
// Devuelve: Number - La suma de todos los elementos del array
const sumArray = (Array) => {
    let sum = 0;
    for(let i = 0; i <Array.length; i++) {
        sum += Array[i];
    }
    return sum;
  };

  const  Number = [1,2,3,4,6,7,9,10,11,12,13,14,15,16,17,18,19,20];
  console.log(sumArray(Number));
  
 // Función filterEvenNumbers: Filtrar números pares de un array
// Parámetros: array (Array) - Un array de números
// Devuelve: Array - Un nuevo array con solo los números pares del array original
const filterEvenNumbers = (array) => {
    return array.filter(num => num % 2 === 0);
};

const Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
console.log(filterEvenNumbers(Array));

  
  // Función findMaxNumber: Encontrar el mayor número en un array
  // Parámetros: array (Array) - Un array de números
  // Devuelve: Number - El mayor número en el array
  const findMaxNumber = (array) => {
    return Math.max(...array);
};

const arrayMayor = [5,28,65,32,1];
console.log(findMaxNumber(arrayMayor));
  
  // Función toUpperCaseStrings: Convertir un array de strings a mayúsculas
  // Parámetros: array (Array) - Un array de strings
  // Devuelve: Array - Un nuevo array con todas las strings convertidas a mayúsculas
  const toUpperCaseStrings = (array) => {
    return array.map(str => str.toUpperCase());
};

// Ejemplo de uso
const arrayS = ['Este', 'Texto', 'se ', 'convertira','en','Mayusculas'];
console.log(toUpperCaseStrings(arrayS));
  
  // Función calculateAverage: Calcular el promedio de un array de números
  // Parámetros: array (Array) - Un array de números
  // Devuelve: Number - El promedio de los números en el array
  const calculateAverage = (array) => {
    const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue,0);// Toma cada uno de los numueros, los redusce a  un solo valor y nos da el total
    return sum / array.length;
  };
  const NumPromedio =[12,20,31,50];
  console.log(calculateAverage(NumPromedio));
  
  // Función sortNumbersAscending: Ordenar un array de números de forma ascendente
  // Parámetros: array (Array) - Un array de números
  // Devuelve: Array - Un nuevo array con los números ordenados de forma ascendente
  const sortNumbersAscending = (array) => {
    return array.slice().sort((a,b) => a-b);
    
  };

  const ArrayAscendente = [10,20,40,30,60,50,90,70,80,100];
  console.log(sortNumbersAscending(ArrayAscendente));
  
  // Función findFirstElement: Encontrar el primer elemento que cumple una condición en un array
  // Parámetros: 
  // - array (Array) - Un array de elementos
  // - condition (Function) - Una función de condición que devuelve true o false
  // Devuelve: Any - El primer elemento que cumple con la condición, o undefined si ninguno lo hace
  const findFirstElement = (array,condition) => { 
    for(let elemento of array) {
        if(condition(elemento)) {
            return elemento;
        }
    }
    return undefined;
  };
  
  
  // Función countElements: Contar la cantidad de elementos en un array
  // Parámetros: array (Array) - Un array de elementos
  // Devuelve: Number - La cantidad de elementos en el array
  const countElements = (array) => {
    return array.length;
    
  };
  const ElementosEnArray = [1,1,2,2,3,3,4,4,5,5,6,6];
  console.log(countElements(ElementosEnArray));
  
  // Función concatenateArrays: Concatenar dos arrays
  // Parámetros: 
  // - array1 (Array) - El primer array a concatenar
  // - array2 (Array) - El segundo array a concatenar
  // Devuelve: Array - Un nuevo array que es la concatenación de los dos arrays proporcionados
  const concatenateArrays = (array1, array2) => {
    return array1.concat(array2);
  };
  const Array1 = [1,2,3,4,5,6,7,8,9,10];
  const Array2 = [11,12,13,14,15,16,17,18,19,20];
  console.log(concatenateArrays(Array1,Array2));
  
  // Función squareNumbers: Calcular el cuadrado de cada número en un array
  // Parámetros: array (Array) - Un array de números
  // Devuelve: Array - Un nuevo array con los cuadrados de los números en el array original
  const squareNumbers = (Array) => {
    return Array.map(num => num ** 2);    
  };

  const ArrayCuadrado = [1,2,3,4,5,6,7,8,9,10]; 
  console.log(squareNumbers(ArrayCuadrado));

  // Función flecha para agregar habilidades a un jugador de un juego
const agregarHabilidad = (jugador, nuevaHabilidad) => {
// Primero: Verificamos si el jugador tiene un arreglo de habilidades, si este no lo tiene, debemos crearlo
if (!jugador.habilidades){
    jugador.habilidades = [];
}
// Ahora verificamos si la habilidad que se agregará existe en un array de habilidades
if (!jugador.habilidades.includes(nuevaHabilidad)){
    // Si no existe, agregamos la habilidad
    jugador.habilidades.push(nuevaHabilidad);
}
return jugador;
};

const jugador = {
    nombre: 'Dayro Moreno',
    Nivel: 10,
    // SUPER PODERES
    habilidades: ['Ataca como un loco', 'Mete goles como ningún otro', 'Defensa']

};
const nuevaHabilidad = 'Tolerancia al alcohol';
console.log(agregarHabilidad(jugador,nuevaHabilidad));

// Función para calcular la duración total de reproducción de todas las películas.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene propiedades como 'titulo' y 'duracion'.
// Retorna:
// - Un número que representa la duración total de todas las películas en minutos.
const calcularDuracionTotal = (peliculas) => {
    let duracionTotal = 0;

   for ( let i = 0; i < peliculas.length; i++) {
        if (peliculas[i].duracion && peliculas[i].duracion > 0){
            duracionTotal += peliculas[i].duracion;
        }
    }
    return duracionTotal;
};

const peliculas =[
    {
        titulo: 'Poor Things', duracion: 140},
        { titulo: 'Y donde están las rubias', duracion:98},
        { titulo: 'EL paseo 2', duracion: 120},
];

console.log(calcularDuracionTotal(peliculas));


// Función para buscar películas por título y género.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene propiedades como 'titulo' y 'genero'.
// - titulo: String que representa el título a buscar.
// - genero: String que representa el género a buscar.
// Retorna:
// - Un array de objetos que representan películas que coinciden con el título y el género especificados.
const buscarPeliculas = (peliculas, titulo = '', genero = '') => {
    // Filtrar las películas según el título y el género (si se proporcionan)
    return peliculas.filter(pelicula => {
        const coincideTitulo = pelicula.titulo.toLowerCase().includes(titulo.toLowerCase());
        const coincideGenero = genero === '' || pelicula.genero.toLowerCase() === genero.toLowerCase();
        return coincideTitulo && coincideGenero;
    });
  };

const Peliculas = [
    { titulo: 'The poor things', genero: 'Ciencia ficcion' },
    { titulo: 'Y donde estan las rubias', genero: 'Comedia' },
    { titulo: 'El Padrino', genero: 'Accion' }
];

const tituloABuscar = 'The poor things';
const generoABuscar = 'Ciencia ficcion';

console.log(buscarPeliculas(Peliculas, tituloABuscar, generoABuscar));

// Función para calcular el promedio de puntajes de las películas.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene una propiedad 'puntaje'.
// Retorna:
// - Un número que representa el promedio de puntajes de todas las películas.
const calcularPromedioPuntajes = (peliculas) => {
    if (peliculas.length === 0){
        return 0;
    } 
    const sumaPuntajes = peliculas.reduce((total,pelicula) => total + pelicula.puntaje,0);
    return sumaPuntajes / peliculas.length;  
};
const pelicula = [
    {titulo: 'The poor things', puntaje: 5.00},
    {titulo: 'Y donde estan las rubias', puntaje: 8.00},
    { titulo:'El Padrino', puntaje: 10.00}
];
console.log(calcularPromedioPuntajes(pelicula));
// Función para filtrar películas por año de lanzamiento.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene una propiedad 'año'.
// - año: Número que representa el año de lanzamiento a filtrar.
// Retorna:
// - Un array de objetos que representan películas lanzadas en el año especificado.
const filtrarPorAño = (peliculas, año) => {
    return peliculas.filter(pelicula => pelicula.año === año);
};
    
    const Peliculass = [
        {titulo: 'The poor things', año: 2024},
        {titulo: 'Y donde estan las rubias', año: 2004},
        { titulo:'El Padrino', año: 1972}
    ];
    const añoAFiltrar = 2024;
    console.log(filtrarPorAño(peliculas, añoAFiltrar));

// Función para calcular el promedio de duración de las películas por género.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene propiedades como 'duracion' y 'genero'.
// - genero: String que representa el género de las películas a considerar.
// Retorna:
// - Un número que representa el promedio de duración de las películas del género especificado.
const calcularPromedioDuracionPorGenero = (peliculas, genero) => {
    // Filtrar las películas por género.
    const peliculasPorGenero = peliculas.filter(pelicula => pelicula && pelicula.genero && pelicula.genero.toLowerCase() === genero.toLowerCase());


    // Calcular el promedio de duración de las películas del género especificado.
    if (peliculasPorGenero.length === 0) {
        return 0;
    }

    const duraciones = peliculasPorGenero.map(pelicula => pelicula.duracion);
    const sumaDuraciones = duraciones.reduce((total, duracion) => total + duracion, 0);
    return sumaDuraciones / peliculasPorGenero.length;
};

const peliculass = [
    { titulo: 'Pelicula 1', genero: 'Drama', duracion: 120 },
    { titulo: 'Pelicula 2', genero: 'Comedia', duracion: 90 },
    { titulo: 'Pelicula 3', genero: 'Drama', duracion: 110 }
];

const generoAFiltrar = 'Drama';
console.log(calcularPromedioDuracionPorGenero(peliculas, generoAFiltrar));





// Clase base que representa un vehículo
class Vehiculo {
    /**
     * Constructor de la clase Vehiculo.
     * @param {string} marca - La marca del vehículo.
     * @param {string} modelo - El modelo del vehículo.
     * @param {number} año - El año de fabricación del vehículo.
     */
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    /**
     * Método para obtener la información del vehículo.
     * @returns {string} - La información del vehículo en formato de cadena de texto.
     */
    obtenerInformacion() {
        return `Vehículo: ${this.marca} ${this.modelo}, Año: ${this.año}`;
    }
}

// Crear una instancia de la clase Vehiculo y mostrar la información del vehículo


// Clase que representa un automóvil
class Automovil extends Vehiculo {
    /**
     * Constructor de la clase Automovil.
     * @param {string} marca - La marca del automóvil.
     * @param {string} modelo - El modelo del automóvil.
     * @param {number} año - El año de fabricación del automóvil.
     * @param {string} color - El color del automóvil.
     * @param {number} cilindrada - La cilindrada del motor del automóvil.
     * @param {number} potencia - La potencia del motor del automóvil.
     * @param {number} numPuertas - El número de puertas del automóvil.
     * @param {number} numAsientos - El número de asientos del automóvil.
     * @param {string} tipoTransmision - El tipo de transmisión del automóvil.
     */
    constructor(marca, modelo, año, color, cilindrada, potencia, numPuertas, numAsientos, tipoTransmision) {
        super(marca, modelo, año); 
        this.color = color;
        this.cilindrada = cilindrada;
        this.potencia = potencia;
        this.numPuertas = numPuertas;
        this.numAsientos = numAsientos;
        this.tipoTransmision = tipoTransmision;
    }

    /**
     * Método para obtener la información del automóvil.
     * @returns {string} - La información del automóvil en formato de cadena de texto.
     */
    obtenerInformacion() {
        return `Automóvil: ${this.marca} ${this.modelo}, Año: ${this.año}, Color: ${this.color}, Cilindrada: ${this.cilindrada}, Potencia: ${this.potencia}, Numero de puertas: ${this.numPuertas}, Numero de asientos: ${this.numAsientos}, Tipo de transmisión: ${this.tipoTransmision}`;
        
    }
}
const automóvil = new Automovil ('Chevrolet', 'Sail', 2022, 'Gris', 1400, 100, 4, 5, 'Manual');

console.log(automóvil.obtenerInformacion());

// Clase que representa una motocicleta
class Motocicleta extends Vehiculo {
    /**
     * Constructor de la clase Motocicleta.
     * @param {string} marca - La marca de la motocicleta.
     * @param {string} modelo - El modelo de la motocicleta.
     * @param {number} año - El año de fabricación de la motocicleta.
     * @param {string} color - El color de la motocicleta.
     * @param {number} cilindrada - La cilindrada del motor de la motocicleta.
     * @param {number} potencia - La potencia del motor de la motocicleta.
     * @param {number} numRuedas - El número de ruedas de la motocicleta.
     * @param {string} tipo - El tipo de motocicleta (deportiva, touring, etc.).
     */
    constructor(marca, modelo, año, color, cilindrada, potencia, numRuedas, tipo) {
        super(marca, modelo, año);
        this.color = color;
        this.cilindrada = cilindrada;
        this.potencia = potencia;
        this.numRuedas = numRuedas;
        this.tipo = tipo;
    }

    /**
     * Método para obtener la información de la motocicleta.
     * @returns {string} - La información de la motocicleta en formato de cadena de texto.
     */
    obtenerInformacion() {
        return `Motocicleta: ${this.marca} ${this.modelo}, Año: ${this.año}, Color: ${this.color}, Cilindrada: 
        ${this.cilindrada}, Potencia: ${this.potencia}, Número de Ruedas: ${this.numRuedas}, Tipo: ${this.tipo}`;
       
    }
}

const yamahaDT = new Motocicleta('Yamaha', 'DT', 2022, 'Azul', 250, 30, 2, 'Enduro');


console.log(yamahaDT.obtenerInformacion());


// Clase que representa un camión
class Camion extends Vehiculo {
    /**
     * Constructor de la clase Camion.
     * @param {string} marca - La marca del camión.
     * @param {string} modelo - El modelo del camión.
     * @param {number} año - El año de fabricación del camión.
     * @param {string} color - El color del camión.
     * @param {number} cilindrada - La cilindrada del motor del camión.
     * @param {number} potencia - La potencia del motor del camión.
     * @param {number} numEjes - El número de ejes del camión.
     * @param {number} capacidadCarga - La capacidad de carga del camión en toneladas.
     * @param {string} tipoCarroceria - El tipo de carrocería del camión (remolque, furgón, etc.).
     */
    constructor(marca, modelo, año, color, cilindrada, potencia, numEjes, capacidadCarga, tipoCarroceria) {
        super(marca, modelo, año);
        this.color = color;
        this.cilindrada = cilindrada;
        this.potencia = potencia;
        this.numEjes = numEjes;
        this.capacidadCarga = capacidadCarga;
        this.tipoCarroceria = tipoCarroceria;
    }

    /**
     * Método para obtener la información del camión.
     * @returns {string} - La información del camión en formato de cadena de texto.
     */
    obtenerInformacion() {
        return `Camión: ${this.marca} ${this.modelo}, Año: ${this.año}, Color: ${this.color}, Cilindrada: ${this.cilindrada}, Potencia: ${this.potencia}, Número de Ejes: ${this.numEjes}, Capacidad de Carga:
         ${this.capacidadCarga} toneladas, Tipo de Carrocería: ${this.tipoCarroceria}`;
    }
}
// Crear una instancia de la clase Camion (Ford)
const camionFord = new Camion('Ford', 'F-150', 2023, 'Blanco', 5000, 300, 2, 5, 'Remolque');

// Mostrar la información del camión Ford
console.log(camionFord.obtenerInformacion());


// Clase que representa un autobús
class Autobus extends Vehiculo {
    /**
     * Constructor de la clase Autobus.
     * @param {string} marca - La marca del autobús.
     * @param {string} modelo - El modelo del autobús.
     * @param {number} año - El año de fabricación del autobús.
     * @param {string} color - El color del autobús.
     * @param {number} cilindrada - La cilindrada del motor del autobús.
     * @param {number} potencia - La potencia del motor del autobús.
     * @param {number} capacidadPasajeros - La capacidad de pasajeros del autobús.
     * @param {string} tipoCombustible - El tipo de combustible del autobús.
     * @param {string} tipoMotor - El tipo de motor del autobús (diésel, gasolina, eléctrico, etc.).
     */
    constructor(marca, modelo, año, color, cilindrada, potencia, capacidadPasajeros, tipoCombustible, tipoMotor) {
        super(marca, modelo, año);
        this.color = color;
        this.cilindrada = cilindrada;
        this.potencia = potencia;
        this.capacidadPasajeros = capacidadPasajeros;
        this.tipoCombustible = tipoCombustible;
        this.tipoMotor = tipoMotor;
    }

    /**
     * Método para obtener la información del autobús.
     * @returns {string} - La información del autobús en formato de cadena de texto.
     */
    obtenerInformacion() {
        return `Autobús: ${this.marca} ${this.modelo}, Año: ${this.año}, Color: ${this.color}, Cilindrada: ${this.cilindrada}, Potencia: ${this.potencia}, Capacidad de Pasajeros: 
        ${this.capacidadPasajeros}, Tipo de Combustible: ${this.tipoCombustible}, Tipo de Motor: ${this.tipoMotor}`;
    }
}
const autobus = new Autobus('Mercedes-Benz', 'Sprinter', 2022, 'Amarillo', 3000, 150, 20, 'Diésel', 'Convencional');
console.log(autobus.obtenerInformacion());


// Clase que representa una bicicleta
class Bicicleta extends Vehiculo {
    /**
     * Constructor de la clase Bicicleta.
     * @param {string} marca - La marca de la bicicleta.
     * @param {string} modelo - El modelo de la bicicleta.
     * @param {number} año - El año de fabricación de la bicicleta.
     * @param {string} tipo - El tipo de bicicleta (montaña, carretera, urbana, etc.).
     * @param {number} numMarchas - El número de marchas de la bicicleta.
     * @param {string} material - El material del que está hecha la bicicleta (aluminio, acero, carbono, etc.).
     * @param {string} suspencion - El tipo de suspensión de la bicicleta (delantera, trasera, doble, rígida, etc.).
     * @param {string} frenos - El tipo de frenos de la bicicleta (disco, v-brake, caliper, etc.).
     * @param {string} tipoManubrio - El tipo de manubrio de la bicicleta (recto, curvo, doble altura, etc.).
     */
    constructor(marca, modelo, año, tipo, numMarchas, material, suspencion, frenos, tipoManubrio) {
        super(marca, modelo, año);
        this.tipo = tipo;
        this.numMarchas = numMarchas;
        this.material = material;
        this.suspencion = suspencion;
        this.frenos = frenos;
        this.tipoManubrio = tipoManubrio;
    }

    /**
     * Método para obtener la información de la bicicleta.
     * @returns {string} - La información de la bicicleta en formato de cadena de texto.
     */
    obtenerInformacion() {
        return `Bicicleta: ${this.marca} ${this.modelo}, Año: ${this.año}, Tipo: ${this.tipo}, Número de Marchas: ${this.numMarchas}, Material: ${this.material}, Suspensión: ${this.suspencion}, Frenos: ${this.frenos},
         Tipo de Manubrio: ${this.tipoManubrio}`; 
    }
}
const bicicleta = new Bicicleta('Marca', 'Modelo', 2023, 'Montaña', 21, 'Aluminio', 'Delantera', 'Disco', 'Recto');
console.log(bicicleta.obtenerInformacion());
/**
 * Por favor no borrar el código que hasta de aqui en adelante.
 */

// Exportar las funciones para su uso en otros archivos.
 
  module.exports = { 
    sumArray, 
    filterEvenNumbers, 
    findMaxNumber, 
    toUpperCaseStrings, 
    calculateAverage, 
    sortNumbersAscending, 
    findFirstElement, 
    countElements, 
    concatenateArrays, 
    squareNumbers,
    agregarHabilidad,
    calcularDuracionTotal,
    buscarPeliculas,
    calcularPromedioPuntajes,
    filtrarPorAño,
    calcularPromedioDuracionPorGenero,
    Vehiculo, Automovil, Motocicleta, Camion, Autobus, Bicicleta
  }
  /**
     * Método para obtener la información del autobús.
     * @returns {string} - La información del autobús en formato de cadena de texto.
     */