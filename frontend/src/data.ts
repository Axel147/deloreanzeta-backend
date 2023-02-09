import { Product } from "./app/shared/models/store/products/product";
import { News } from "./app/shared/models/news/news";
import { ProductCategories } from "./app/shared/models/store/category/product-tag";
import { Carousel } from "./app/shared/models/store/carrusel/carousel";
import { Sources } from "./app/shared/models/gallery/gallery";

export const sample_products: Product[] = [
  {
    id: '1',
    name: 'Soy un producto con un maximo de 45 caracteres',
    price: 1400,
    discount: 30,
    category: 'Tazas',
    imageUrl: [
      './assets/store/products/delorean(1).png',
      './assets/store/products/delorean(2).png',
      './assets/store/products/delorean(3).png',
      './assets/store/products/delorean(4).png',
    ],
    description: 'Hola Testing, soy la informacion del producto donde mido la cantidad de caracteres que puedo almacenar sin que se agrande el divisor y controlar que por mas lineas de texto agregue esto va a seguir con el mismo tamaño. Prueba de desarrollo superada, se adapta re bien! Espero que mi pagina pase sus test tambien. Gracias por el esfuerzo y empeño que le estan poniendo al proyecto para que salga bien... Saludos! Sharon.',
    information: ''
  },
  {
    id: '2',
    name: 'Soy un producto con un maximo de 45 caracteres',
    price: 1400,
    discount: 30,
    category: 'Cuadros',
    imageUrl: [
      './assets/store/products/delorean(5).png',
      './assets/store/products/delorean(6).png',
      './assets/store/products/delorean(7).png',
      './assets/store/products/delorean(8).png'
  ],
    description: 'Soy la informacion del producto',
    information: ''
  },
  {
    id: '3',
    name: 'Soy un producto',
    price: 1400,
    discount: 30,
    category: 'Remeras',
    imageUrl: [
      './assets/store/products/delorean(9).png',
      './assets/store/products/delorean(10).png',
      './assets/store/products/delorean(11).jpg',
      './assets/store/products/delorean(12).png'
    ],
    description: 'Soy la descripcion del producto',
    information: ''
  },
  {
    id: '4',
    name: 'Soy un producto',
    price: 1500,
    discount: 30,
    category: 'Tazas',
    imageUrl: [
      './assets/store/products/delorean(1).png',
      './assets/store/products/delorean(2).png',
      './assets/store/products/delorean(3).png',
      './assets/store/products/delorean(4).png'
    ],
    description: 'Soy la descripcion del producto',
    information: ''
  },
  {
    id: '5',
    name: 'Soy un producto',
    price: 1400,
    discount: 30,
    category: 'Cuadros',
    imageUrl: [
      './assets/store/products/delorean(5).png',
      './assets/store/products/delorean(6).png',
      './assets/store/products/delorean(7).png',
      './assets/store/products/delorean(8).png'
    ],
    description: '',
    information: ''
  },
  {
    id: '6',
    name: 'Soy un producto',
    price: 1400,
    discount: 30,
    category: 'Remeras',
    imageUrl: [
      './assets/store/products/delorean(9).png',
      './assets/store/products/delorean(10).png',
      './assets/store/products/delorean(11).png',
      './assets/store/products/delorean(12).png'
    ],
    description: '',
    information: ''
  },
  {
    id: '7',
    name: 'Soy un producto',
    price: 1400,
    discount: 30,
    category: 'Tazas',
    imageUrl: [
      './assets/store/products/delorean(1).png',
      './assets/store/products/delorean(2).png',
      './assets/store/products/delorean(3).png',
      './assets/store/products/delorean(4).png'
    ],
    description: '',
    information: ''
  },
  {
    id: '8',
    name: 'Soy un producto',
    price: 1400,
    discount: 30,
    category: 'Cuadros',
    imageUrl: [
      './assets/store/products/delorean(5).png',
      './assets/store/products/delorean(6).png',
      './assets/store/products/delorean(7).png',
      './assets/store/products/delorean(8).png'
    ],
    description: '',
    information: ''
  },
  {
    id: '9',
    name: 'Soy un producto',
    price: 1400,
    discount: 30,
    category: 'Remeras',
    imageUrl: [
      './assets/store/products/delorean(9).png',
      './assets/store/products/delorean(10).png',
      './assets/store/products/delorean(11).png',
      './assets/store/products/delorean(12).png'
    ],
    description: '',
    information: ''
  },
  {
    id: '10',
    name: 'Soy un producto',
    price: 1400,
    discount: 30,
    category: 'Tazas',
    imageUrl: [
      './assets/store/products/delorean(1).png',
      './assets/store/products/delorean(2).png',
      './assets/store/products/delorean(3).png',
      './assets/store/products/delorean(4).png'
    ],
    description: '',
    information: ''
  }
]

export const sample_productTags: ProductCategories[] = [
  { id: 1, name: 'Tazas' },
  { id: 2, name: 'Cuadros'},
  { id: 3, name: 'Remeras'},
  { id: 4, name: 'Funkos'},
]

export const sample_news: News[] = [
  {
    id: '1',
    title: 'Soy una noticia con un maximo de 51 caracteres',
    description: 'En esta sección, para que quede prolijo deben poner texto con similar cantidad de caracteres 🤗',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At officia nam aut consectetur odit in ea sit nihil corrupti officiis accusamus et deserunt voluptatum dolorum natus, ullam qui sapiente tempore animi, est provident dolore, aspernatur quia. Natus facere amet quam.',
    imageUrl: './assets/news/news1.jpg'
  },
  {
    id: '2',
    title: 'Soy una noticia con un maximo de 51 caracteres',
    description: 'En esta sección, para que quede prolijo deben poner texto con similar cantidad de caracteres 🙈',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At officia nam aut consectetur odit in ea sit nihil corrupti officiis accusamus et deserunt voluptatum dolorum natus, ullam qui sapiente tempore animi, est provident dolore, aspernatur quia. Natus facere amet quam.',
    imageUrl: './assets/news/news2.jpg'
  },
  {
    id: '3',
    title: 'Soy una noticia con un maximo de 51 caracteres',
    description: 'En esta sección, para que quede prolijo deben poner texto con similar cantidad de caracteres 🙈',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At officia nam aut consectetur odit in ea sit nihil corrupti officiis accusamus et deserunt voluptatum dolorum natus, ullam qui sapiente tempore animi, est provident dolore, aspernatur quia. Natus facere amet quam.',
    imageUrl: './assets/news/news3.jpg'
  },
  {
    id: '4',
    title: 'Soy una noticia con un maximo de 51 caracteres',
    description: 'En esta sección, para que quede prolijo deben poner texto con similar cantidad de caracteres 🙈',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At officia nam aut consectetur odit in ea sit nihil corrupti officiis accusamus et deserunt voluptatum dolorum natus, ullam qui sapiente tempore animi, est provident dolore, aspernatur quia. Natus facere amet quam.',
    imageUrl: './assets/news/news4.jpg'
  },
  {
    id: '5',
    title: 'Soy una noticia con un maximo de 51 caracteres',
    description: 'En esta sección, para que quede prolijo deben poner texto con similar cantidad de caracteres 🙈',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At officia nam aut consectetur odit in ea sit nihil corrupti officiis accusamus et deserunt voluptatum dolorum natus, ullam qui sapiente tempore animi, est provident dolore, aspernatur quia. Natus facere amet quam.',
    imageUrl: './assets/news/news4.jpg'
  },
  {
    id: '6',
    title: 'Soy una noticia con un maximo de 51 caracteres',
    description: 'En esta sección, para que quede prolijo deben poner texto con similar cantidad de caracteres 👻',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At officia nam aut consectetur odit in ea sit nihil corrupti officiis accusamus et deserunt voluptatum dolorum natus, ullam qui sapiente tempore animi, est provident dolore, aspernatur quia. Natus facere amet quam.',
    imageUrl: './assets/news/news4.jpg'
  },
  {
    id: '7',
    title: 'Soy una noticia con un maximo de 51 caracteres',
    description: 'En esta sección, para que quede prolijo deben poner texto con similar cantidad de caracteres 👻',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At officia nam aut consectetur odit in ea sit nihil corrupti officiis accusamus et deserunt voluptatum dolorum natus, ullam qui sapiente tempore animi, est provident dolore, aspernatur quia. Natus facere amet quam.',
    imageUrl: './assets/news/news4.jpg'
  },
  {
    id: '8',
    title: 'Soy una noticia con un maximo de 51 caracteres',
    description: 'En esta sección, para que quede prolijo deben poner texto con similar cantidad de caracteres 👻',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At officia nam aut consectetur odit in ea sit nihil corrupti officiis accusamus et deserunt voluptatum dolorum natus, ullam qui sapiente tempore animi, est provident dolore, aspernatur quia. Natus facere amet quam.',
    imageUrl: './assets/news/news3.jpg'
  },
  {
    id: '9',
    title: 'Soy una noticia con un maximo de 51 caracteres',
    description: 'En esta sección, para que quede prolijo deben poner texto con similar cantidad de caracteres 🙈',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At officia nam aut consectetur odit in ea sit nihil corrupti officiis accusamus et deserunt voluptatum dolorum natus, ullam qui sapiente tempore animi, est provident dolore, aspernatur quia. Natus facere amet quam.',
    imageUrl: './assets/news/news2.jpg'
  },
  {
    id: '10',
    title: 'Soy una noticia con un maximo de 51 caracteres',
    description: 'En esta sección, para que quede prolijo deben poner texto con similar cantidad de caracteres 🙈',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At officia nam aut consectetur odit in ea sit nihil corrupti officiis accusamus et deserunt voluptatum dolorum natus, ullam qui sapiente tempore animi, est provident dolore, aspernatur quia. Natus facere amet quam.',
    imageUrl: './assets/news/news2.jpg'
  },
  {
    id: '11',
    title: 'Soy una noticia con un maximo de 51 caracteres',
    description: 'En esta sección, para que quede prolijo deben poner texto con similar cantidad de caracteres 👻',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At officia nam aut consectetur odit in ea sit nihil corrupti officiis accusamus et deserunt voluptatum dolorum natus, ullam qui sapiente tempore animi, est provident dolore, aspernatur quia. Natus facere amet quam.',
    imageUrl: './assets/news/news3.jpg'
  },
  {
    id: '9',
    title: 'Soy una noticia con un maximo de 51 caracteres',
    description: 'En esta sección, para que quede prolijo deben poner texto con similar cantidad de caracteres 🙈',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At officia nam aut consectetur odit in ea sit nihil corrupti officiis accusamus et deserunt voluptatum dolorum natus, ullam qui sapiente tempore animi, est provident dolore, aspernatur quia. Natus facere amet quam.',
    imageUrl: './assets/news/news2.jpg'
  },
  {
    id: '10',
    title: 'Soy una noticia con un maximo de 51 caracteres',
    description: 'En esta sección, para que quede prolijo deben poner texto con similar cantidad de caracteres 🙈',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At officia nam aut consectetur odit in ea sit nihil corrupti officiis accusamus et deserunt voluptatum dolorum natus, ullam qui sapiente tempore animi, est provident dolore, aspernatur quia. Natus facere amet quam.',
    imageUrl: './assets/news/news2.jpg'
  },
  {
    id: '11',
    title: 'Soy una noticia con un maximo de 51 caracteres',
    description: 'En esta sección, para que quede prolijo deben poner texto con similar cantidad de caracteres 👻',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At officia nam aut consectetur odit in ea sit nihil corrupti officiis accusamus et deserunt voluptatum dolorum natus, ullam qui sapiente tempore animi, est provident dolore, aspernatur quia. Natus facere amet quam.',
    imageUrl: './assets/news/news3.jpg'
  },
]

export const sample_carousel: Carousel[] = [
  {
    id: 1,
    imageUrl: './assets/store/carrusel/slider1.gif'
  },
]


export const sample_sources: Sources[] = [
  {id: "1", title: "Teatro de la Ópera", imageUrl: './assets/news/news6.jpg'},
  {id: "2", title: "Estadio Olímpico", imageUrl: './assets/news/news2.jpg'},
  {id: "3", title: "Arena 02", imageUrl: './assets/news/news3.jpg'},
  {id: "4", title: "Accorhotels Arena", imageUrl: './assets/news/news4.jpg'},
  {id: "5", title: "Ziggo Dome", imageUrl: './assets/news/news5.jpg'},
  {id: "6", title: " Mercedes-Benz Arena", imageUrl: './assets/news/news1.jpg'},
  {id: "7", title: "Palalottomatica", imageUrl: './assets/news/news6.jpg'},
  {id: "8", title: "Arena Di Verona", imageUrl: './assets/news/news4.jpg'},
  {id: "9", title: "Sse Hydro", imageUrl: './assets/news/news5.jpg'},
  {id: "10", title: "Manchester Arena", imageUrl: './assets/news/news5.jpg'},
  {id: "11", title: "Madison Square Garden", imageUrl: './assets/news/news6.jpg'},
  {id: "12", title: "Estadio Único de La Plata", imageUrl: './assets/news/news2.jpg'},
  {id: "13", title: "Estadio Malvinas Argentinas", imageUrl: './assets/news/news3.jpg'},
]
