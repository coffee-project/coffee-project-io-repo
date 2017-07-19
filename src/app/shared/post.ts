export class Post {
    constructor(
        public id?: number,
        public date?: string,
        public author?: string,
        public privacy?: boolean,
        public title?: string,
        public subtitle?: string,
        public image?: string,
        public imagesq?: string,
        public description?: string,
        public content?: string
    ) {}
}
