export class Item{
    public data: string;
    public done: boolean;
    constructor(data: string,done: boolean){
        this.data = data;
        this.done = done;
    }
}

export interface ItemList{
    list: Array<Item>;
}