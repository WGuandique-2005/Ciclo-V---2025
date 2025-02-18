// Definición de una clase llamada MyComponent que extiende de HTMLElement
class MyComponent extends HTMLElement {
    // Constructor de la clase
    constructor() {
        // Llama al constructor de la clase padre (HTMLElement)
        super();
    }

    // Método que se llama cuando el componente se agrega al DOM
    connectedCallback() {
        // Establece el contenido HTML del componente
        this.innerHTML = "<h1>Mi Componente</h1>";
    }
}

// Define un nuevo elemento personalizado llamado 'my-component' asociado con la clase MyComponent
customElements.define('my-component', MyComponent);