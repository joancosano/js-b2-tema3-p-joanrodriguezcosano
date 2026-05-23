// T3. JavaScript profesional en una aplicación web
// U2. Delegación de eventos
// Enunciado disponible en u2e1.md / Enunciat disponible a u2e1.md

const TASK_LIST = [
    {
        name: 'Work',
        done: false,
    },
    {
        name: 'Shopping',
        done: false,
    },
    {
        name: 'Call mom',
        done: true,
    },
];

//Escribe aquí tu solución / escriviu aquí la vostra solució:

class TodoList {

    #appRef;
    #listRef;
    #todoTpl;

    list = [];

    constructor(appRef, listRef, todoTpl) {

        this.#appRef = appRef;
        this.#listRef = listRef;
        this.#todoTpl = todoTpl;

        this.init();
    }

    init() {

        this.#appRef.addEventListener("click", (event) => {

            event.preventDefault();

            if (event.target.matches(".js-todo-add")) {

                const input = document.querySelector(
                    ".js-todo-new-name"
                );

                this.add(
                    input.value,
                    false
                );

                input.value = "";
            }


            if (event.target.matches(".js-todo-done")) {

                const todo = event.target
                    .closest(".js-todo")
                    .dataset.todo;

                this.toggle(todo);
            }

           
            if (event.target.matches(".js-todo-delete")) {

                const todo = event.target
                    .closest(".js-todo")
                    .dataset.todo;

                this.remove(todo);
            }

        });

    }

    add(todo, status) {

        if (todo === "") {
            return false;
        }

        const exists = this.list.find(
            task => task.name === todo
        );

        if (exists) {
            return false;
        }

        this.list.push({
            name: todo,
            done: status
        });

        this.render();

        return true;
    }

    remove(todo) {

        this.list = this.list.filter(
            task => task.name !== todo
        );

        this.render();

    }

    toggle(todo) {

        const task = this.list.find(
            task => task.name === todo
        );

        if (task) {

            task.done = !task.done;

            this.render();
        }

    }

    render() {

        this.#listRef.innerHTML = "";

        const fragment =
            document.createDocumentFragment();

        this.list.forEach(task => {

            const clone =
                this.#todoTpl.content.cloneNode(true);

            const li =
                clone.querySelector(".js-todo");

            const name =
                clone.querySelector(".js-todo-name");

            const done =
                clone.querySelector(".js-todo-done");

            li.dataset.todo = task.name;

            li.dataset.done =
                String(task.done);

            name.textContent =
                task.name;

            done.textContent =
                task.done
                    ? "done"
                    : "pending";

            fragment.append(clone);

        });

        this.#listRef.append(fragment);

    }

}


const todosApp = new TodoList(

    document.querySelector("#app"),

    document.querySelector(".js-todo-list"),

    document.querySelector("#tpl-todo")

);



TASK_LIST.forEach(task => {

    todosApp.add(
        task.name,
        task.done
    );

});


todosApp.add('New one', false);
todosApp.toggle('Shopping');
todosApp.remove('Call mom');
todosApp.add('Another one', true);

document.querySelector('.js-todo-new-name').value = 'Test';
document.querySelector('.js-todo-add').click();

document.querySelector('.js-todo[data-todo="New one"] .js-todo-done').click();
document.querySelector('.js-todo[data-todo="Another one"] .js-todo-delete').click();