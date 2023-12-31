import Autobind from "../decorators/autobind" 
import { Draggable } from "../models/drag-drop" 
import Project from "../models/project" 
import Component from "./base-component" 

// ProjectItem Class
class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> implements Draggable {
    private project: Project;

    constructor(hostId: string, project: Project) {
        super('single-project', hostId, false, project.id);
        this.project = project;

        this.configure();
        this.renderContent();
    }

    @Autobind
    dragStartHandler(event: DragEvent): void {
        event.dataTransfer!.setData("text/plain", this.project.id);
        event.dataTransfer!.effectAllowed = 'move';

    }

    dragEndHandler(_: DragEvent): void {
        console.log("Drag End");
    }

    get numOfPeople(): string {
        if (this.project.people === 1) {
            return "1 person assigned."
        }
        return `${this.project.people} people assigned.`
    }


    configure(): void {
        this.element.addEventListener('dragstart', this.dragStartHandler);
        this.element.addEventListener('dragend', this.dragEndHandler);
    }
    renderContent(): void {
        this.element.querySelector('h2')!.textContent = this.project.title;
        this.element.querySelector('h3')!.textContent = this.numOfPeople;
        this.element.querySelector('p')!.textContent = this.project.description;
    }

}

export default ProjectItem