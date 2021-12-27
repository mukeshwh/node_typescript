"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const todoSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});
// const build = (attr : ITodo) => {
//     return new Todo(attr)
// }
todoSchema.statics.build = (attr) => {
    return new Todo(attr);
};
const Todo = mongoose_1.default.model('Todo', todoSchema);
exports.Todo = Todo;
//# sourceMappingURL=todo.js.map