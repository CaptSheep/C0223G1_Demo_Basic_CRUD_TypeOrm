declare class ProductService {
    productRepo: any;
    constructor();
    showAllProduct(): Promise<any>;
    createProduct(product: any): Promise<any>;
    findProductById(id: any): Promise<any>;
    deleteProductById(id: any): Promise<any>;
}
declare const _default: ProductService;
export default _default;
