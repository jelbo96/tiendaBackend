# tiendaBackend
 
 Api rest para tienda de prueba bsale, esto es parte de un ejercicio para mostrar una tienda online, el repositorio frontend se puede encontrar en <code>https://github.com/jelbo96/tiendaFrontend</code>

### Instrucciones 

Nota: Como requisito es necesario tener instalado node.js. Luego se pueden utilizar los siguientes comandos.

- Instalar los paquetes con  <code>npm install</code>
- Correr con <code>node index.js</code> (se ejecutará en el puerto 3000)

### Endpoints disponibles (metodo GET)
- <code>http://localhost:3000/products</code> Retorna todos los productos 

- <code>http://localhost:3000/products/categories</code> Retorna las categorías de productos

- <code>http://localhost:3000/products?category=ID</code>  Donde <code>ID</code> es el id de una categoría específica, retorna todos los productos que corresponden a una categoría.

- <code>http://localhost:3000/products?text=texto</code>  Donde <code>texto</code> es un string de búsqueda, retorna todos los elementos cuyo nombre contiene <code>texto</code>.

Estos endpoint tambien se pueden acceder desde el servidor desplegado en heroku, reemplazando <code>http://localhost:3000/</code> por <code>https://calm-depths-40785.herokuapp.com/</code>


