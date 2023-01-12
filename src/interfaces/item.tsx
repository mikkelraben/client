export class Item{
    public id:   string;
    public data: string;
    public done: boolean;
    constructor( id: string, data: string, done: boolean){
        this.id = id;
        this.data = data;
        this.done = done;
    }
}

export interface ItemList{
    list: Array<Item>;
}