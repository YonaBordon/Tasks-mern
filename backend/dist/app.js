"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const app = (0, express_1.default)();
dotenv_1.default.config();
(0, db_1.default)();
const PORT = process.env.PORT || '4000';
app.listen(PORT, () => {
    console.log(`Servidor corriendo: puerto: ${PORT}`);
});
//# sourceMappingURL=app.js.map