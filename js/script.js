/* ==========================================
   DULCE ENCANTO
   JAVASCRIPT
   ========================================== */


/* ==========================================
   PRODUCTOS
   ========================================== */

const productos = [

    /* --------------------------------------
       PASTELES - 5
       -------------------------------------- */

    {
        nombre: "Strawberry Candy Cake",
        categoria: "pasteles",
        imagen: "img/Strawberry Candy Cake.jfif",
        descripcion: "Suave pastel de vainilla relleno con fresas frescas y crema, decorado con una deliciosa cobertura.",
        porcion: "$2.00",
        entero: "$22.00"
    },

    {
        nombre: "Chocolate Dream Cake",
        categoria: "pasteles",
        imagen: "img/Chocolate Dream Cake.jfif",
        descripcion: "Delicioso pastel de chocolate con relleno cremoso y una cobertura de chocolate irresistible.",
        porcion: "$2.50",
        entero: "$25.00"
    },

    {
        nombre: "Golden Caramel Crunch Cake",
        categoria: "pasteles",
        imagen: "img/Golden Caramel Crunch Cake.jfif",
        descripcion: "Pastel de chocolate relleno con caramelo cremoso y trozos crujientes, cubierto con una suave crema de chocolate y un irresistible toque de caramelo.",
        porcion: "$2.50",
        entero: "$25.00"
    },

    {
        nombre: "Peach Paradise Cake",
        categoria: "pasteles",
        imagen: "img/Peach Paradise Cake.jfif",
        descripcion: "Esponjoso pastel de vainilla relleno con crema y duraznos dulces, decorado con una ligera cobertura que realza su sabor fresco y afrutado.",
        porcion: "$2.25",
        entero: "$23.00"
    },

    {
        nombre: "Cream Dream Cake",
        categoria: "pasteles",
        imagen: "img/Cream Dream Cake.jfif",
        descripcion: "Delicioso pastel de chocolate y vainilla combinado con galletas tipo Oreo, relleno de una suave crema que lo convierte en el favorito de los amantes de las galletas.",
        porcion: "$2.50",
        entero: "$25.00"
    },


    /* --------------------------------------
       CUPCAKES - 5
       -------------------------------------- */

    {
        nombre: "Chocolate Strawberry Delight",
        categoria: "cupcakes",
        imagen: "img/Chocolate Strawberry Delight.jfif",
        descripcion: "Cupcake de chocolate con fresa cubierta de chocolate",
        porcion: "$1.25"
    },

    {
        nombre: "Black Forest Cherry Cupcake",
        categoria: "cupcakes",
        imagen: "img/Black Forest Cherry Cupcake.jfif",
        descripcion: "Relleno de chocolate cremoso..",
        porcion: "$1.50"
    },

    {
        nombre: "Peanut Butter Crunch Cupcake",
        categoria: "cupcakes",
        imagen: "img/Peanut Butter Crunch Cupcake.jfif",
        descripcion: "Cupcake de chocolate con frosting de mantequilla de maní",
        porcion: "$1.25"
    },

    {
        nombre: "Red Velvet Bliss",
        categoria: "cupcakes",
        imagen: "img/Red Velvet Bliss.jfif",
        descripcion: "Cupcake Red Velvet con frosting de queso crema",
        porcion: "$1.50"
    },

    {
        nombre: "Vanilla Cloud Cupcake",
        categoria: "cupcakes",
        imagen: "img/Vanilla Cloud Cupcake.jfif",
        descripcion: "Perfecto para fiestas y celebraciones.",
        porcion: "$1.50"
    },


    /* --------------------------------------
       POSTRES - 5
       -------------------------------------- */

    {
        nombre: "Pink Paradise Cheesecake",
        categoria: "postres",
        imagen: "img/Pink Paradise Cheesecake.jfif",
        descripcion: "Nuestro cheesecake clásico cubierto con una deliciosa salsa de fresa y fresas frescas, logrando el equilibrio perfecto entre dulzura y frescura.",
        porcion: "$1.95",
        entero: "$20.00"
    },

    {
        nombre: "Classic Chocolate Brownie",
        categoria: "postres",
        imagen: "img/Classic Chocolate Brownie.jfif",
        descripcion: "Delicioso brownie de chocolate con una generosa cobertura de chocolate cremoso. Ideal para los amantes del cacao y los sabores intensos.",
        porcion: "$1.50",
        entero: "$12.00"
    },

    {
        nombre: "Golden Zest Cheesecake",
        categoria: "postres",
        imagen: "img/Golden Zest Cheesecake.jfif",
        descripcion: "Cheesecake suave y cremoso con un refrescante toque de limón, ideal para quienes disfrutan de sabores cítricos y ligeros.",
        porcion: "$1.50",
        entero:"18.00"
    },

    {
        nombre: "Fresas con Crema",
        categoria: "postres",
        imagen: "img/fresas con crema.jfif",
        descripcion: "Fresas frescas acompañadas de una suave y deliciosa crema.",
        porcion: "$2.00"
    },

    {
        nombre: "Cookies & Cream Cookie",
        categoria: "postres",
        imagen: "img/Cookies & Cream Cookie.jfif",
        descripcion: "Deliciosa cookie con cremosa cobertura de vainilla y trozos de Oreo triturada para un equilibrio perfecto entre dulzura y textura",
        porcion: "$1.75"
    }

];


/* ==========================================
   CONTENEDOR
   ========================================== */

const productContainer =
    document.getElementById("productContainer");


/* ==========================================
   CREAR TARJETA
   ========================================== */

function crearTarjeta(producto, posicion) {

    const tarjeta = document.createElement("div");

    tarjeta.classList.add("producto");

    tarjeta.style.animationDelay =
        `${posicion * 0.08}s`;


    tarjeta.innerHTML = `

        <div class="imagen-producto">

            <img
                src="${producto.imagen}"
                alt="${producto.nombre}"
            >

        </div>


        <div class="info-producto">

            <h4>
                ${producto.nombre}
            </h4>


            <p>
                ${producto.descripcion}
            </p>


            <span class="precio">

                Porción: ${producto.porcion}

                ${
                    producto.entero
                    ? `<br>Entero: ${producto.entero}`
                    : ""
                }

            </span>

        </div>

    `;


    return tarjeta;
}


/* ==========================================
   MOSTRAR UNA CATEGORÍA
   ========================================== */

function mostrarCategoria(categoria) {

    productContainer.innerHTML = "";


    const productosFiltrados =
        productos.filter(
            producto =>
                producto.categoria === categoria
        );


    productosFiltrados.forEach(
        (producto, index) => {

            const tarjeta =
                crearTarjeta(
                    producto,
                    index
                );

            productContainer.appendChild(
                tarjeta
            );

        }
    );
}


/* ==========================================
   MOSTRAR TODOS
   ========================================== */

function mostrarTodos() {

    productContainer.innerHTML = "";


    /*
       El arreglo ya está ordenado así:

       1. 5 pasteles
       2. 5 cupcakes
       3. 5 postres
    */


    productos.forEach(
        (producto, index) => {

            const tarjeta =
                crearTarjeta(
                    producto,
                    index
                );

            productContainer.appendChild(
                tarjeta
            );

        }
    );
}


/* ==========================================
   BOTONES DE CATEGORÍAS
   ========================================== */

const filtros =
    document.querySelectorAll(".filter");


filtros.forEach(
    boton => {

        boton.addEventListener(
            "click",
            function () {


                /* Quitar active */

                filtros.forEach(
                    btn => {

                        btn.classList.remove(
                            "active"
                        );

                    }
                );


                /* Activar botón seleccionado */

                this.classList.add("active");


                /* Obtener categoría */

                const categoria =
                    this.dataset.category;


                /* Mostrar productos */

                if (categoria === "todos") {

                    mostrarTodos();

                } else {

                    mostrarCategoria(
                        categoria
                    );

                }

            }
        );

    }
);


/* ==========================================
   IMPORTANTE
   ========================================== */

/*
   Cuando se abre la página:

   NO SE MUESTRA NINGÚN PRODUCTO.
*/

productContainer.innerHTML = "";


/* ==========================================
   MENÚ PARA CELULAR
   ========================================== */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");


if (menuBtn && navLinks) {

    menuBtn.addEventListener(
        "click",
        function () {

            navLinks.classList.toggle(
                "show"
            );

        }
    );


    /* Cerrar menú al seleccionar una opción */

    const enlaces =
        navLinks.querySelectorAll("a");


    enlaces.forEach(
        enlace => {

            enlace.addEventListener(
                "click",
                function () {

                    navLinks.classList.remove(
                        "show"
                    );

                }
            );

        }
    );

}


/* ==========================================
   FORMULARIO DE PEDIDO
   ========================================== */

const orderForm =
    document.getElementById("orderForm");

const formMessage =
    document.getElementById("formMessage");


if (orderForm && formMessage) {

    orderForm.addEventListener(
        "submit",
        function (evento) {

            evento.preventDefault();


            const nombre =
                document.getElementById(
                    "nombre"
                ).value;


            formMessage.textContent =
                `¡Gracias, ${nombre}! Tu solicitud ha sido recibida. Nos pondremos en contacto contigo.`;

            formMessage.style.display =
                "block";


            orderForm.reset();

        }
    );

}