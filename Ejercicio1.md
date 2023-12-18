### Ejercicio 1

1 . Que problemas detectas en la operación y razona la respuesta.

En la operación detecto varios problemas que pueden tener un impacto en un futuro y requerir la módificación de la lógica:

- **Tipos de servicio**: Actualmente existen 2 tipos de servicio, si en un futuro se agregan más servicios se va a tener que modificar el código
- **Tipos de contenido**: Actualmente existen 1 tipos de contenido multimedia, si en un futuro se agregan más tipos se va a tener que modificar el código
- **Dependencia estructura de clases**: Actualmente la operación getTotal depende completamente de las clases, sus relaciones y sus heréncias

2 . Propón una solución alternativa (también en pseudocódigo del mismo estilo) que corrija los problemas de la operación getTotal de RegisteredUser que has detectado en la pregunta anterior. Realiza todos los cambios que consideres necesarios en cualquiera de las clases del modelo del enunciado

La solución propuesta para que en un futuro el impacto sea menor es implementar un metodo getPrice en los servicios que tenga la responsabilidad de calcular el coste del servicio según los requisitos. De este modo si se añade un nuevo tipo de servicio solo se tendrá que desarrollar la lógica de sus requisitos sin modificar el resto y quitamos la responsabilidad del cálculo a la clase RegisteredUser.

Por otro lado con esta solución, delegando al servicio el cálculo del coste, se facilitará el desarrollo futuro si hay nuevos requisitos para calcular el precio del servicio o si se introducen nuevos tipos de contenido

El pseudocódigo de la operación getTotal de la clase Registered User quedaría de la siguiente manera:

```js
class RegisteredUser {
  constructor(services = []) {
    this.services = services
  }
  getTotal() {
    let total = 0
    this.services.forEach((service) => {
      total += service.getPrice()
    })
    return total
  }
}
```

El pseudocódigo de la clase Service y sus tipos DownloadService y StreamingService, con la operación getPrice y applyAdditionalFee(para los requisitos actuales) quedaría de la siguiente manera:

```js
class Service {
  constructor(timestamp, multimediaContent){
    this.timestamp = timestamp;
    this.multimediaContent = multimediaContent
  }
  applyAdditionalFee(totalPrice) {
    if (typeof this.multimediaContent == PremiumContent) {
        totalPrice += multimediaContent.additionalFee;
    }
    return totalPrice;
  }
}
class StreamingService extends Service {
  constructor(){
    ...
  }
  getPrice() {
    let totalPrice = this.multimediaContent.streamingPrice;
    return this.applyAdditionalFee(totalPrice);
  }
}
class DownloadService extends Service {
  constructor(){
    ...
  }
  getPrice() {
    let totalPrice = this.multimediaContent.downloadPrice;
    return this.applyAdditionalFee(totalPrice);
  }
}
```
