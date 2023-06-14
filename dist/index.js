"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_source_1 = require("./src/data-source");
const body_parser_1 = __importDefault(require("body-parser"));
const router_1 = require("./src/router/router");
const app = (0, express_1.default)();
data_source_1.AppDataSource.initialize().then(() => {
    console.log('Database connected');
});
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use(router_1.router);
app.listen(8000, 'localhost', () => {
    console.log(`App is running at port 8000`);
});
//# sourceMappingURL=index.js.map