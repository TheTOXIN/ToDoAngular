import {ToDo} from "./ToDo";
import {todos} from "./Data"

export class Service {
    todos: ToDo[] = todos;

    getToDos(): ToDo[] {
        return this.todos;
    }

    createTodo(title: string) {
        let todo = new ToDo(title);
        this.todos.push(todo);
    }

    deleteToDo(todo: ToDo) {
        let index = this.todos.indexOf(todo);
        if (index > -1) this.todos.splice(index, 1);
    }

    toggleToDo(todo: ToDo) {
        todo.completed = !todo.completed;
    }
}