/*Crear el array de objetos "Pizzas". 🍕
👉 Debemos crear 6 objetos como mínimo.
👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

🔥 Crear una iteración del array que imprima en consola:
a) Las pizzas que tengan un id impar.
b) ¿Hay alguna pizza que valga menos de $600?
c) Los nombres de todos las pizzas.
d) Los precios de las pizzas.
e) El nombre de cada pizza con su respectivo precio.

Cada respuesta debe ser, como siempre, usuario friendly. 
Si (como en el punto B), la respuesta es un booleano, no imprimir el booleano. 
Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 💸*/


const Pizzas = [
    { id:1 ,nombre:'De mozzarella' , ingredientes:'harina,salsa de tomate,mozzarella' , precio:500},
    { id:2 ,nombre:'De jamon' , ingredientes:'harina,salsa de tomate,mozzarella,jamon' , precio:600},
    { id:3 ,nombre:'De calabresa' , ingredientes:'harina,salsa de tomate,mozzarella,calabresa' , precio:700},
    { id:4 ,nombre:'De atun' , ingredientes:'harina,salsa de tomate,mozzarella,atun' , precio:800},
    { id:5 ,nombre:'De carne' , ingredientes:'harina,salsa de tomate,mozzarella,carne' , precio:900},
    { id:6 ,nombre:'De pollo' , ingredientes:'harina,salsa de tomate,mozzarella,pollo' , precio:1000},
]

Pizzas.forEach( (pizza) => {
    //calcular el id impar
    let idImpar = pizza.id % 2
    if ( idImpar !== 0) {
        console.log("Estas pizzas tienen un id impar: "+pizza.nombre)
    }

    //mostrar pizza menor a $600
    if(pizza.precio < 600){
        console.log("Esta pizza vale menos de $600: "+pizza.nombre)
    }

    //mostrar nombres y precios de los productos
    console.log("NOMBRES de las pizzas: "+pizza.nombre)
    console.log("PRECIOS de las pizzas: "+ pizza.precio)

    //mostrar el nombre de la pizza con su respectivo precio
    console.log("Esta pizza: "+pizza.nombre+", tiene un valor de: $"+pizza.precio)
})


