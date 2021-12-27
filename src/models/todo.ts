import mongoose from 'mongoose';

interface ITodo {
    title : String;
    description : String;
}

interface todoModelInterace extends mongoose.Model<any>{
    build(attr: ITodo) : any
}

const todoSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description: {
        type : String,
        required : true
    }
});


// const build = (attr : ITodo) => {
//     return new Todo(attr)
// }

todoSchema.statics.build = (attr : ITodo) => {
    return new Todo(attr)
}


const Todo = mongoose.model<any, todoModelInterace>('Todo', todoSchema);

export { Todo }