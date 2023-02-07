const products= [
    {
        id:'1',
        name: 'Mate Imperial Cuero Claro',
        price: 8500,
        category:'Imperial',
        img: '../Images/WhatsApp Image 2022-12-07 at 14.06.45.jpeg',
        stock: 20,
        description:'Mate Imperial de cuero claro y metal grabado. Incluye bombilla',
    },
    {
        id:'2',
        name: 'Mate Imperial Cuero Opaco',
        price: 8500,
        category:'Imperial',
        img: '../Images/WhatsApp Image 2022-12-07 at 14.06.47.jpeg',
        stock: 20,
        description:'Mate Imperial de cuero opaco y metal grabado. Incluye bombilla',
    },
    {
        id:'3',
        name: 'Mate Imperial Cuero Alpaca',
        price: 8500,
        category:'Imperial',
        img: '../Images/WhatsApp Image 2022-12-07 at 14.06.48.jpeg',
        stock: 20,
        description:'Mate Imperial de cuero de alpaca, metal labrado. Incluye bombilla',
    },
    {
        id:'4',
        name: 'Yerba Canarias Tradicional',
        price: 900,
        category:'Yerba',
        img: '../Images/canarias-Yerba-mate-1kg-625daaa5cf328.jpg',
        stock: 32,
        description:'Yerba mate Canarias estilo Tradicional 500gr ',
    },
    {
        id:'5',
        name: 'Yerba Canarias Hierbas ',
        price: 900,
        category:'Yerba',
        img: '../Images/cana44.jpg',
        stock: 32,
        description:'Yerba mate Canarias Té verde y jengibre 500gr ',
    },
    {
        id:'6',
        name: 'Yerba Canarias estilo Serena',
        price: 900,
        category:'Yerba',
        img: '../Images/canarias-por-kilo-estilo-serena-20221108-1450016.jpg',
        stock: 32,
        description:'Yerba mate Canarias estilo Serena 500gr ',
    },
];

export const getProducts = (categoryId) => {
    console.log(categoryId)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}
