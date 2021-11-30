// import React from 'react';
import {products} from "./constants/product.js";
import Product from "./models/ProductSchema.js"

const DefaultData = async() => {
    try{
        await Product.deleteMany({}); // this is becase before when u restart the app agiin this below insertMany code will run and every time this products list of objects will enter our mongodb database so thats why we use deleteMany() function to  empty the database before adding the product files
        await Product.insertMany(products) // for inserting one object use function insertOne()  but more multiple objects use function insertMany()
        console.log("data imported successfully");
    }catch(err){
        console.log("Error: ",err.message);
    }
}

export default DefaultData
