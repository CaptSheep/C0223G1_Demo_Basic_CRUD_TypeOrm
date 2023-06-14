"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = __importDefault(require("express"));
const productController_1 = __importDefault(require("../controller/productController"));
exports.productRouter = (0, express_1.default)();
exports.productRouter.post('/create', productController_1.default.createProduct);
exports.productRouter.get('/list', productController_1.default.getAllProduct);
exports.productRouter.get('/find/:id', productController_1.default.findProductById);
exports.productRouter.get('/delete/:id', productController_1.default.deleteProductById);
//# sourceMappingURL=productRouter.js.map