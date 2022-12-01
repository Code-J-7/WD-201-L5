const db = require("./models/index");
const Todo = require("./TodoModel");
//const { connect } = require("./connectDB.js");
//const func = require("./todo.js")

/*const createTodo = async () => {
  try {
      await connect();
      const todo = await db.Todo.create({
          title: "submit assignment",
          //dueDate: ,
          completed: false,
          id: 24,
      });
      //console.log('Created a todo with id : ' , todo.id);
  }   catch (error) {
      console.error(error);
  }
  try {
    await connect();
    const todo = await db.Todo.create({
      title: "pay rent",
      dueDate: new Date(),
      ceompleted: false,
      id: 25,
    });

  } catch (error){
    console.log(error);
  }
};*/
/*const deleteTodo = async (id) => {
  try{
    await Todo.destroy({
      where: {
        //title: "submit assignment",
        id: id
      }
    });
  } catch (error){
    console.log(error);
  }
};*/
const listTodo = async () => {
  try {
    await db.Todo.showList();
  } catch (error) {
    console.error(error);
  }
};
(async () => {
  //await createTodo();
  //await deleteTodo(3);
  await listTodo();
})();