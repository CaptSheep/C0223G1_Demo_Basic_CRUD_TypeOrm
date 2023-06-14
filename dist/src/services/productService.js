"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const productModel_1 = require("../entity/productModel");
class ProductService {
    constructor() {
        this.productRepo = data_source_1.AppDataSource.getRepository(productModel_1.Product);
    }
    async showAllProduct() {
        return await this.productRepo.find();
    }
    async createProduct(product) {
        return await this.productRepo.save(product);
    }
    async findProductById(id) {
        return await this.productRepo.findOneBy({ id: id });
    }
    async deleteProductById(id) {
        return await this.productRepo.remove({ id: id });
    }
}
exports.default = new ProductService;
//# sourceMappingURL=productService.js.map