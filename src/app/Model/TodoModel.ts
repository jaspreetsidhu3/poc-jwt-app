export class TodoModel {
    id: number
    title: string
    desc: string
    active: boolean

    constructor() {
        this.id = 0,
            this.title = "",
            this.desc = "",
            this.active = false
    }
}