import {Component} from "@angular/core";
import {Service} from "../shared/Service";

@Component({
    moduleId: module.id,
    selector: 'todo-form',
    templateUrl: 'todo-form-component.html',
    styleUrls: ['todo-form-component.css']
})
export class ToDoFormComponent {
    title: string = '';

    constructor(private service: Service) {}

    onSubmit() {
        this.service.createTodo(this.title);
    }
}