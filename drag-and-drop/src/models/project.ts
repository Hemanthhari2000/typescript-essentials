import { PROJECT_STATUS } from "../constants/enums" 

// Project State Management
class Project {
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public people: number,
        public status: PROJECT_STATUS
    ) {
    }
}

export default Project