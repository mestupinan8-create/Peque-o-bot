export interface QAItem {
  question: string
  answer: string
}

export const qaList: QAItem[] = [
  {
    question: '¿Qué es un microservicio?',
    answer: 'Un microservicio es un servicio independiente y autónomo que forma parte de una aplicación más grande. En lugar de tener una única aplicación monolítica, la aplicación se descompone en múltiples servicios más pequeños, cada uno con responsabilidad propia.'
  },
  {
    question: '¿Para qué sirve JavaScript?',
    answer: 'JavaScript es esencial para brindar interactividad a las páginas web. Se usa en frontend para interfaces dinámicas, en backend (Node.js), en aplicaciones móviles y más. Permite desde efectos UI hasta lógica compleja y comunicación con servidores.'
  },
  {
    question: 'Variables en JavaScript (const, let, var)',
    answer: 'const: declara constantes que no pueden reasignarse; let: declara variables con alcance de bloque; var: forma antigua con alcance de función, más propensa a errores.'
  },
  {
    question: 'Diferencias entre JavaScript y TypeScript',
    answer: 'TypeScript es un superconjunto de JavaScript que añade tipado estático y comprobación en tiempo de compilación. TypeScript compila a JavaScript y facilita la escalabilidad en proyectos grandes.'
  },
  {
    question: 'Métodos de arrays en JavaScript',
    answer: 'push(e...): añade al final; pop(): elimina último; unshift(e...): añade al inicio; shift(): elimina primero; splice(start, count, ...items): modifica array; sort(): ordena (por defecto lexicográfico).'
  },
  {
    question: '¿Qué es ES6?',
    answer: 'ES6 (ECMAScript 2015) introdujo let/const, funciones flecha, clases, promesas, módulos, y otras mejoras que modernizaron JavaScript.'
  },
  {
    question: '¿Qué es la programación orientada a objetos (POO)?',
    answer: 'La POO es un paradigma que organiza el código en objetos que combinan estado y comportamiento. Principios: encapsulación, herencia, polimorfismo y abstracción.'
  },
  {
    question: '¿Qué es la encapsulación?',
    answer: 'Encapsulación es ocultar detalles internos de una clase y exponer una interfaz pública, por ejemplo mediante getters y setters.'
  },
  {
    question: '¿Qué es la herencia en POO?',
    answer: 'La herencia permite que una clase herede propiedades y comportamientos de otra clase, favoreciendo la reutilización del código.'
  },
  {
    question: '¿Qué es el polimorfismo?',
    answer: 'El polimorfismo es la capacidad de un objeto de tomar muchas formas, permitiendo que diferentes clases respondan de manera distinta a la misma llamada de método.'
  },
  {
    question: '¿Qué es la abstracción?',
    answer: 'La abstracción consiste en ocultar los detalles de implementación y mostrar solo las características esenciales de un objeto.'
  },
  {
    question: '¿Qué son las interfaces en POO?',
    answer: 'Una interfaz es una estructura que define un contrato de métodos que una clase debe implementar, sin imponer una jerarquía de herencia.'
  },
  {
    question: '¿Qué es una clase en POO?',
    answer: 'Una clase es una plantilla o definición que describe las propiedades (atributos) y comportamientos (métodos) de los objetos.'
  },
  {
    question: '¿Qué es un objeto en POO?',
    answer: 'Un objeto es una instancia concreta de una clase, con su propio estado y comportamiento.'
  },
  {
    question: '¿Qué es la sobrecarga de métodos?',
    answer: 'La sobrecarga de métodos ocurre cuando varios métodos en la misma clase tienen el mismo nombre pero diferentes parámetros.'
  },
  {
    question: '¿Qué es la sobrescritura de métodos?',
    answer: 'La sobrescritura de métodos sucede cuando un método de una clase hija reemplaza un método de la clase base con la misma firma.'
  },
  {
    question: '¿Qué es React?',
    answer: 'React es una biblioteca de JavaScript para construir interfaces de usuario, especialmente para aplicaciones web de una sola página.'
  },
  {
    question: '¿Qué es TypeScript?',
    answer: 'TypeScript es un lenguaje de programación que extiende JavaScript añadiendo tipos estáticos opcionales.'
  },
  {
    question: '¿Qué es Node.js?',
    answer: 'Node.js es un entorno de ejecución de JavaScript que permite ejecutar código JavaScript fuera del navegador, en el servidor.'
  },
  {
    question: '¿Qué son las promesas en JavaScript?',
    answer: 'Las promesas son objetos que representan la eventual finalización o fracaso de una operación asíncrona.'
  }
]
