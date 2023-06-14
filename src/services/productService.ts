import {AppDataSource} from "../data-source";
import {Product} from "../entity/productModel";

class ProductService{
    productRepo;
    constructor() {
        this.productRepo = AppDataSource.getRepository(Product);
    }
    async showAllProduct(){
       return await this.productRepo.find()
    }
    async createProduct(product){
        return await this.productRepo.save(product)
    }

    async findProductById(id){
        return await this.productRepo.findOneBy({id: id})
    }
    async deleteProductById(id){
        return await this.productRepo.remove({id:id})
    }

}
export default  new ProductService;