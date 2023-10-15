import Autobind from "../decorators/autobind"
import ProjectState from "../state/project-state"
import { validate, Validatable } from "../util/validation"
import Component from "./base-component" 

// ProjectInput Class
class ProjectInput extends Component<HTMLDivElement, HTMLFormElement>{
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;
    projectState: ProjectState;

    constructor() {
        super('project-input', 'app', true, 'user-input');

        this.titleInputElement = this.element.querySelector("#title") as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector("#description") as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector("#people") as HTMLInputElement;
        this.projectState = ProjectState.getInstance();

        this.configure();
    }

    configure() {
        this.element.addEventListener('submit', this.submitHandler)
    }

    renderContent(): void { }

    private gatherUserInput(): [string, string, number] | void {
        const title = this.titleInputElement.value;
        const description = this.descriptionInputElement.value;
        const people = this.peopleInputElement.value;

        if (
            !validate({ value: title, required: true, minLength: 3 } as Validatable) ||
            !validate({ value: description, required: true, minLength: 3 } as Validatable) ||
            !validate({ value: +people, required: true, max: 5 } as Validatable)
        ) {
            alert("Invalid input, please try again!")
            return;
        }
        return [title, description, +people];
    }

    private clearInputs() {
        this.titleInputElement.value = '';
        this.descriptionInputElement.value = '';
        this.peopleInputElement.value = '';
    }

    @Autobind
    private submitHandler(event: Event) {
        event.preventDefault();
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            const [title, description, people] = userInput;
            this.projectState.addProject(title, description, people)
        }
        this.clearInputs();
    }
}

export default ProjectInput