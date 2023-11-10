import { Categoria } from "../interfaces/categoria";

export const CATEGORIAS: Categoria[] = [
    {
        nombre: 'Hambuguesas',
        id: 1,
        fotoUrl: "https://okdiario.com/img/2021/05/28/hamburguesa-gourmet.jpg",
        productos: [{
          nombre:"Hamburguesa con queso",
          precio: 1000,
          descripcion: "",
          imagen: "https://quem.com.ar/tienda/wp-content/uploads/2020/12/Grandwich_17-10_-061.jpg"
        },
        {
          nombre:"Hamburguesa especial",
          precio: 1500,
          descripcion: "",
          imagen: "https://www.indisa.es/adjuntos/fichero_147324_20221025.jpg"
        },
        {
          nombre:"Hamburguesa vegana",
          precio: 1300,
          descripcion: "",
          imagen: "https://www.pequerecetas.com/wp-content/uploads/2009/04/hamburguesa-de-garbanzos-casera-receta.jpg"
        },
        {
          nombre:"Hamburguesa celíaca",
          precio: 1250,
          descripcion: "",
          imagen: "https://celiplatos.com/wp-content/uploads/2019/10/DSC0374_Celiplatos-7.jpg"
        },
        {
          nombre:"Hamburguesa americana",
          precio: 3500,
          descripcion: "",
          imagen: "https://www.clarin.com/img/2022/05/27/0HXb0UR0v_2000x1500__1.jpg"
        },]
    },
    {
        nombre: 'Pizzas',
        id: 2,
        fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg",
        productos: [
          {
            nombre: 'Pizza común',
            precio: 1000,
            descripcion: "Pizza.",
            imagen:
              'https://dcdn.mitiendanube.com/stores/001/267/330/products/muzzarella1-ca78bc4301f8cd07c915944985769045-640-0.jpg',
          },
          {
            nombre: 'Pizza especial',
            precio: 1200,
            descripcion: "Típica pizza estilo española, con mucho jamón.",
            imagen:
              'https://assets.unileversolutions.com/recipes-v2/217207.jpg',
          },
          {
            nombre: 'Pizza 3 quesos',
            precio: 1300,
            descripcion: "Pizza que combina los mejores quesos: provolone, muzarella y roquefort.",
            imagen:
              'https://images.hola.com/imagenes/cocina/recetas/20230904238241/pizza-cuatro-quesos/1-299-522/pizzacuatroquesos-adob-t.jpg',
          },
          {
            nombre: 'Pizza napolitana',
            precio: 1400,
            descripcion: "Pizza típica argentina con mucho sabor.",
            imagen:
              'https://assets.elgourmet.com/wp-content/uploads/2023/03/8metlvp345_portada-pizza-1024x686.jpg.webp',
          },
        ]
    },
    {
        nombre: 'Postres',
        id: 3,
        fotoUrl: "https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/article_1200_800_fallback/public/2023-03/postres-perfectos©iStock.jpg?itok=bJkFHkuV",
        productos: [
          {
            nombre: 'Tiramisú',
            precio: 800,
            descripcion: "Clasico tiramisú al estilo italiano.",
            imagen: 'https://img2.rtve.es/v/6897051?w=1600&preview=1684846584492.jpg',
          },
          {
            nombre: 'Chocotorta',
            precio: 800,
            descripcion: "Porción de chocotorta.",
            imagen:
              'https://cocinaabuenashoras.com/files/chocotorta-tarta-de-galletas-y-dulce-de-leche.jpg',
          },
          {
            nombre: 'Turrón de Quaker',
            precio: 800,
            descripcion: "Turrón con avena, chocolate y manteca.",
            imagen:
              'https://assets.elgourmet.com/wp-content/uploads/2023/03/cover_ipk5fgqbdh_eg-pf-platos-turron-de-avena-hi-03.jpg',
          },
          {
            nombre: 'Flan con dulce de leche',
            precio: 900,
            descripcion: "Flan y dulce de leche.",
            imagen:
              'https://www.labrujula24.com/wp-content/uploads/2022/09/flan.jpg',
          },
        ]
    },
    {
        nombre: 'Bebidas',
        id: 4,
        fotoUrl: "https://www.cocacolaep.com/assets/Spain/Blog-Rojo-y-en-Botella/2021/TENDENCIAS-SIN-AZUCAR/RyB_TENDENCIAS-SIN-AZUCAR_G_900x550__FocusFillWzEyMTAsMTA4MCwieCIsMjc4XQ.jpg",
        productos: [{
          nombre: 'Agua',
          precio: 100,
          descripcion: "Agua mineral 500cc",
          imagen:
            'https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3040004_f.jpg',
        },
        {
          nombre: 'Agua Saborizada Naranja',
          precio: 100,
          descripcion: "Agua saborizada marca X 500cc sabor naranja",
          imagen:
            'https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3040113_1_f.jpg',
        },
        {
          nombre: 'Coca-Cola',
          precio: 100,
          descripcion: "Coca-cola común 500cc",
          imagen:
            'https://www.coca-cola.com/content/dam/onexp/cl/es/brands/coca-cola/General-Card-Coca-Cola-Original.jpg',
        },
        {
          nombre: 'Sprite',
          precio: 100,
          descripcion: "Sprite común 500cc",
          imagen:
            'https://acdn.mitiendanube.com/stores/001/144/141/products/whatsapp-image-2021-06-11-at-19-27-201-67e0747fe46cffc7cd16234505623785-640-0.jpeg',
        },
      ]
    }
]
