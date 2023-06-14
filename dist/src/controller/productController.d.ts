declare class ProductController {
    constructor();
    getAllProduct(req: any, res: any): Promise<void>;
    createProduct(req: any, res: any): Promise<any>;
    findProductById(req: any, res: any): Promise<void>;
    deleteProductById(req: any, res: any): Promise<any>;
}
declare const _default: ProductController;
export default _default;
