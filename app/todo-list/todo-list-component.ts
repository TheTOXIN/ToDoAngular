import {Component , OnInit} from "@angular/core";
import {ToDo} from "../shared/ToDo";
import {Service} from "../shared/Service";

@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'todo-list-component.html',
    styleUrls: ['todo-list-component.css']
})
export class ToDoListComponent implements OnInit{
    todos: ToDo[];

    constructor(private service: Service) {
        this.todos = [];
    }

    ngOnInit() {
        this.todos = this.service.getToDos()
    }

    delete(todo: ToDo) {
        this.service.deleteToDo(todo);
    }

    toggle(todo: ToDo) {
        this.service.toggleToDo(todo);
    }
}