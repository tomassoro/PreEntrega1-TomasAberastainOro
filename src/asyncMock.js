const products= [
    {
        id:'1',
        name: 'Mate Imperial Cuero Claro',
        price: 8500,
        category:'imperial',
        img: './Images/WhatsApp Image 2022-12-07 at 14.06.45 (1).jpeg',
        stock: 20,
        description:'Mate Imperial de cuero claro y metal grabado. Incluye bombilla',
    },
    {
        id:'2',
        name: 'Mate Imperial Cuero Opaco',
        price: 8500,
        category:'imperial',
        img: './Images/WhatsApp Image 2022-12-07 at 14.06.47.jpeg',
        stock: 20,
        description:'Mate Imperial de cuero opaco y metal grabado. Incluye bombilla',
    },
    {
        id:'3',
        name: 'Mate Imperial Cuero de Alpaca Labrado',
        price: 8500,
        category:'imperial',
        img: './Images/WhatsApp Image 2022-12-07 at 14.06.47.jpeg',
        stock: 20,
        description:'Mate Imperial de cuero de alpaca, metal labrado. Incluye bombilla',
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
