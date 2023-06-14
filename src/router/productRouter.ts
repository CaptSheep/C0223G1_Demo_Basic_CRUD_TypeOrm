import router from 'express';
import ProductController from "../controller/productController";

export const productRouter = router();

productRouter.post('/create',ProductController.createProduct)
productRouter.get('/list',ProductController.getAllProduct)
productRouter.get('/find/:id',ProductController.findProductById)
productRouter.get('/delete/:id',ProductController.deleteProductById)