#  BMW | ECommerce 
Página simil a un e-commerce.

Iniciar
Clona el repositorio y haz `npm install` y `npm start` en la carpeta client y checkout-single-subscription. 
Ademas en la carpeta client `npm run server` para levantar nuestro Backend.

ya puedes usar la página! o puedes verla entrado aqui

El Back-end que fue creado con json-server.
Esta libreria nos permite crear una API REST con tan solo un archivo json.


La app tiene seis rutas:

- **'/'** : Landing Page donde me presento.
- **'/home'** : Nuestra Home donde se van a ver todos los vehiculos.
- **'/product/:productId'** : El detalle del vehiculo.
- **'/product/service'** : Info de los servicios prestados por la empresa.
- **'/product/contacto'** : El formulario de contacto con la empresa.
- **'/product/Garantia'** : Info acerca de la garantia que ofrecer la empresa.
- **'/product/cuidado'** : Info sobre el cuidado recomendado por la empresa.


# Home

En el inicio vas a encontrar distintos modelos (separados por cards) disponibles a la venta. Al hacer click en algun producto vas a poder visualizar la descripción detallada del mismo.

![home1bmw](https://user-images.githubusercontent.com/94568781/206865718-a91854a8-3541-442e-a0ce-b0ba271861a4.jpg)


# Product

![detalles1bmw](https://user-images.githubusercontent.com/94568781/206865742-39d8740a-f78d-4a98-8eb7-b8ebea927920.jpg)
![detalle3bmw](https://user-images.githubusercontent.com/94568781/206865910-b7f9e13e-c5b6-4635-8c1f-4375d4c38c54.jpg)

En ésta seccion vas a tener imagenes junto con algunos detalles del producto, luego vas a tener la descipción detallada junto con las caracteristicas. Entre los detalles se encuentran su imagen, su titulo y su precio. Al final tenemos un boton de compra que al hacer click nos redirige a la plataforma de pago, en este caso con stripe donde podemos hacer el pago con tarjeta. Podes probar con el numero de tarjeta: 4242 4242 4242 4242. Cualquier fecha y cualquier codigo de seg.

![pagobmw](https://user-images.githubusercontent.com/94568781/206865857-1afd4122-91f1-4cf6-be14-5ec62653f659.jpg)


# Service
En la misma podemos ver info acercar de los servicios que ofece la empresa.


# Garantia
En esta seccion visualizamos los detalles que incluye la garantia de la empresa.


# Contacto
En esta pagina vas a encontrar un formulario de contacto donde podes completar con tus datos para poder ser contactado.

![contactobmw](https://user-images.githubusercontent.com/94568781/206865781-69151e7c-6128-4873-8cf2-eeda35c1c3c4.jpg)


# Cuidado
Se muestran informacion acerca del cuidado vehicular. Consejos y tips para mantener un mejor mantenimiento sobre tu bmw.

