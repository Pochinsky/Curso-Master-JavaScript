export class ProjectModel {
    constructor(
        public _id: string,
        public name: string,
        public description: string,
        public category: string,
        public languages: string,
        public year: number,
        public image: string
    ){}
}
