import { PROJECT_STATUS } from "../constants/enums" 
import Project from "../models/project" 

type Listener<T> = (items: T[]) => void

class State<T>{
    protected listeners: Listener<T>[] = [];

    addListener(listernFn: Listener<T>) {
        this.listeners.push(listernFn);
    }

}

class ProjectState extends State<Project> {
    private static instance: ProjectState;
    private projects: Project[] = [];

    private constructor() {
        super();
    }

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance
    }
    addProject(title: string, description: string, numOfPeople: number) {
        const newProj: Project = {
            id: Math.random().toString(),
            title: title,
            description: description,
            people: numOfPeople,
            status: PROJECT_STATUS.ACTIVE
        }
        this.projects.push(newProj);
        this.updateListeners();
    }

    moveProject(projectId: string, newStatus: PROJECT_STATUS) {
        const project = this.projects.find(prj => prj.id === projectId);
        if (project && project.status !== newStatus) {
            project.status = newStatus;
            this.updateListeners();
        }
    }

    private updateListeners() {
        for (const listenerFn of this.listeners) {
            listenerFn(this.projects.slice());
        }
    }
}

export default ProjectState