import ProductService from "../services/productService";
import e from "express";

class ProductController{
    constructor() {

    }
    async getAllProduct(req,res){
        let product = await ProductService.showAllProduct()
        res.status(200).json({
            message: `All product : `,
            product: product
        })
    }
    async createProduct(req,res){
        let product = req.body;
        await ProductService.createProduct(product);
        return res.status(200).json({
            message: `Create Product ${product.name} success`,
            product:product
        })
    }
    async findProductById(req,res){
        let id= req.params.id
       let product = await ProductService.findProductById(+id);
        if(product){
            res.status(200).json({
                message: `Product with id ${id} find success`,
                product: product
            })
        }
        else {
            res.status(404).json({
                message: `Product not found `,

            })
        }
    }

    async deleteProductById(req,res){
        let id =req.params.id;
        let product = await ProductService.findProductById(+id);
        if(product){
            await ProductService.deleteProductById(+id)
            return res.status(200).json({
                message: `Delete product with id ${id} success`
            })
        }
        else {
            return res.status(404).json({
                message: `Product not found`
            })
        }
    }


}

export default new ProductController;