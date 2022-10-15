# backend-bsale
**Productos de la tienda - API**

API REST que permite obtener los productos y las categorías de productos ofrecidos en la tienda en línea. Se han utilizado Node.js y Express para crear un servidor que pueda conectarse a la base de datos (MySQL) y manejar las peticiones de los clientes.
***
## Endpoints
La url principal para acceder a la API es:
* https://reto-bsale-backend.herokuapp.com/
***
### Productos
Un producto es un objeto con las siguientes propiedades:
* id: ID numérico del producto
* name: Nombre comercial del producto
* url_image: Imagen del producto
* price: Precio del producto
* discount: Porcentaje de descuento del producto
* category: ID numérico de la categoría del producto

#### Todos los productos
**GET** /products

***Respuesta***
```
{
"products":
    [
        {
            "id": 5,
            "name": "ENERGETICA MR BIG",
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
            "price": 1490,
            "discount": 20,
            "category": 1
        },
        ...
        ...
        ...
        {
            "id": 14,
            "name": "PISCO ESPIRITU DEL ELQUI 40º",
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/espiritu8936.jpg",
            "price": 5990,
            "discount": 20,
            "category": 2
        }
    ]
}
```

### Productos por categoria
**GET** products/category/:id

**Parámetros**

* id: Clave primaria de una categoría en la base de datos

**Respuesta**
```
{
"products":
    [
        {
            "id": 98,
            "name": "Cerveza Escudo Normal LATA 350CC",
            "url_image": "",
            "price": 600,
            "discount": 0,
            "category": 6
        },
        {
            "id": 99,
            "name": "Cerveza Escudo Sin Filtrar LATA 350CC",
            "url_image": "",
            "price": 800,
            "discount": 0,
            "category": 6
        }
    ]
}
```

### Productos por nombre
**GET** products/:name

**Parámetros**

* name: Cadena de texto que tiene el nombre (o parte del nombre) de uno o varios productos

**Respuesta**
```
{
"products":
    [
        {
            "id": 54,
            "name": "Papas Fritas Lisas Bolsa Grande",
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/papaslisasgrande7128.jpg",
            "price": 1490,
            "discount": 0,
            "category": 5
        },
        {
            "id": 55,
            "name": "Papas Fritas Bolsa Pequeña",
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/papaslisas7271.jpg",
            "price": 500,
            "discount": 0,
            "category": 5
        },
        {
            "id": 56,
            "name": "Papas Fritas Tarro",
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/78028005335657432.jpg",
            "price": 1990,
            "discount": 0,
            "category": 5
        }
    ]
}
```


### Producto individual
**GET** product/:id

**Parámetros**

* id: Clave primaria de un producto en la base de datos

**Respuesta**
```
{
"product": 
    {
        "id": 54,
        "name": "Papas Fritas Lisas Bolsa Grande",
        "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/papaslisasgrande7128.jpg",
        "price": 1490,
        "discount": 0,
        "category": 5
    }
}
```
***
### Categorías
Las categorias son representadas a través de objetos con las propiedades:
* id: ID numérico de la categoría
* name: Nombre descriptivo de la categoría
 
#### Todas las categorías
**GET** categories/

**Respuesta**
```
{
    "categories":
        [
            {
                "id": 1,
                "name": "bebida energetica"
            },
            ...
            ...
            ...
            {
                "id": 7,
                "name": "vodka"
            }
        ]
}
```

#### Todas las categorías
**GET** category/:id

**Parametros**

* id: Clave primaria de la categoría en la base de datos

**Respuesta**
```
{
    "category":
        {
            "id": 1,
            "name": "bebida energetica"
        }
}
```
