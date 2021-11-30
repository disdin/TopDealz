import Product from "../models/ProductSchema.js"


export const getProducts=async (req,res)=>{
    try{
        const products=await Product.find({})
        res.json(products);
    }catch(err){
        console.log("Error: ",err);
    }
}

export const getProductById=async(req,res)=>{
    try{
        const product=await Product.findOne({'id':req.params.id})
        res.json(product);
    }catch(err){
        console.log("Error: ",err);
    }
}