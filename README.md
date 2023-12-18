> [!NOTE]  
> **REACT MEET UP**
> Prueba técnica Frontend - Axpe Consulting
> Nombre: Roger Vilà Mateo
> Email: roger.vila.mateo@gmail.com

# Ejercicio 1

El ejercicio 1 está resuelto en el siguiente enlace [Ejercicio 1](./Ejercicio1.md)

# Ejercicio 2

### Contexto

A partir de un proyecto basado en una aplicación de 'meetup' que se encuentra en un estado bastante inicial, se requiere terminar el desarrollo a partir de los requisitos y condiciones propuestas. La aplicación consta de 3 vistas a desarrollar:

1. Una pantalla inicial dónde se ven todos los meetups que tenemos. Tanto los iniciales como los nuevos que se añadan
2. Una segunda pantalla con un formulario para añadir nuevos meetups
3. Una tercera pantalla dónde se ven todos los meetups que hemos seleccionado como favoritos.

### Requisitos

1. Para el header se requiere una animación para tener un acceso rápido a las distintas páginas cuando hacemos scroll. Se quiere que cuando hacemos scroll down, este tiene que desaparecer y cuando hacemos scroll up tiene que volver a aparecer en la posición de la página dónde te encuentres
2. Desde el header se puede navegar a las distintas páginas, pero por temas de SEO se requiere que esta navegación se vea reflejada en la url. (Ejemplo: la página de favoritos podría ser /favorites)
3. El botón de añadir a favoritos no está funcionando. Implementa la lógica para añadir y quitar de favoritos
4. Implementación de algún test. Puede ser e2e, unitario o funcional. En el proyecto encontrarás algunos test
   que el programador que inició el proyecto, empezó a hacer.

> [!IMPORTANT]  
> Las versiones de node y npm utilizadas para el desarrollo del proyecto han sido:
> **node**: v18.19.0 **npm**: 10.2.3
>
> Para poder ejecutar el proyecto sigue los siguientes pasos
>
> 1. clonar el repositorio y situarnos dentro el proyecto:
>    git clone https://github.com/rvila89/react-meetup.git
>    cd react-meetup
> 2. ejecutar 'npm install' para instalar todas las dependencias
> 3. ejecutar 'npm start' para inicializar la aplicación
>
> Para poder ejecutar las pruebas:
>
> 1. 'npm run test' para ejecutar todos los tests
> 2. 'npm run test:coverage' para ejecutar todos los tests y ver el reporte
