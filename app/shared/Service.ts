import {ToDo} from "./ToDo";
import {Headers, Http} from "@angular/http";
import {Injectable} from "@angular/core";
import "rxjs/add/operator/toPromise";

@Injectable()
export class Service {

    private todos: ToDo[];

    private api = "https://to-do-server.herokuapp.com";
    private userId = "adfb7880-2242-44c2-86ef-ece581da11d8";
    private token = "0672c76a-df9d-419c-9636-dae06d9869a8";

    private headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
    });

    constructor(private http: Http) {}

    getToDos(): Promise<ToDo[]> {
        return this.http.get(
            this.api + "/rest/users/" + this.userId + "/tasks",
            {headers: this.headers}
        ).toPromise()
            .then(res => res.json()._embedded.tasks)
            .then(tasks => this.todos = Service.mapToTask(tasks))
    }

    createTodo(title: string) {
        this.http.post(
            this.api + "/rest/tasks",
            {
                date: new Date().toISOString().substring(0, 10),
                description: "CREATE FROM ANGULAR",
                finished: false,
                title: title,
                user: this.api + "rest/users/" + this.userId
            },
            {headers: this.headers}
        ).subscribe(response => {
            console.log("CREATE TASK")
        });
    }

    deleteToDo(todo: ToDo) {
        this.http.delete(
            todo.href,
            {headers: this.headers}
        ).subscribe(response => {
            console.log("DELETE TASK")
        });
        let index = this.todos.indexOf(todo);
        if (index > -1) this.todos.splice(index, 1);
    }

    toggleToDo(todo: ToDo) {
        this.http.patch(
            todo.href,
            {
                finished: !todo.completed
            },
            {headers: this.headers}
        ).subscribe(response => {
            console.log("TOGGLE TASK")
        });
        todo.completed = !todo.completed;
    }

    private static mapToTask(tasks: any): ToDo[] {
        let todosmap: ToDo[] = [];

        for (let i = 0; i < tasks.length; i++) {
            todosmap.push({
                href: tasks[i]._links.self.href,
                title: tasks[i].title,
                completed: tasks[i].finished
            })
        }

        return todosmap;
    }

}
