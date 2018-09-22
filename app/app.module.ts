import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {ToDoFormComponent} from "./todo-form/todo-form-component";
import {ToDoListComponent} from "./todo-list/todo-list-component";
import {TodoItemComponent} from "./todo-item/todo-item-component";
import {Service} from "./shared/Service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        ToDoFormComponent,
        ToDoListComponent,
        TodoItemComponent
    ],
    providers: [
        Service
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}