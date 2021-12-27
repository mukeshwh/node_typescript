"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoRouter = void 0;
const express_1 = __importDefault(require("express"));
const todo_1 = require("./../models/todo");
const router = express_1.default.Router();
exports.todoRouter = router;
router.get('/api/todo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todo = yield todo_1.Todo.find({});
    return res.status(200).send(todo);
}));
router.post('/api/todo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body.title);
    const { title, description } = req.body;
    const todo = todo_1.Todo.build({ title, description });
    yield todo.save();
    return res.status(201).send(todo);
}));
//# sourceMappingURL=todo.js.map