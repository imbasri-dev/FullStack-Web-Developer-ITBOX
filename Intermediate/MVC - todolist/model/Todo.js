// model
const fs = require("fs");
class Todo {
    constructor(id, task, status) {
        this.id = id;
        this.task = task;
        this.status = status;
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
}

module.exports = Todo;
