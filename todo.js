const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
    
    const overdue = () => {
      return all.filter((item)=> {
          return item.completed === false && item.dueDate <= new Date().toLocaleDateString("en-CA")
      })
    }
    const dueToday = () => {
      return all.filter((item)=> {
        return item.dueDate === new Date().toLocaleDateString("en-CA") 
      })
    }
    const dueLater = () => {
      return all.filter((item)=> {
        return item.dueDate >= new Date().toLocaleDateString("en-CA") 
      })
    }
    const toDisplayableList = (list) => {
      let tasklist = [];
      list.filter((item) => {
        if (item.dueDate === today) {
          if (item.completed === true) {
            tasklist.push(`[x] ${item.title}`)
          } else {
            tasklist.push(`[ ] ${item.title}`)
          }
        }else{
          if (item.completed === true) {
            tasklist.push(`[x] ${item.title} ${item.dueDate}`)
          }else{
            tasklist.push(`[ ] ${item.title} ${item.dueDate}`)
          }
        }
      })
      return tasklist.join("\n")
    }
    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
  }
module.exports = todoList;




/*const todos = todoList();
    
    const formattedDate = d => {
      return d.toISOString().split("T")[0]
    }
    
    var dateToday = new Date()
    const today = formattedDate(dateToday)
    const yesterday = formattedDate(
      new Date(new Date().setDate(dateToday.getDate() - 1))
    )
    const tomorrow = formattedDate(
      new Date(new Date().setDate(dateToday.getDate() + 1))
    )
    
    todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false, id: 24})
    todos.add({ title: 'Pay rent', dueDate: today, completed: true, id :25 })
    todos.add({ title: 'Service Vehicle', dueDate: today, completed: false, id: 28 })
    todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false, id: 26 })
    todos.add({ title: 'Call Acme Corp.', dueDate: tomorrow, completed: false , id: 27})
    
    console.log("My Todo-list\n\n")
    
    console.log("Overdue")
    var overdues = todos.overdue()
    var formattedOverdues = todos.toDisplayableList(overdues)
    console.log(formattedOverdues)
    console.log("\n\n")
    
    console.log("Due Today")
    let itemsDueToday = todos.dueToday()
    let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
    console.log(formattedItemsDueToday)
    console.log("\n\n")
    
    console.log("Due Later")
    let itemsDueLater = todos.dueLater()
    let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
    console.log(formattedItemsDueLater)
    console.log("\n\n")*/