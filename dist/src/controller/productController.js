"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productService_1 = __importDefault(require("../services/productService"));
class ProductController {
    constructor() {
    }
    async getAllProduct(req, res) {
        let product = await productService_1.default.showAllProduct();
        res.status(200).json({
            message: `All product : `,
            product: product
        });
    }
    async createProduct(req, res) {
        let product = req.body;
        await productService_1.default.createProduct(product);
        return res.status(200).json({
            message: `Create Product ${product.name} success`,
            product: product
        });
    }
    async findProductById(req, res) {
        let id = req.params.id;
        let product = await productService_1.default.findProductById(+id);
        if (product) {
            res.status(200).json({
                message: `Product with id ${id} find success`,
                product: product
            });
        }
        else {
            res.status(404).json({
                message: `Product not found `,
            });
        }
    }
    async deleteProductById(req, res) {
        let id = req.params.id;
        let product = await productService_1.default.findProductById(+id);
        if (product) {
            await productService_1.default.deleteProductById(+id);
            return res.status(200).json({
                message: `Delete product with id ${id} success`
            });
        }
        else {
            return res.status(404).json({
                message: `Product not found`
            });
        }
    }
}
exports.default = new ProductController;
//# sourceMappingURL=productController.js.map