// komunikasi dengan database
// boleh pake orm, boleh raw query

const prisma = require("../db");

const findProducts = async () => {
    const products = await prisma.product.findMany();

    return products;
};

const findProductById = async (id) => {
    const product = await prisma.product.findUnique({
        where: {
            id,
        },
    });
    return product;
};

const insertProduct = async (ProductData) => {
    const product = await prisma.product.create({
        data: {
            name: ProductData.name,
            description: ProductData.description,
            image: ProductData.image,
            price: ProductData.price,
        },
    });

    return product;

};

const deleteProduct = async (id) => {
    await prisma.product.delete({
        where: {
            id,
        },
    });

};

const editProduct = async (id, ProductData) => {
    const product = await prisma.product.update({
           where: {
            id: parseInt(id),
        },
        data: {
            name: ProductData.name,
            description: ProductData.description,
            image: ProductData.image,
            price: ProductData.price,
           }, 
    });

    return product;
}

module.exports = {
    findProducts,
    findProductById,
    insertProduct,
    deleteProduct,
    editProduct,
};

