const { DataTypes, Model } = require("sequelize");
const { sequelize, connect } = require("./connectDB.js");
const Todo = require("./TodoModel.js");
/*const countTodo = async () => {
    try {
        const totalcount = await Todo.count();
        console.log('Found items in the table: ', totalcount);
    }   catch (error) {
        console.error(error);
    }

}*/
/*const createTodo = async () => {
    try {
        await connect();
        const todo = await db.Todo.create({
            title: "submit assignment",
            dueDate: new Date(),
            completed: false,
            id: 24,
        });
        //console.log('Created a todo with id : ' , todo.id);
    }   catch (error) {
        console.error(error);
    }*/
 

const deleteitem = async (id) => {
    try {
        const deletedRow = await Todo.destroy({
            where: {
                id: id
            }
        });
    }   catch (error){
        console.error(error);
    }
};

const displayAllTodos = async () => {
    try {
        const todos = await Todo.findAll()({
            /*order: [
                [ 'id', 'ASCD']
            ]*/
        });
        const todoList = todos.map(todo => todo.displayableString()).join("\n");
        console.log(todoList);
    }   catch (error) {
        console.log(error)
    }
};   

(async () => {
   // await createTodo();
    //await countTodo();
    //await deleteitem(3);
    await displayAllTodos();
})();