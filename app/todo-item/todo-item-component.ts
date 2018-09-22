import {Component, Input, Output, EventEmitter} from "@angular/core";
import {ToDo} from "../shared/ToDo";

@Component({
    moduleId: module.id,
    selector: 'todo-item',
    templateUrl: 'todo-item-component.html',
    styleUrls: ['todo-item-component.css']
})
export class TodoItemComponent {
    @Input() todo: ToDo;

    @Output() delete = new EventEmitter();
    @Output() toggle = new EventEmitter();

    onToggle() {
        this.toggle.emit(this.todo);
    }

    onDelete() {
        this.delete.emit(this.todo);
    }
}