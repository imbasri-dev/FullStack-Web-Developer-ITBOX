// model
const fs = require("fs");
class Todo {
    constructor(id, task, status) {
        this.id = id;
        this.task = task;
        this.status = status || false;
    }
    // method get data JSON
    static getTodos() {
        // database
        let data = fs.readFileSync("./data.json", "utf8");
        let parsedData = JSON.parse(data);
        let todos = parsedData.map((el) => {
            // descturing
            const { id, task, status } = el;
            // instansi
            return new Todo(id, task, status);
        });
        return todos;
    }
    static show() {
        let todos = this.getTodos();
        return todos;
    }

    static add(todo) {
        let todos = this.getTodos();
        // let temp = new Todo(id, task, status);
        let id = todos[todos.length - 1].id + 1;
        let task = todo[0];
        let temp = new Todo(id, task);
        todos.push(temp);
        // console.log(todos);
        this.save(todos);
    }

    static delete(todo) {
        let todos = this.getTodos();
        let id = Number(todo[0]);
        todos = todos.filter((todo) => todo.id !== id);
        // console.log(todos);
        this.save(todos);
    }

    static update(todo) {
        let todos = this.getTodos();
        let id = Number(todo[0]);
        let task = todo[1];
        let status = Boolean(todo[2]);
        todos = todos.map((todo) => {
            if (todo.id === id) {
                todo.task = task;
                todo.status = status;
            }
            return todo;
        });
        // console.log(todos);
        this.save(todos);
    }
    static save(data) {
        fs.writeFileSync("./data.json", JSON.stringify(data, null, 3));
    }
}

module.exports = Todo;
